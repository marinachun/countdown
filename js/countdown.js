let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

let headingEl = document.getElementById("heading");
let heading = "Countdown to New Years:";

let nextYear = new Date().getFullYear() + 1;

let countdownDate = "01-01-" + nextYear;

let birthday = "01-01-" + nextYear;

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

    monthInput.style.display = "none";
    dayInput.style.display = "none";
    submitBtn.style.display = "none";

    if (selected === "christmas") {
        background = 'background/christmas.jpeg'
        countdownDate = new Date(getYear('12-25-'));
        title = "Countdown to Christmas:"
    }

    if (selected === "new-years") {
        background = 'background/new-years.jpeg'
        countdownDate = new Date(getYear('01-01-'));
        title = "Countdown to New Years"
    }

    if (selected === "birthday") {
        background = 'background/birthday.jpeg'
        title = "Countdown to Birthday:"
        monthInput.style.display = "inline";
        dayInput.style.display = "inline";
        submitBtn.style.display = "inline";
        countdownDate = birthday;
    }

    headingEl.innerHTML = title;
    setBackground();
}

function getBirthday() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    birthday = new Date(getYear(month+"-"+day+"-"));
    countdownDate = birthday;
}

function getYear(date) {
    var currentDate = new Date();
    var currentYear = new Date().getFullYear();
    var celebration = new Date(date + currentYear);
    if (currentDate < celebration) {
        return celebration;
    } else {
        celebration = new Date(date + nextYear);
        return celebration;
    }
}

setBackground();
setInterval(countdown,1000);
submitBtn.onclick = getBirthday;
document.getElementById("countdown-type").onchange = updateCountdown;