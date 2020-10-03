class CountdownTimer{

    targetDate = null;
    refs = null

    constructor({selector, targetDate}){
        this.getDOMReferences(selector);
        this.targetDate = targetDate;
    }

    getDOMReferences(selector){
        const refSelector = document.querySelector(selector)
        this.refs = {
            days: refSelector.querySelector("[data-value=days]"),
            hours: refSelector.querySelector("[data-value=hours]"),
            mins: refSelector.querySelector("[data-value=mins]"),
            secs: refSelector.querySelector("[data-value=secs]")
        }
    }

    makeTime(time){
        let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        let hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return [days, hours, mins, secs]
    }

    makeHtml(arr){
        [
            this.refs.days.innerText,
            this.refs.hours.innerText,
            this.refs.mins.innerText,
            this.refs.secs.innerText
        ] = [...arr];
    }
    
    startTimer(){
        const time = this.targetDate - Date.now();
        this.makeHtml(this.makeTime(time))
     }

    pad(value){
        return String(value).padStart(2, "0");
    }
}

const obj = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});

setInterval(()=>{
    obj.startTimer();
},1000)