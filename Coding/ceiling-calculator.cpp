#include <iostream>
#include <cmath>
#include "ceiling-calculator.h"

using namespace std;

void ceilingCalculator()
{
    double length;
    double width;
    double squareFeet;
    int paintNeeded;

    const double paintCoverage = 350.0;

    cout << "Ceiling Paint Calculator" << endl;

    cout << "Enter ceiling length in feet: ";
    cin >> length;

    cout << "Enter ceiling width in feet: ";
    cin >> width;

    if (length <= 0 || width <= 0)
    {
        cout << "Please enter valid ceiling measurements." << endl;
        return;
    }

    squareFeet = length * width;

    paintNeeded = ceil(squareFeet / paintCoverage);

    cout << "Ceiling Square Footage: "
         << squareFeet
         << " sq. ft." << endl;

    cout << "Paint Needed: "
         << paintNeeded
         << " gallons" << endl;
}