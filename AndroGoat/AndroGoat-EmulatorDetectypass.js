/* 
Frida scripting Training against AndroGoat vulnerable Android application

Test 1 : Emulator Detection Bypass
*/

setTimeout(function(){
    Java.perform(function (){
        console.log("");
            console.log("[running the script");

            var Emulator = Java.use("owasp.sat.agoat.EmulatorDetectionActivity");
        var emulatorInstance = Emulator.$new();
        emulatorInstance.isEmulator.implementation = function(){return false}
            
          
    });
},0);     
