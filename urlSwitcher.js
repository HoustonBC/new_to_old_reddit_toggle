chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            let url = tabs[0].url;
            let tabId = tabs[0].id;
            if (url.includes('www')) {
                newUrl = url.replace('www', 'old');
                chrome.tabs.update(tabId, { url: newUrl });
                chrome.action.setIcon({ path: "icons/old128.png" });
            } else if (url.includes('new')) {
                newUrl = url.replace('new', 'old');
                chrome.tabs.update(tabId, { url: newUrl });
                chrome.action.setIcon({ path: "icons/old128.png" });
            } else if (url.includes('old')) {
                newUrl = url.replace('old', 'new');
                chrome.tabs.update(tabId, { url: newUrl });
                chrome.action.setIcon({ path: "icons/new128.png" });
            }
        }
    })
})