#include <iostream>
#include <cmath>
#include "wall-calculator.h"

using namespace std;
void wallCalculator()
{
    double length;
    double width;
    double height;
    double wallSquareFeet;
    int paintNeeded;

    const double paintCoverage = 350.0;

    cout << "Wall Paint Calculator" << endl;
    
    cout << "Enter room length in feet: ";
    cin >> length;

    cout << "Enter room width in feet: ";
    cin >> width;

    cout << "Enter room height in feet: ";
    cin >> height;

    if (length <= 0 || width <= 0 || height <= 0)
    {
        cout << "Please enter valid room measurements." << endl;
        return;
    }

    wallSquareFeet = 2 * (length + width) * height;

    paintNeeded = ceil(wallSquareFeet / paintCoverage);

    cout << "Wall Square Footage: "
         << wallSquareFeet
         << " sq. ft. " << endl;

    cout << "Paint Needed: "
         << paintNeeded
         << " gallons" << endl;

}