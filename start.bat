@echo off
cd /d "%~dp0"
title Toasts Menu [PAID]
frida -l "%~dp0ac_bridge.js" -l "%~dp0toastmenu.js" "EACLauncher.exe"
