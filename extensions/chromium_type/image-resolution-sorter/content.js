function parseResolution(text) {
    const match = text.match(/(\d{2,5})\s*[×xX]\s*(\d{2,5})/);
    if (!match) return 0;
    return parseInt(match[1]) * parseInt(match[2]);
}

function sortByResolutionText() {
    const cards = Array.from(document.querySelectorAll('div[jscontroller][jsaction]'));

    const parsed = cards.map(card => {
        // Search for a span/div with resolution text
        const possibleTexts = card.querySelectorAll("span, div");
        let found = null;

        for (let el of possibleTexts) {
            const txt = el.textContent.trim();
            if (txt.match(/^\d{2,5}\s*[×xX]\s*\d{2,5}$/)) {
                found = txt;
                break;
            }
        }

        const res = found ? parseResolution(found) : 0;
        return { node: card, res };
    });

    // Sort by resolution descending
    parsed.sort((a, b) => b.res - a.res);

    // Replace DOM
    const parent = cards[0]?.parentNode;
    parsed.forEach(({ node }) => parent?.appendChild(node));

    console.log("✔️ Sorted by resolution text");
}

// Wait for rendering
window.addEventListener("load", () => {
    setTimeout(sortByResolutionText, 3000);
});
