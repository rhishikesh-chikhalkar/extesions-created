chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const url = tab.url.toLowerCase();

    // Check if the tab URL ends with an image extension
    if (url.match(/\.(jpeg|jpg|png|gif|webp|bmp)(\?.*)?$/)) {
      // Start download
      chrome.downloads.download({ url: tab.url }, () => {
        // After starting download, close the tab
        //chrome.tabs.remove(tabId);
      });
    }
  }
});
