<?php
session_start();
header('Content-Type: application/json');

define('PAINT_COVERAGE_PER_GALLON', 350);
define('DEFAULT_COATS', 2);
define('DOOR_AREA', 20);
define('WINDOW_AREA', 15);
define('TILE_WASTE_FACTOR', 1.10);

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = ['paint' => [], 'tiles' => []];
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET' && isset($_GET['action']) && $_GET['action'] === 'get_cart') {
    echo json_encode($_SESSION['cart']);
    exit;
}

if ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $action = $input['action'] ?? '';

    if ($action === 'add_to_cart') {
        $type = $input['material_type'] ?? 'paint';
        $room = htmlspecialchars($input['room_name'] ?? 'Room');

        if ($type === 'paint') {
            $length = floatval($input['p_length'] ?? 0);
            $width  = floatval($input['p_width'] ?? 0);
            $height = floatval($input['p_height'] ?? 0);
            $doors  = intval($input['p_doors'] ?? 0);
            $windows= intval($input['p_windows'] ?? 0);

            $wallArea = (2 * ($length + $width) * $height) - ($doors * DOOR_AREA) - ($windows * WINDOW_AREA);
            $wallArea = max($wallArea, 0);
            $gallons = ceil(($wallArea * DEFAULT_COATS) / PAINT_COVERAGE_PER_GALLON);

            $_SESSION['cart']['paint'][] = [
                'room' => $room,
                'area' => round($wallArea, 1),
                'gallons' => max($gallons, 1) // Min 1 gallon if area > 0
            ];
        } elseif ($type === 'tile') {
            $length = floatval($input['t_length'] ?? 0);
            $width  = floatval($input['t_width'] ?? 0);

            $floorArea = $length * $width;
            $totalArea = $floorArea * TILE_WASTE_FACTOR;

            $_SESSION['cart']['tiles'][] = [
                'room' => $room,
                'area' => round($floorArea, 1),
                'total_sqft' => round($totalArea, 1)
            ];
        }
    } elseif ($action === 'clear_cart') {
        $_SESSION['cart'] = ['paint' => [], 'tiles' => []];
    }

    echo json_encode($_SESSION['cart']);
    exit;
}