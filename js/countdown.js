let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let dateCountdown = "01-01-2022";

let background = 'background/new-years.jpeg';

function setBackground() {
    document.body.style.backgroundImage = "url(" + background + ")";

}

function countdown() {
    let currentDate = new Date();
    let dateTo = new Date(dateCountdown);

    const secondsTo = Math.floor((dateTo - currentDate)/1000);

    const days = Math.floor(secondsTo/3600/24);
    const hours = Math.floor(secondsTo/3600) % 24;
    const minutes = Math.floor(secondsTo/60) % 60;
    const seconds = Math.floor(secondsTo) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

setBackground();
setInterval(countdown,1000);



