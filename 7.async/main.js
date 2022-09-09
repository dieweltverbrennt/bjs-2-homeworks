// тут вы можете вызывать функции из task.js

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("14:28", () => console.log("Alarm 1"), 1);
    phoneAlarm.addClock("14:29", () => {console.log("Alarm 2"); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock("14:30", () => {console.log("Alarm 3"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()}, 3);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

testCase();