const angleClock = function(hour, minutes) {
    let hourAngle = (hour*30) + (minutes*0.5);
    let minuteAngle = minutes*6;
    // console.log(minAngle);
    // console.log(hourAngle)
    let MaximumAngle = Math.abs(hourAngle - minuteAngle);
    return Math.min(MaximumAngle, 360 - MaximumAngle);
};
console.log(angleClock(3,30))