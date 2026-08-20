@echo off
cd /d "%~dp0"
title Toast Menu [PAID]
frida -l ac_bridge.js -l toastmenu.js "EACLauncher.exe"
pause
