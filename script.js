document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("wind-speed");
    const toggleButton = document.getElementById("unit-toggle");

    let isCelsius = false;

    toggleButton.addEventListener("click", function () {
        if (isCelsius) {
            tempElement.innerText = "58°F";
            windElement.innerText = "4.5 mph";
            toggleButton.innerText = "°C";
        } else {
            tempElement.innerText = "14°C";
            windElement.innerText = "7.2 km/h";
            toggleButton.innerText = "°F";
        }
        isCelsius = !isCelsius;
    });
});
