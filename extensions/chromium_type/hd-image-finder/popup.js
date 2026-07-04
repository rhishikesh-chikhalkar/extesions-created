document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "Loading...";

    // Dummy images (we'll replace later)
    const images = [
        "https://via.placeholder.com/300x400",
        "https://via.placeholder.com/400x600",
        "https://via.placeholder.com/500x700"
    ];

    resultsDiv.innerHTML = "";

    images.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        resultsDiv.appendChild(img);
    });
});