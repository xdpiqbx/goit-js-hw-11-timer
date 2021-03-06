const targetDate = new Date('Jul 17, 2021');
const selector = document.querySelector('#timer-1')

const refs = {
    days: selector.querySelector("[data-value=days]"),
    hours: selector.querySelector("[data-value=hours]"),
    mins: selector.querySelector("[data-value=mins]"),
    secs: selector.querySelector("[data-value=secs]")
}

let timeLeft = () =>{
    const time = (targetDate - Date.now())
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    refs.days.innerText = pad(days);
    refs.hours.innerText = pad(hours);
    refs.mins.innerText = pad(mins);
    refs.secs.innerText = pad(secs);
}

function pad (value){
    return String(value).padStart(2, "0");
}

setInterval(()=>{
    timeLeft()
},1000)