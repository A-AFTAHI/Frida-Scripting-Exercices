/* 
Frida scripting Training against AndroGoat vulnerable Android application

Test 2 : Root Detection Bypass
*/

setTimeout(function(){
    Java.perform(function (){
        console.log("");
            console.log("[running the script");

            var Root = Java.use("owasp.sat.agoat.RootDetectionActivity");
        var rootInstance = Root.$new();
        rootInstance.isRooted.implementation = function(){return false}
            
          
    });
},0);                                                                                                                                                                                                            
