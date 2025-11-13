let cFrom = document.getElementById("conversionFrom");
let cTo = document.getElementById("conversionTo");
let tempInput = document.getElementById("tempInput");
let cBtn = document.getElementById("convertBtn");
let display = document.getElementById("result");


function convertToCelsius(temp, from) {
    if (from === "C") {
        return temp;
    } else if (from === "F") {
        return (temp - 32) * 5 / 9;
    } else if (from === "K") {
        return temp - 273.15;
    }
    return temp;
}
function updateBackground(tempInCelsius) {
    const body = document.body;
    body.classList.remove("volcano", "red-hot", "autumn", "cool", "winter");

    if (tempInCelsius >= 40) {
        body.classList.add("volcano");
    } else if (tempInCelsius >= 30 && tempInCelsius < 40) {
        body.classList.add("red-hot");
    } else if (tempInCelsius >= 20 && tempInCelsius < 30) {
        body.classList.add("autumn");
    } else if (tempInCelsius >= 10 && tempInCelsius < 20) {
        body.classList.add("cool");
    } else {
        body.classList.add("winter");
    }
}

cBtn.addEventListener("click", () => {
    let from, to;
    for (let val of cFrom.options) {
        if (val.selected) {
            from = val.value;
            break;
        }
    }
    for (let val of cTo.options) {
        if (val.selected) {
            to = val.value;
            break;
        }
    }

    let temp = parseFloat(tempInput.value);
    let result;

    if (from === "C" && to === "F") {
        result = (temp * 9 / 5) + 32;
    } else if (from === "C" && to === "K") {
        result = temp + 273.15;
    } else if (from === "F" && to === "C") {
        result = (temp - 32) * 5 / 9;
    } else if (from === "F" && to === "K") {
        result = (temp - 32) * 5 / 9 + 273.15;
    } else if (from === "K" && to === "C") {
        result = temp - 273.15;
    } else if (from === "K" && to === "F") {
        result = (temp - 273.15) * 9 / 5 + 32;
    } else {
        result = temp;
    }

    display.innerText = `Result: ${result.toFixed(2)} °${to}`;

    let tempInCelsius = convertToCelsius(temp, from);
    updateBackground(tempInCelsius);


});
