const tabStates = {}; // key: tabId, value: true (ON) or false (OFF)

chrome.action.onClicked.addListener((tab) => {
    const tabId = tab.id;

    // Toggle the current state
    let state = tabStates[tabId] || false;
    state = !state;
    tabStates[tabId] = state;

    // Update the icon based on the state
    chrome.action.setIcon({
        path: state
            ? { "16": "icons/icon16-on.png", "48": "icons/icon48-on.png", "128": "icons/icon128-on.png" }
            : { "16": "icons/icon16-off.png", "48": "icons/icon48-off.png", "128": "icons/icon128-off.png" },
        tabId: tabId,
    });

    if (state) {
        // Inject the content script and activate the feature
        chrome.scripting.executeScript(
            {
                target: { tabId },
                files: ['content.js'],
            },
            () => {
                chrome.tabs.sendMessage(tabId, { action: 'toggle', enabled: true });
            }
        );
    } else {
        // Notify the content script to deactivate the feature
        chrome.tabs.sendMessage(tabId, { action: 'toggle', enabled: false }, (response) => {
            if (chrome.runtime.lastError) {
                console.warn("Content script not active on this tab.");
            }
        });
    }
});

// Reinject content script and update icon on tab refresh
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        const state = tabStates[tabId] || false;

        // Update the icon to match the saved state
        chrome.action.setIcon({
            path: state
                ? { "16": "icons/icon16-on.png", "48": "icons/icon48-on.png", "128": "icons/icon128-on.png" }
                : { "16": "icons/icon16-off.png", "48": "icons/icon48-off.png", "128": "icons/icon128-off.png" },
            tabId: tabId,
        });

        if (state) {
            // Reinject the content script if the state is ON
            chrome.scripting.executeScript(
                {
                    target: { tabId },
                    files: ['content.js'],
                },
                () => {
                    chrome.tabs.sendMessage(tabId, { action: 'toggle', enabled: true });
                }
            );
        }
    }
});

// Cleanup state when a tab is closed
chrome.tabs.onRemoved.addListener((tabId) => {
    delete tabStates[tabId];
});
