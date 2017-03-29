@ echo off
SET WWWROOT=\\192.168.103.229\apk\
SET APK_PUBLISH_PATH=aditya
SET APK_NAME=tansasc
SET MOBILE_PROJECT=.

copy %MOBILE_PROJECT%\platforms\android\build\outputs\apk\android-debug.apk %WWWROOT%%APK_PUBLISH_PATH%\%APK_NAME%_%1_%2.apk