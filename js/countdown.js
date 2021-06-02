let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let headingEl = document.getElementById("heading");
let heading = "Countdown to New Years:";

let countdownDate = "01-01-2022";

let background = 'background/new-years.jpeg';

function setBackground() {
    document.body.style.backgroundImage = "url(" + background + ")";
}

function countdown() {
    let currentDate = new Date();
    let dateTo = new Date(countdownDate);

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

document.getElementById("countdown-type").onchange = updateCountdown;

function updateCountdown() {
    var selected = document.getElementById("countdown-type").value;
    console.log(selected);
    if (selected === "christmas") {
        background = 'background/christmas.jpeg'
        countdownDate = '12-25-2021';
        title = "Countdown to Christmas:"
    }

    if (selected === "new-years") {
        background = 'background/new-years.jpeg'
        countdownDate = '01-01-2022';
        title = "Countdown to New Years"
    }
    if (selected === "birthday") {
        background = 'background/birthday.jpeg'
        title = "Countdown to Birthday:"
    }

    headingEl.innerHTML = title;
    setBackground();
}
