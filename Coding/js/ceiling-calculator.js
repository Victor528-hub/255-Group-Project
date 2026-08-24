const calculateButton = document.getElementById("calculate-button");
const resetButton = document.getElementById("reset-button");

// Calculate everything
calculateButton.addEventListener("click", function () {
    
    const length = (document.getElementById("ceiling-length").value);
    const width = (document.getElementById("ceiling-width").value);

    console.log("Length:", length);
    console.log("width:", width);

    // Clear everything
resetButton.addEventListener("click", function () {

    document.getElementById("ceiling-length").value = "";
    document.getElementById("ceiling-width").value = "";

    document.getElementById("square-footage").textContent = 0
    document.getElementById("paint-needed").textContent = 0;
    document.getElementById("error-message").textContent = 0;
});


    if (length <=0 || width <=0){
        document.getElementById("error-message").textContent =
        "Please enter valid ceiling measurements.";
        
        document.getElementById("square-footage").textContent = "0";
        document.getElementById("paint-needed").textContent = "0";

        return;
    }
    document.getElementById("error-message").textContent = "";

    const squareFeet = length * width;
    
    document.getElementById("square-footage").textContent = squareFeet;

    const paintCoverage = 350;
    const paintNeeded = Math.ceil(squareFeet / paintCoverage);

    document.getElementById("paint-needed").textContent = paintNeeded;
});