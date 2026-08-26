// Read Functions
const STORAGE_KEY = "diy-material-estimator-cart";
const DEFAULT_CART = { paint: [], ceilings: [], tiles: [] };
let memoryCart = { ...DEFAULT_CART };

function loadCart() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return {
                paint: [...memoryCart.paint],
                ceilings: [...memoryCart.ceilings],
                tiles: [...memoryCart.tiles]
            };
        }

        const parsed = JSON.parse(raw);
        memoryCart = {
            paint: Array.isArray(parsed.paint) ? parsed.paint : [],
            ceilings: Array.isArray(parsed.ceilings) ? parsed.ceilings : [],
            tiles: Array.isArray(parsed.tiles) ? parsed.tiles : []
        };

        return {
            paint: [...memoryCart.paint],
            ceilings: [...memoryCart.ceilings],
            tiles: [...memoryCart.tiles]
        };
    } catch (error) {
        console.warn("Could not load saved project state:", error);
        return {
            paint: [...memoryCart.paint],
            ceilings: [...memoryCart.ceilings],
            tiles: [...memoryCart.tiles]
        };
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
