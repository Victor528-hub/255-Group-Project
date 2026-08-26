// Operation Selector
function switchTab(type) {
    const paintTab = document.getElementById("paintTabBtn");
    const ceilingTab = document.getElementById("ceilingPaintTabBtn");
    const tileTab = document.getElementById("tileTabBtn");
    const paintForm = document.getElementById("paintForm");
    const ceilingForm = document.getElementById("ceilingForm");
    const tileForm = document.getElementById("tileForm");

    document.getElementById("material_type").value = type;

    if (type === "paint") {
        paintTab.classList.add("active-paint");
        ceilingTab.classList.remove("active-ceiling");
        tileTab.classList.remove("active-tile");
        paintForm.classList.remove("hidden");
        ceilingForm.classList.add("hidden");
        tileForm.classList.add("hidden");
        return;
    }

    if (type === "ceilingpaint") {
        ceilingTab.classList.add("active-ceiling");
        paintTab.classList.remove("active-paint");
        tileTab.classList.remove("active-tile");
        ceilingForm.classList.remove("hidden");
        paintForm.classList.add("hidden");
        tileForm.classList.add("hidden");
        return;
    }

    tileTab.classList.add("active-tile");
    paintTab.classList.remove("active-paint");
    ceilingTab.classList.remove("active-ceiling");
    tileForm.classList.remove("hidden");
    paintForm.classList.add("hidden");
    ceilingForm.classList.add("hidden");
}
