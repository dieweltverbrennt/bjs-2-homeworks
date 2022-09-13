class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if(id === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Параметр id не передан.");
        }
        else if(this.alarmCollection.some(item => item.id === id)) {
            console.error();
            return 0;
        }
        else return this.alarmCollection.push({time, callback, id});
        
    }

    removeClock(id) {
        const arrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        if(this.alarmCollection.length != arrLength) {
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
        function checkClock(item) {
            if(this.getCurrentFormattedTime() === item.time) {
                return item.callback();
            }
        }

        checkClock = checkClock.bind(this);
      
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
        this.stop();
        this.alarmCollection = [];
    }
}
