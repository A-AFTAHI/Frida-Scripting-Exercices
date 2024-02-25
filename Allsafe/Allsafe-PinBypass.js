/* 
Frida scripting Training against Allsafe vulnerable Android application

Test 1 : Pin Bypass challenge
*/

setTimeout(function(){
    Java.perform(function (){
        console.log("");
            console.log("[running the script");

            var PinBypass = Java.use("infosecadventures.allsafe.challenges.PinBypass");
        var pinBypassInstance = PinBypass.$new();
        pinBypassInstance.checkPin.implementation = function(){return true}
          
    });
},0);  
