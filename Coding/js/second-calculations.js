// Second Calculations
function calculateTileFloor(length, width) {
    const floorArea = Math.max(length * width, 0);
    const totalArea = floorArea * TILE_WASTE_FACTOR;

    return {
        area: roundToOne(floorArea),
        total_sqft: roundToOne(totalArea)
    };
}
