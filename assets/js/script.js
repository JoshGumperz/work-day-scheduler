var timeTracker = moment().format("hA")
var hourTracker = parseInt(moment().format("h"))
var dayTracker = moment().format("dddd")
var dateTracker = moment().format("MMMM Do")
var dateDisplay = $("#currentDay");

dateDisplay.text(dayTracker + ", " + dateTracker)
