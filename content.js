if (!window.hasBadBotInitialized) {
    window.hasBadBotInitialized = true; // Prevent reinitialization

    function processButtons() {
        const buttons = document.querySelectorAll('button[data-testid="bad-response-turn-action-button"]:not([disabled])');
        buttons.forEach((button) => button.click());
    }

    let observer = null;

    // Enable the observer
    function enableObserver() {
        if (observer) return; // Prevent duplicate observers
        observer = new MutationObserver(() => processButtons());
        observer.observe(document.body, { childList: true, subtree: true });
        processButtons();
    }

    // Disable the observer
    function disableObserver() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
    }

    // Listen for messages from the background script
    chrome.runtime.onMessage.addListener((message) => {
        if (message.action === 'toggle') {
            if (message.enabled) {
                enableObserver();
            } else {
                disableObserver();
            }
        }
    });
}
