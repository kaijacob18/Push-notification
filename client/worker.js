console.log("Service Worker Loaded");

self.addEventListener("push", e => {
    const data = e.data.json();
    console.log("Push Recieved");

    self.refistration.showNotification(data.title, {
        body:"Notified by Antionne Davis",
        icon:""
    })
})