#include <stdio.h>
#include <stdlib.h>

void writeFile(void);

int main() {
    writeFile();
    return 0;
}

void writeFile(void) {

    FILE *filePointer = fopen("output.txt", "w");
    if (filePointer == NULL) {
        printf("Error: Could not open or create the file.\n");
        return; 
    }

    fprintf(filePointer, "Hello, world!\n");
    fprintf(filePointer, "This data was written using the writeFile function.\n");
    printf("Data successfully written to output.txt\n");

    fclose(filePointer);
}
