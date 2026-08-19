#include <iostream>
#include "floor-tile-calculator.h"

using namespace std;

void floorTileCalculator()
{
    double length;
    double width;
    double floorSquareFeet;
    double tileNeeded;

    cout << "Floor Tile Calculator" << endl;

    cout << "Enter floor length in feet: ";
    cin >> length;

    cout << "Enter floor width in feet: ";
    cin >> width;

    if (length <= 0 || width <= 0)
    {
        cout << "Please enter valid floor measurements." << endl;
        return;
    }

    floorSquareFeet = length * width;

    tileNeeded = floorSquareFeet;

    cout << "Floor Square Footage: "
         << floorSquareFeet
         << " sq. ft." << endl;

    cout << "Tile Needed: "
         << tileNeeded
         << " sq. ft." << endl;
}