/* 
Frida scripting Training against Allsafe vulnerable Android application

Test 2 : Root Detection Bypass challenge
*/

setTimeout(function(){
    Java.perform(function (){
        console.log("");
            console.log("[running the script");

            var RootDetection = Java.use("infosecadventures.allsafe.challenges.RootDetection");
        RootDetection.$init.overload().implementation = function() {
        var RootBeer = Java.use("com.scottyab.rootbeer.RootBeer");
        this.$init();
        console.log(this.getContext());
        var RootBeerInstance = RootBeer.$new(this.getContext());
        RootBeerInstance.isRooted.implementation = function(){return false}
          
    }});
},0); 
