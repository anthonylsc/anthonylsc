@echo off
REM Simple installer script — ensures Node is installed then runs npm install
node --version >nul 2>&1
if %errorlevel% neq 0 (
  echo Node.js is required. Install from https://nodejs.org and re-run this script.
  pause
  exit /b 1
)

echo Installing dependencies...
npm install
if %errorlevel% neq 0 (
  echo npm install failed. Check the output.
  pause
  exit /b 1
)

echo Done. Run run-dev.bat to start the dev server.
pause
