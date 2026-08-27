// Write Functions
function saveCart(cart) {
    memoryCart = {
        paint: Array.isArray(cart.paint) ? cart.paint.map((item) => ({ ...item })) : [],
        ceilings: Array.isArray(cart.ceilings) ? cart.ceilings.map((item) => ({ ...item })) : [],
        tiles: Array.isArray(cart.tiles) ? cart.tiles.map((item) => ({ ...item })) : []
    };

    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryCart));
    } catch (error) {
        console.warn("Project state will stay in memory for this session:", error);
    }
}
