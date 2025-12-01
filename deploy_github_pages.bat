@echo off
setlocal enabledelayedexpansion

REM Configuration
set "REPO_USER=anthonylsc"
set "REPO_NAME=anthonylsc"
set "REMOTE_URL=https://github.com/%REPO_USER%/%REPO_NAME%.git"
set "DEPLOY_BRANCH=gh-pages"
set "COMMIT_MSG=Deploy to GitHub Pages"

REM Ensure inside a git repository
git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo Not inside a git repository.
  exit /b 1
)

REM Add remote origin if missing
git remote get-url origin >nul 2>&1
if errorlevel 1 (
  git remote add origin %REMOTE_URL% || echo Failed to add remote origin
)

REM Commit any changes (skip if nothing to commit)
git add -A
git commit -m "%COMMIT_MSG%" >nul 2>&1 || echo No changes to commit.

REM Save current branch
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "CURRENT_BRANCH=%%b"

REM Create orphan deploy branch and push
git branch -D %DEPLOY_BRANCH% >nul 2>&1
git checkout --orphan %DEPLOY_BRANCH%
git reset --hard
git add -A
git commit -m "%COMMIT_MSG%" >nul 2>&1 || echo Nothing to commit on %DEPLOY_BRANCH%.
git push -f origin %DEPLOY_BRANCH%

REM Return to original branch
git checkout -f %CURRENT_BRANCH%

echo Deployment finished.
echo Site URL: https://%REPO_USER%.github.io/%REPO_NAME%/

endlocal
exit /b 0