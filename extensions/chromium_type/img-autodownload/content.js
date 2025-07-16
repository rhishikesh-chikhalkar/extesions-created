// Check if the only element is an image and it's loaded
const img = document.querySelector("img");
if (
    img &&
    img.complete &&
    img.naturalWidth !== 0 &&
    document.body.children.length === 1
) {
    chrome.runtime.sendMessage({ action: "downloadImage" });
} else if (img) {
    img.addEventListener("load", () => {
        chrome.runtime.sendMessage({ action: "downloadImage" });
    });
}