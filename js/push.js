var push = 
    PushNotification.init(
        {"android": {"senderID": "xxxxxxx"},
         "ios": {"alert": "true", "badge": "true", "sound": "true"},
         "windows": {} 
    });
push.on('registration', function(data) {
       alert(JSON.stringify(data))
    });

    push.on('notification', function(data) {
        alert(JSON.stringify(data))
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
    });

    push.on('error', function(e) {
        alert(JSON.stringify(e))
        // e.message
    });
