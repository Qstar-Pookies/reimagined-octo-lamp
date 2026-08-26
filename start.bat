@echo off
cd /d "%~dp0"
title Toasts Menu [PAID]
frida -l ac_bridge.js -l toastmenu.js "EACLauncher.exe" 2>nul
