if ("serviceWorker" in navigator) {
    console.log("ENTER");
    navigator.serviceWorker.register("/pwa-test/my-service-worker.js");
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    navigator.serviceWorker.ready.then((registration) => {
        registration.pushManager.getSubscription().then((subscription) => {
            if (subscription) {
                console.log(JSON.stringify(subscription));
                window.navigator.clipboard.writeText(JSON.stringify(subscription)).then((r) => alert(JSON.stringify(subscription)));
            } else {
                registration.pushManager
                    .subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: "BF-Y0m0P2KZcDC7FRLqZ_F8ih86aM6zK7gitwNfg_vxs5FYHRkt8DgN1-gq7MFspR3f1lhzMjONcLNw7wQhhpig",
                    }).then((subscription) => {
                    console.log(subscription);
                    window.navigator.clipboard.writeText(JSON.stringify(subscription)).then((r) => alert(JSON.stringify(subscription)));
                });
            }
        });
    });
})