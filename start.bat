@echo off
cd /d "%~dp0"
title Toast Menu [PAID]
cls

echo ================================
echo     Toast Menu [PAID]
echo ================================
echo.
echo Make sure you are IN THE GAME before pressing enter thing
echo.
echo press enter when you are reading
echo.

pause > nul

echo.
echo hold up...
echo.
frida -l ac_bridge.js -l toastmenu.js "EACLauncher.exe"

echo.
echo just press anything
pause > nul
