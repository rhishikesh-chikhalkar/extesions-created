// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === "complete" && tab.url) {
//     const url = tab.url.toLowerCase();

//     // Check if the tab URL ends with an image extension
//     if (url.match(/\.(jpeg|jpg|png|gif|webp|bmp)(\?.*)?$/)) {
//       // Start download
//       chrome.downloads.download({ url: tab.url }, () => {
//         // After starting download, close the tab
//         //chrome.tabs.remove(tabId);
//       });
//     }
//   }
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const url = tab.url.toLowerCase();

    if (url.match(/\.(jpeg|jpg|png|gif|webp|bmp)(\?.*)?$/)) {
      // Inject content script to check if image is loaded
      chrome.scripting.executeScript({
        target: { tabId },
        files: ["content.js"]
      });
    }
  }
});

// Listen for message from content script
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.action === "downloadImage" && sender.tab && sender.tab.url) {
    chrome.downloads.download({ url: sender.tab.url });
  }
});