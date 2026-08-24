const calculateButton = document.getElementById("calculate-button");
const resetButton = document.getElementById("reset-button");

calculateButton.addEventListener("click",function () {
    
    const length = Number(document.getElementById("room-length").value);
    const width = Number(document.getElementById("room-width").value);
    const height = Number(document.getElementById("wall-height").value);

    if (length <=0 || width <=0 || height <=0) {
        document.getElementById("error-message").textContent = "0";
                "Please enter valid room measurements.";
        
        document.getElementById("wall-square-footage").textContent = "0";
        document.getElementById("paint-needed").textContent = "0";
        


        return;
    }

    document.getElementById("error-message").textContent = "";

    const wallSquareFeet = 2 * (length + width) * height;

    const paintCoverage = 350;

    const paintNeeded = Math.ceil(wallSquareFeet / paintCoverage);


    document.getElementById("wall-square-footage").textContent = wallSquareFeet;
    document.getElementById("paint-needed").textContent = paintNeeded;
});

resetButton.addEventListener("click", function (){

    document.getElementById("room-length").value = "";
    document.getElementById("room-width").value = "";
    document.getElementById("wall-height").value = "";

    document.getElementById("wall-square-footage").textContent = "0";
    document.getElementById("paint-needed").textContent = "0";
    document.getElementById("error-message").textContent = "";
});