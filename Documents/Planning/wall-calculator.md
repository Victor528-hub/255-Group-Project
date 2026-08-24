# Wall Calculator

## Features Needed

## Customer Enters

- Room length
- Room width
- Wall height

## Program Calculates

- Total wall square footage
- Amount of paint needed

## Program Displays

- Total wall square footage
- Paint required

## User Interface

```text
---

        Wall Paint Calculator
Room Length:
[           ] ft

Room Width:
[           ] ft

Wall Height:
[           ] ft

            [ Calculate ]
            [ Reset ]

Wall Square Footage:____ sq. ft.
Paint Needed: ____ gallons

---
```
## Calculation Rules 

### Wall Square Footage

- Total wall area is calculated using:
- 2 * (Length + Width) * Height = Wall Square Footage

### Paint Needed

- Wall sq. ft. / Paint coverage = Gallons Needed
- Paint Coverage Per Gallon: TBD
- Final amount should be rounded up to the next whole gallon. 

## Validation Rules

- Room length is required.
- Room width is required.
- Wall height is required.
- All measurements must be greater than 0.
- The program should not calculate if measurements are invalid.
- The program should display an error message for invalid measurements.
