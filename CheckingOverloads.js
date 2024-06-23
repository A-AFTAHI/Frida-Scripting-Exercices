/* 
Frida scripting Training against Allsafe vulnerable Android application

Test 4 : CertificatePinning Bypass challenge
*/

setTimeout(function(){
    Java.perform(function (){
    	console.log("");
	    console.log("[running the script]");

	    var CertificatePinnerBuilder = Java.use("java.util.List");
        var okhttpclientBuilder = Java.use("okhttp3.OkHttpClient$Builder");
        var requestBuilder = Java.use("okhttp3.Request$Builder");

        const Methods = CertificatePinnerBuilder.class.getMethods();

        const methodscount = Methods.length;

        for (var i= 0; i< methodscount; i++){
            var method = Methods[i];
           console.log(method);
        }
    return;
	  
    });
},0);
