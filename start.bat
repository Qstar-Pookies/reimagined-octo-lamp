@echo off
cd /d "%~dp0"
title Toast Menu [PAID]
cls
echo.
echo hold up...
echo.
frida -l ac_bridge.js -l toastmenu.js "EACLauncher.exe"

echo.
echo just press anything
pause > nul
