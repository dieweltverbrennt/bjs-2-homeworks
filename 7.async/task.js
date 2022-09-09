class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(id === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Параметр id не передан.");
        }
        else if(this.alarmCollection[id] != undefined) {
            console.error();
            return 0;
        }
        else if(!this.alarmCollection.some(item => item.id === id)) {
            return this.alarmCollection.push({time: time, callback: callback, id: id});
        }
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(function(item) {return item.id !== id});
        if(this.alarmCollection.includes(this.alarmCollection.id === id) === false) {
            return true;
        }
        else return false;
    }

    getCurrentFormattedTime() {
        let date = new Date();
        return (
            ("0" + date.getHours()).slice(-2)   + ":" + ("0" + date.getMinutes()).slice(-2));
    }

    start() {
        let timeNow = this.getCurrentFormattedTime();
      
        function checkClock(item) {
            if(timeNow === item.time) {
                return item.callback();
            }
        }
      
        if(this.timerId === null) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)));
        }
    }

    stop() {
        if(this.timerId != null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`${item.id} - ${item.time}`))
    }

    clearAlarms() {
        setTimeout(this.start());
        this.alarmCollection = [];
    }
}
