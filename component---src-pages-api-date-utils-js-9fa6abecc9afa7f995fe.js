webpackJsonp([0xa1edfb40fa32],{310:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(1),d=a(n),u=l(16),r=a(u),c=l(29),f=a(c),o=l(15),m=a(o),i=l(51),E=a(i);t.default=function(){return d.default.createElement(m.default,{title:"DateUtils API"},d.default.createElement("p",null,"Set of functions useful to work with dates and modifiers."),d.default.createElement(r.default,null,'import { DateUtils } from "react-day-picker";'),d.default.createElement("hr",null),d.default.createElement(E.default,null,d.default.createElement("h2",null,"Functions"),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"addDayToRange"}),"addDayToRange"," ",d.default.createElement("code",null,"(day: Date, range: ?Object<from: ?Date, to: ?Date>) ⇒ Object<from: ?Date, to: ?Date>")),d.default.createElement("p",null,"Add ",d.default.createElement("code",null,"day")," to a range of days, returning a new range including that day. A range is an object with ",d.default.createElement("code",null,"from")," and"," ",d.default.createElement("code",null,"to")," keys. See the range example for an example using this function."),d.default.createElement(r.default,null,'import { DateUtils } from "react-day-picker";\n\nconst range = {\n  from: new Date(2015, 5, 14),\n  to: new Date(2015, 5, 18)\n}\nconst newRange = DateUtils.addDayToRange(new Date(2015, 5, 24), range);\n\nconsole.log(newRange.to) // 2015-05-24'),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"addMonths"}),"addMonths ",d.default.createElement("code",null,"(date: Date, n: number) ⇒ Date")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"date")," as a new Date with ",d.default.createElement("code",null,"n")," months added. Missing days will be added to the final date, e.g."," ",d.default.createElement("code",null,"2016-03-31 + 1 month = 2016-05-01")," (since the 31th of April is missing)."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"clone"}),"clone ",d.default.createElement("code",null,"(date: date) ⇒ Date")),d.default.createElement("p",null,"Clone ",d.default.createElement("code",null,"date")," returning a new Date with the same time."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isDate"}),"isDate ",d.default.createElement("code",null,"(value) ⇒ Boolean")),d.default.createElement("p",null,"Returns ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"value")," is a valid Javascript Date."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isDayAfter"}),"isDayAfter ",d.default.createElement("code",null,"(day1: Date, day2: Date) ⇒ boolean")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day1")," is after ",d.default.createElement("code",null,"day2"),"."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isDayBefore"}),"isDayBefore ",d.default.createElement("code",null,"(day1: Date, day2: Date) ⇒ boolean")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day1")," is before"," ",d.default.createElement("code",null,"day2"),"."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isDayBetween"}),"isDayBetween ",d.default.createElement("code",null,"(day: Date, day1: Date, day2: Date) ⇒ boolean")),d.default.createElement("p",null,"Returns ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day")," is between"," ",d.default.createElement("code",null,"day1")," and ",d.default.createElement("code",null,"day2"),", without including those days."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isDayInRange"}),"isDayInRange"," ",d.default.createElement("code",null,"(day: Date, range: Object<from: ?Date, to: ?Date>) ⇒ boolean")),d.default.createElement("p",null,"Returns ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day")," is included in the specified range of days."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isFutureDay"}),"isFutureDay ",d.default.createElement("code",null,"(day: Date) ⇒ boolean")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day")," is in the future, i.e. is tomorrow or any day after tomorrow."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isPastDay"}),"isPastDay ",d.default.createElement("code",null,"(day: Date) ⇒ boolean")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day")," is in the past, i.e. is yesterday or any day before yesterday."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isSameDay"}),"isSameDay ",d.default.createElement("code",null,"(day1: ?Date, day2: ?Date) ⇒ boolean")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day1")," and",d.default.createElement("code",null,"day2")," are the same day."),d.default.createElement("h3",null,d.default.createElement(f.default,{id:"isSameMonth"}),"isSameMonth ",d.default.createElement("code",null,"(day1: ?Date, day2: ?Date) ⇒ boolean")),d.default.createElement("p",null,"Return ",d.default.createElement("code",null,"true")," if ",d.default.createElement("code",null,"day1")," and",d.default.createElement("code",null,"day2")," fall in the same month.")))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-api-date-utils-js-9fa6abecc9afa7f995fe.js.map