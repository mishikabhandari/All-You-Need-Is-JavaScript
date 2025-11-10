const btnOn = document.getElementById('ON');
const btnOff = document.getElementById('OFF');
const container = document.getElementById('container');
document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';

btnOff.style.opacity = "0";
btnOff.style.pointerEvents = "none";

btnOn.onclick = function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    btnOn.style.transform = "translateX(100%)";
    btnOn.style.opacity = "0";
    btnOn.style.pointerEvents = "none";

    btnOff.style.transform = "translateX(0)";
    btnOff.style.opacity = "1";
    btnOff.style.pointerEvents = "auto";
}

btnOff.onclick = function () {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    btnOff.style.transform = "translateX(-100%)";
    btnOff.style.opacity = "0";
    btnOff.style.pointerEvents = "none";

    btnOn.style.transform = "translateX(0)";
    btnOn.style.opacity = "1";
    btnOn.style.pointerEvents = "auto";
}