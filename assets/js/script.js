var timeTracker = moment().format("hA")
var hourTracker = parseInt(moment().format("h"))
var dayTracker = moment().format("dddd")
var dateTracker = moment().format("MMMM Do")
var dateDisplay = $("#currentDay");
var timeBlock = $(".time-block")
var saveBtn = $(".saveBtn")
var nineAm = $("#9");
var tenAm = $("#10");
var elevenAm = $("#11");
var twelvePm = $("#12");
var onePm = $("#13");
var twoPm = $("#14");
var threePm = $("#15");
var fourPm = $("#16");
var fivePm = $("#17");
var saveEvent
var userInput 
var saveEvent
var saveBlock

eventArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
dateDisplay.text(dayTracker + ", " + dateTracker)


saveBtn.on("click", function (event) {
    var element = event.target; 
    console.log(element)
    userTask = $(element).siblings().children().val()
    console.log($(element).siblings().children().val())
    var userHour = $(element).siblings().children().attr("id")
    console.log(userHour)
    localStorage.setItem(userHour, (userTask))
})

function renderEvent() {
    for (var i = 0; i < eventArr.length; i++) {
        var hourIndex = "#"
        index = hourIndex.concat(eventArr[i])
        var tasks = localStorage.getItem(eventArr[i])
        $(index).text(tasks)
    }
    
}

function init () {
    for (var i = 0; i < eventArr.length; i++) {
        var savedTasks = (localStorage.getItem(eventArr[i]))
            if (savedTasks === null) {
                localStorage.setItem(eventArr[i], "")
            }
    }
    renderEvent()
}
init()