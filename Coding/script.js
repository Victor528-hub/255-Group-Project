const STORAGE_KEY = "diy-material-estimator-cart";
const DEFAULT_CART = { paint: [], ceilings: [], tiles: [] };
let memoryCart = { ...DEFAULT_CART };

const PAINT_COVERAGE_PER_GALLON = 350;
const DEFAULT_COATS = 2;
const DOOR_AREA = 20;
const WINDOW_AREA = 15;
const TILE_WASTE_FACTOR = 1.1;

document.addEventListener("DOMContentLoaded", () => {
    renderCart(loadCart());
});

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
    } else if (type === "ceilingpaint") {
        ceilingTab.classList.add("active-ceiling");
        paintTab.classList.remove("active-paint");
        tileTab.classList.remove("active-tile");
        ceilingForm.classList.remove("hidden");
        paintForm.classList.add("hidden");
        tileForm.classList.add("hidden");
    } else {
        tileTab.classList.add("active-tile");
        paintTab.classList.remove("active-paint");
        ceilingTab.classList.remove("active-ceiling");
        tileForm.classList.remove("hidden");
        paintForm.classList.add("hidden");
        ceilingForm.classList.add("hidden");
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const type = document.getElementById("material_type").value;
    const room = sanitizeRoomName(document.getElementById("room_name").value);
    const cart = loadCart();

    if (type === "paint") {
        const length = readNumber("p_length");
        const width = readNumber("p_width");
        const height = readNumber("p_height");
        const doors = readInteger("p_doors");
        const windows = readInteger("p_windows");

        const wallArea = Math.max(
            (2 * (length + width) * height) - (doors * DOOR_AREA) - (windows * WINDOW_AREA),
            0
        );
        const gallons = wallArea > 0
            ? Math.max(Math.ceil((wallArea * DEFAULT_COATS) / PAINT_COVERAGE_PER_GALLON), 1)
            : 0;

        cart.paint.push({
            room,
            area: roundToOne(wallArea),
            gallons
        });
    } else if (type === "ceilingpaint") {
        const length = readNumber("c_length");
        const width = readNumber("c_width");
        const ceilingArea = Math.max(length * width, 0);
        const gallons = ceilingArea > 0 ? Math.max(Math.ceil(ceilingArea / PAINT_COVERAGE_PER_GALLON), 1) : 0;

        cart.ceilings.push({
            room,
            area: roundToOne(ceilingArea),
            gallons
        });
    } else {
        const length = readNumber("t_length");
        const width = readNumber("t_width");
        const floorArea = Math.max(length * width, 0);
        const totalArea = floorArea * TILE_WASTE_FACTOR;

        cart.tiles.push({
            room,
            area: roundToOne(floorArea),
            total_sqft: roundToOne(totalArea)
        });
    }

    saveCart(cart);
    renderCart(cart);
    document.getElementById("room_name").value = "";
    document.getElementById("room_name").focus();
}

function clearCart() {
    const cart = { ...DEFAULT_CART };
    saveCart(cart);
    renderCart(cart);
    document.getElementById("room_name").focus();
}

function renderCart(cart) {
    const paintContainer = document.getElementById("paintCartContent");
    const ceilingContainer = document.getElementById("ceilingCartContent");
    const tileContainer = document.getElementById("tileCartContent");
    const clearBtn = document.getElementById("clearCartBtn");

    if (!cart) {
        return;
    }

    renderPaintSection(paintContainer, cart.paint || []);
    renderCeilingSection(ceilingContainer, cart.ceilings || []);
    renderTileSection(tileContainer, cart.tiles || []);

    if (
        (cart.paint && cart.paint.length > 0) ||
        (cart.ceilings && cart.ceilings.length > 0) ||
        (cart.tiles && cart.tiles.length > 0)
    ) {
        clearBtn.classList.remove("hidden");
    } else {
        clearBtn.classList.add("hidden");
    }
}

function renderPaintSection(container, items) {
    if (items.length === 0) {
        container.innerHTML = "<p>No paint calculations added yet.</p>";
        return;
    }

    const totalGallons = items.reduce((sum, item) => sum + (Number(item.gallons) || 0), 0);

    const listItems = items
        .map((item) => {
            const room = escapeHtml(item.room || "Room");
            const area = formatOneDecimal(item.area);
            const gallons = Number(item.gallons) || 0;

            return `<li><strong>${room}:</strong> ${area} sq ft wall area <br> <strong>${gallons} Gallon(s)</strong> (2 coats)</li>`;
        })
        .join("");

    container.innerHTML = `
        <ul class="item-list">${listItems}</ul>
        <p><strong>Total Paint Needed: ${totalGallons} Gallon(s)</strong></p>
    `;
}

function renderTileSection(container, items) {
    if (items.length === 0) {
        container.innerHTML = "<p>No tile calculations added yet.</p>";
        return;
    }

    const totalSqFt = items.reduce((sum, item) => sum + (Number(item.total_sqft) || 0), 0);

    const listItems = items
        .map((item) => {
            const room = escapeHtml(item.room || "Room");
            const area = formatOneDecimal(item.area);
            const totalSqft = formatOneDecimal(item.total_sqft);

            return `<li><strong>${room}:</strong> ${area} sq ft floor <br> <strong>${totalSqft} sq ft of tile</strong> (includes 10% extra for waste materials)</li>`;
        })
        .join("");

    container.innerHTML = `
        <ul class="item-list">${listItems}</ul>
        <p><strong>Total Tile Needed: ${formatOneDecimal(totalSqFt)} sq ft</strong></p>
    `;
}

function renderCeilingSection(container, items) {
    if (items.length === 0) {
        container.innerHTML = "<p>No ceiling calculations added yet.</p>";
        return;
    }

    const totalGallons = items.reduce((sum, item) => sum + (Number(item.gallons) || 0), 0);

    const listItems = items
        .map((item) => {
            const room = escapeHtml(item.room || "Room");
            const area = formatOneDecimal(item.area);
            const gallons = Number(item.gallons) || 0;

            return `<li><strong>${room}:</strong> ${area} sq ft ceiling area <br> <strong>${gallons} Gallon(s)</strong> of paint</li>`;
        })
        .join("");

    container.innerHTML = `
        <ul class="item-list">${listItems}</ul>
        <p><strong>Total Ceiling Paint Needed: ${totalGallons} Gallon(s)</strong></p>
    `;
}

function loadCart() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return cloneCart(memoryCart);
        }

        const parsed = JSON.parse(raw);
        memoryCart = {
            paint: Array.isArray(parsed.paint) ? parsed.paint : [],
            ceilings: Array.isArray(parsed.ceilings) ? parsed.ceilings : [],
            tiles: Array.isArray(parsed.tiles) ? parsed.tiles : []
        };
        return cloneCart(memoryCart);
    } catch (error) {
        console.warn("Could not load saved project state:", error);
        return cloneCart(memoryCart);
    }
}

function saveCart(cart) {
    memoryCart = cloneCart(cart);

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.warn("Project state will stay in memory for this session:", error);
    }
}

function readNumber(id) {
    const value = parseFloat(document.getElementById(id).value);
    return Number.isFinite(value) ? value : 0;
}

function readInteger(id) {
    const value = parseInt(document.getElementById(id).value, 10);
    return Number.isFinite(value) ? value : 0;
}

function sanitizeRoomName(value) {
    const room = (value || "").trim();
    return room || "Unassigned Room";
}

function roundToOne(value) {
    return Math.round(value * 10) / 10;
}

function formatOneDecimal(value) {
    return roundToOne(Number(value) || 0).toFixed(1);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function cloneCart(cart) {
    return {
        paint: Array.isArray(cart.paint) ? cart.paint.map((item) => ({ ...item })) : [],
        ceilings: Array.isArray(cart.ceilings) ? cart.ceilings.map((item) => ({ ...item })) : [],
        tiles: Array.isArray(cart.tiles) ? cart.tiles.map((item) => ({ ...item })) : []
    };
}
