let time = document.getElementById("clock");

function pad(n) {
    return n < 10 ? '0' + n : n;
}

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }
    time.innerHTML = pad(hour) + ":" + pad(min) + ":" + pad(sec) + " " + session;
    setTimeout(clock, 1000);
}

clock();