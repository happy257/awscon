document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    //alert("device ready")
    if (typeof PushNotification != 'undefined') {
        var push = PushNotification.init({"android": {"senderID": "848679895857", "forceShow": "true"}});
        
        push.on('registration', function(data) {
            if(localStorage.getItem("PushMsgRegId")==null) {
                localStorage.setItem("PushMsgRegId",JSON.stringify(data.registrationId));
            }else {
                alert("Device registered for push notifications.\n"+data.registrationId);
            }
        });
        
        push.on('notification', function(data) {
            alert(JSON.stringify(data));
            // data.message, data.title, data.count, data.sound, data.image, data.additionalData
        });
        
        push.on('error', function(e) {
            alert(JSON.stringify(e))
            // e.message
        });
    }
    else {
        alert("PushNotification is undefined");
    }
}
