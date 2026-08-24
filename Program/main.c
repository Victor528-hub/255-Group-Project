#include <stdio.h>

// Menu function
int menu() {
    int choice;
    printf("1. First Calculation\n");
    printf("2. Second Calculation\n");
    printf("Select an option: ");
    scanf("%d", &choice);
    return choice;
}

// First calculation
void firstCalculation(int x, int y) {
    int result = x + y;
    printf("The result of firstCalculation is: %d\n", result);
}

// Second calculation
void secondCalculation(int x, int y) {
    int result = x * y;
    printf("The result of secondCalculation is: %d\n", result);
}

int main() {
    int choice = menu();

    int a, b;
    printf("Enter first number: ");
    scanf("%d", &a);
    printf("Enter second number: ");
    scanf("%d", &b);

    if (choice == 1) {
        firstCalculation(a, b);
    } else if (choice == 2) {
        secondCalculation(a, b);
    } else {
        printf("Invalid option.\n");
    }

    return 0;
}
