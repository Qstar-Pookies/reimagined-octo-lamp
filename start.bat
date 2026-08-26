@echo off
cd /d "%~dp0"
title Toasts Menu [PAID]
cls
frida -l ac_bridge.js -l toastmenu.js "EACLauncher.exe" >nul 2>&1
