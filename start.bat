@echo off
cd /d "%~dp0"
title Toasts Menu [PAID]
frida -l ac_bridge.js -l Root.Skid.js "EACLauncher.exe" 2>nul
