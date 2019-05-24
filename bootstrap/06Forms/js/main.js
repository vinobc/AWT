if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(result) {
        console.log('SW registered..');
        console.log('Scope: ' + result.scope);
        if ('Notification' in window) {
            console.log('Notifications are supported..');
            Notification.requestPermission(function(res) {
                console.log('Notifications ',res, ' ..');
            });
            var info = {
                body: 'test info..',
                icon: 'android-chrome-192x192.png',
                data: {
                    timestamp: Date.now(),
                    loc: 'index.html#notnTest'
                },
                actions: [
                    {action: 'proceed', title: 'Proceed Now'}
                ]
            };
            syndicate('Employee\'s vehicle info..', info);
        }
    }, function(err) {
        console.log('SW could not be not registered..');
        console.log(err);
    });
} else {
    console.log("SW not supported !!")
}

function syndicate(what,info) {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function (res) {
            res.showNotification(what,info);
        });
    }
}

var ie;
window.addEventListener('beforeinstallprompt',function(evt) {
    console.log('beforeinstallprompt event..');
    ie = evt;
    evt.preventDefault();
    document.getElementById('a2hs').style.display = 'block';
});

function dismiss() {
    document.getElementById('a2hs').style.display = 'none';
    
}

function install() {
    dismiss();
    ie.prompt();
    ie.userChoice.then(function(res) {
        if (res.outcome === 'accepted')
            console.log('App installed..' );
        else 
            console.log('App not installed..');

    });
}

window.addEventListener('appinstalled', function(evt) {
    console.log('appinstalled event..');
});
