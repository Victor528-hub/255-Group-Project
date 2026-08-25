const calculateButton = document.getElementById("calculate-button");
const resetButton = document.getElementById("reset-button");

calculateButton.addEventListener("click", function (){
    
    const length = Number(document.getElementById("floor-length").value);
    const width = Number(document.getElementById("floor-width").value);

    if (length <=0 || width <=0){
        document.getElementById("error-message").textContent = "0";
                "Please enter valid floor measurement.";
        
        document.getElementById("floor-square-footage").textContent = "0";
        document.getElementById("tile-needed").textContent = "0";

        return;
    }
document.getElementById("error-message").textContent = "";

const floorSquareFeet = length * width;

const titleNeeded = floorSquareFeet;

document.getElementById("floor-square-footage").textContent = floorSquareFeet;

document.getElementById("tile-needed").textContent = titleNeeded;
});

resetButton.addEventListener("click", function (){

    document.getElementById("floor-length").value = "";
    document.getElementById("floor-width").value = "";

    document.getElementById("floor-square-footage").textContent = "0";
    document.getElementById("tile-needed").textContent = "";
    document.getElementById("error-message").textContent = "";
});
