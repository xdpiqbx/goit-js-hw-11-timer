class CountdownTimer{
    selector = null;
    targetDate = null;
    refSelector = null;
    refs = null

    constructor({selector, targetDate}){
        this.selector = selector;
        this.targetDate = targetDate;
        
        this.getDOMReferences();
    }
    
    getDOMReferences(){
        this.refSelector = document.querySelector(this.selector)
        this.refs = {
            days: this.refSelector.querySelector("[data-value=days]"),
            hours: this.refSelector.querySelector("[data-value=hours]"),
            mins: this.refSelector.querySelector("[data-value=mins]"),
            secs: this.refSelector.querySelector("[data-value=secs]")
        }
    }

    timeCounter(){
        const time = this.targetDate - Date.now();
        
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        return [days, hours, mins, secs]
    }

    makeHtml(){
        [days, hours, mins, secs] = this.timeCounter();
        this.refs.days.innerText = days
        this.refs.hours.innerText = hours
        this.refs.mins.innerText = mins
        this.refs.secs.innerText = secs
    }
}

const obj = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
});

setInterval(()=>{
    obj.makeHtml()
},1000)