if(typeof PushNotification!='undefined'){
    var push = PushNotification.init(
        {"android": {"senderID": "848679895857"},
         "ios": {"alert": "true", "badge": "true", "sound": "true"},
         "windows": {} 
    });
    
    push.on('registration', function(data) {
        alert("Device registered for push notifications.")
        alert(JSON.stringify(data))
    });

//    push.on('notification', function(data) {
//        alert(JSON.stringify(data))
//        // data.message,
//        // data.title,
//        // data.count,
//        // data.sound,
//        // data.image,
//        // data.additionalData
//    });

    push.on('error', function(e) {
        alert(JSON.stringify(e))
        // e.message
    });
}else{
    alert("PushNotification is undefined");
    setInterval(function(){
        if(typeof PushNotification!='undefined'){
            alert("Ready!")
        }
    },200)
}