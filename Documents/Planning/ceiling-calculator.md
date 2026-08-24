# Celiling calculator

## Features needed

## Customer Enters:
- Ceiling length
- Ceiling width

## Program calculates:
- Celing square footage
- Amount of paint needed

## Program displays:
-Total Square footage
-Paint required

## User interface
```text
---
    Ceiling Paint Calculator
Ceiling Length:
[           ] ft

Ceiling Width:
[           ] ft

            [Calculate ]

Square Footage: _____ sq. ft

Paint Needed: ____ gallons

---
```
## Calculation Rules

### Ceiling Square Footage

Ceiling square footage is calculated using:
Length x Width = Square Footage

Example:

20 ft x 15 ft = 300 sq. ft.

### Paint Needed

Paint needed is calculated by diving the ceiling square footage by the painting coverage per gallon.

Square Footage / Paint Coverage = Gallons Needed

The final amount should be rounded up to the next whole gallon.

Example:

300 / 350 = 0.86

Rounded up:
1 gallon

## Validation Rules

- Ceiling length must be greater than 0.
- Ceiling width must be greater than 0.
- Both fields are required.
- The program should not calculate if either field is invalid.
- An error message should be displayed for invalid measurements. 

## Acceptance Criteria
- Customer can enter the ceiling length.
- Customer can enter the ceiling width.
- Customer can select Calculate.
- Program calculates ceiling square footage correctly.
- Program calculates the amount of paint needed.
- Paint quantitiy is rounded when necessary.
- Program displays the calculated square footage.
- Program displays the amount of paint required.
- Invalid measurements display an error message.

## Test Cases
| Length | Width | Expected Square Footage |
|---|---|---|
| 10 ft | 10 ft | 100 sq. ft. |
| 20 ft | 15 ft | 300 sq. ft. |
| 12 ft | 12 ft | 144 sq. ft. |
| 25 ft | 20 ft | 500 sq. ft. |

### Invalid Input Tests
- Length of 0 should display an error.
- Width of 0 should display an error.
- Negative length should display an error. 
- Negative width should display an error.
- Blank length should display an error.
- Blank width should display an error. 

