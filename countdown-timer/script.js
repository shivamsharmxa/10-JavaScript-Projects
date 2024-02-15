const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const NewBeginning = "01 June 2024";

function countdown(){
    const NewBeginningDate = new Date(NewBeginning);
    const currentDate = new Date();


    const totalseconds = (NewBeginningDate - currentDate)/1000;

    const days = Math.floor(totalseconds / 3600 / 24 )
    const hours = Math.floor(totalseconds / 3600 ) % 24;
    const mins = Math.floor(totalseconds / 60 ) % 60;
    const seconds = Math.floor(totalseconds)% 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

    
}
countdown();

setInterval(countdown,1000);