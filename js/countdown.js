let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let headingEl = document.getElementById("heading");
let heading = "Countdown to New Years:";

let countdownDate = "01-01-2022";

let background = 'background/new-years.jpeg';

let submitBtn = document.getElementById("submit");

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

function updateCountdown() {
    var selected = document.getElementById("countdown-type").value;
    var monthInput = document.getElementById("month");
    var dayInput = document.getElementById("day");
    var submitBtn = document.getElementById("submit");

    if (selected === "christmas") {
        background = 'background/christmas.jpeg'
        countdownDate = '12-25-2021';
        title = "Countdown to Christmas:"
        monthInput.style.display = "none";
        dayInput.style.display = "none";
        submitBtn.style.display = "none";
    }

    if (selected === "new-years") {
        background = 'background/new-years.jpeg'
        countdownDate = '01-01-2022';
        title = "Countdown to New Years"
        monthInput.style.display = "none";
        dayInput.style.display = "none";
        submitBtn.style.display = "none";
    }

    if (selected === "birthday") {
        background = 'background/birthday.jpeg'
        title = "Countdown to Birthday:"
        monthInput.style.display = "inline";
        dayInput.style.display = "inline";
        submitBtn.style.display = "inline";
    }

    headingEl.innerHTML = title;
    setBackground();
}

function getDate() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var year = new Date().getFullYear();
    var currentDate = new Date();

    const birthday = new Date(month + "-" + day + "-" + year);
    
    if (birthday < currentDate) {
        year += 1;
        countdownDate = month + "-" + day + "-" + year;
    } else {
        countdownDate = birthday;
    }
}

setBackground();
setInterval(countdown,1000);
submitBtn.onclick = getDate;
document.getElementById("countdown-type").onchange = updateCountdown;