@echo off
set NODE_PATH=C:\Program Files\nodejs
set PATH=%NODE_PATH%;%PATH%
cd /d "%~dp0"
"%NODE_PATH%\npm.cmd" run dev
pause
