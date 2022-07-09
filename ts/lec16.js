"use strict";
//enum is set of values for ex an enum(mon to sundays)(when usind variable its should be from 7(m-s))
var Day;
(function (Day) {
    Day[Day["mon"] = 0] = "mon";
    Day[Day["tue"] = 1] = "tue";
    Day[Day["wed"] = 2] = "wed";
    Day[Day["thur"] = 3] = "thur";
    Day[Day["fri"] = 4] = "fri";
    Day[Day["sat"] = 5] = "sat";
    Day[Day["sun"] = 6] = "sun";
})(Day || (Day = {}));
let whichDay;
whichDay = 1;
whichDay = Day.mon;
console.log(whichDay);
