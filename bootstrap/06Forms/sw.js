var cName = 'c33de';

var cFiles = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/bootstrap.min.css',
    '/js/main.js',
    'js/bootstrap.min.js',
    'js/jquery.slim.min.js',
    'js/popper.min.js'
];

self.addEventListener('install', function(evt) {
    console.log('install event..');
    //local cache implementation
    evt.waitUntil(
        caches.open(cName).then(function(cResult) {
            console.log('caching under install event..');
            return cResult.addAll(cFiles);
        }).then(function() {
            return self.skipWaiting();
        }).catch(function(err) {
            console.log('caching error..', err);
        })
    );
});

self.addEventListener('activate', function(evt) {
    console.log('activate event.. ');
    evt.waitUntil(
        caches.keys().then(function(keyColln) {
            return Promise.all(keyColln.map(function(key) {
                if (key !== cName) {
                    console.log('deleting older cache under activate event..', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
    console.log('fetch event ' + evt.request.url);
    evt.respondWith(
        // caches.match(evt.request)
        caches.match(evt.request).then(function(matchRes) {
            return matchRes || fetch(evt.request);
        })
    );
});

self.addEventListener('notificationclose', function(evt) {
    dismissNotn('notificationclose event..', evt);
});

function dismissNotn(msg, evt) {
    console.log(msg, evt.notification.data);
    evt.notification.close();
}

self.addEventListener('notificationclick', function(evt) {
    if (evt.action !== 'close') {
        evt.waitUntil(
            self.clients.matchAll({type: 'window', includeUncontrolled: 'true'}).then(function(res) {
                console.log(res);
                for(var k=0; k<res.length; k++) {
                    if(res[k].visibilityState === 'visible') {
                        console.log('2 the destination..');
                        res[k].navigate(evt.notification.data.loc);
                        break;
                    }
                }
            })
        );
    }
    dismissNotn('clicked the notn.', evt);
});
