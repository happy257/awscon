document.addEventListener('deviceready',onDeviceReady,false);
function onDeviceReady() {
    //alert("device ready")
    if(typeof PushNotification!='undefined'){
    var push = PushNotification.init(
        {"android": {"senderID": "848679895857","forceShow":"true"},
         "ios": {"alert": "true", "badge": "true", "sound": "true"},
         "windows": {} 
    });
    
    if(localStorage.getItem("PushMsgRegId")==null){
        push.on('registration', function(data) {
            alert("Device registered for push notifications.");
        //  alert(JSON.stringify(data));
            localStorage.setItem("PushMsgRegId",data);
            $("#regId").val(JSON.stringify(data));
        });
    }else{
        $("#regId").val(JSON.stringify(data));
    }
    push.on('notification', function(data) {
        alert(JSON.stringify(data));
//        // data.message,
//        // data.title,
//        // data.count,
//        // data.sound,
//        // data.image,
//        // data.additionalData
    });

    push.on('error', function(e) {
        alert(JSON.stringify(e))
        // e.message
    });
    }else{
        alert("PushNotification is undefined");
    }
}
