@echo off
cd /d "%~dp0"
title Root.Skid [PAID] Menu
cls
echo.
frida -l ac_bridge.js -l Root.Skid.js "EACLauncher.exe"
echo.
pause
