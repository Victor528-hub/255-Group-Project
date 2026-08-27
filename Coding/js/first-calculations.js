// First Calculations
function calculatePaintRoom(length, width, height, doors, windows) {
    const wallArea = Math.max(
        (2 * (length + width) * height) - (doors * DOOR_AREA) - (windows * WINDOW_AREA),
        0
    );

    const gallons = wallArea > 0
        ? Math.max(Math.ceil((wallArea * DEFAULT_COATS) / PAINT_COVERAGE_PER_GALLON), 1)
        : 0;

    return {
        area: roundToOne(wallArea),
        gallons
    };
}

function calculateCeilingPaint(length, width) {
    const ceilingArea = Math.max(length * width, 0);
    const gallons = ceilingArea > 0
        ? Math.max(Math.ceil(ceilingArea / PAINT_COVERAGE_PER_GALLON), 1)
        : 0;

    return {
        area: roundToOne(ceilingArea),
        gallons
    };
}
