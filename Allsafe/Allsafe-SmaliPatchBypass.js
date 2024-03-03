/* 
Frida scripting Training against Allsafe vulnerable Android application

Test 3 : SmaliPatch Bypass challenge
*/

setTimeout(function(){
    Java.perform(function (){
    	console.log("");
	    console.log("[running the script]");

	    var SmaliPatch = Java.use("infosecadventures.allsafe.challenges.SmaliPatch");
        var Toast = Java.use("android.widget.Toast");
        
        SmaliPatch.$init.overload().implementation = function(){
        
        this.$init();

        this.lambda$onCreateView$0$SmaliPatch.overload('infosecadventures.allsafe.challenges.SmaliPatch$Firewall','android.view.View').implementation = function (Firewall,view){

            
            Toast.makeText(this.getContext(), Java.use("java.lang.String").$new("Firewall is now activated, good job! 👍"), 1).show();
            return;
        

        }
    }
        

	  
    });
},0);
