// Main Integration
const PAINT_COVERAGE_PER_GALLON = 350;
const DEFAULT_COATS = 2;
const DOOR_AREA = 20;
const WINDOW_AREA = 15;
const TILE_WASTE_FACTOR = 1.1;

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    renderCart(loadCart());
}

function handleFormSubmit(event) {
    event.preventDefault();

    const type = document.getElementById("material_type").value;
    const room = sanitizeRoomName(document.getElementById("room_name").value);
    const cart = loadCart();

    if (type === "paint") {
        addPaintRoom(cart, room);
    } else if (type === "ceilingpaint") {
        addCeilingPaint(cart, room);
    } else {
        addTileFloor(cart, room);
    }

    saveCart(cart);
    renderCart(cart);

    const roomName = document.getElementById("room_name");
    roomName.value = "";
    roomName.focus();
}

function addPaintRoom(cart, room) {
    const length = readNumber("p_length");
    const width = readNumber("p_width");
    const height = readNumber("p_height");
    const doors = readInteger("p_doors");
    const windows = readInteger("p_windows");

    const result = calculatePaintRoom(length, width, height, doors, windows);

    cart.paint.push({
        room,
        area: result.area,
        gallons: result.gallons
    });
}

function addCeilingPaint(cart, room) {
    const length = readNumber("c_length");
    const width = readNumber("c_width");
    const result = calculateCeilingPaint(length, width);

    cart.ceilings.push({
        room,
        area: result.area,
        gallons: result.gallons
    });
}

function addTileFloor(cart, room) {
    const length = readNumber("t_length");
    const width = readNumber("t_width");
    const result = calculateTileFloor(length, width);

    cart.tiles.push({
        room,
        area: result.area,
        total_sqft: result.total_sqft
    });
}

function clearCart() {
    saveCart({ paint: [], ceilings: [], tiles: [] });
    renderCart(loadCart());
    document.getElementById("room_name").focus();
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
