// declare variables
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
var userTask
var saveEvent
var saveBlock
// Declare array that contains the all same numbers as the IDs of the input fields
var eventArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]

// display day of week and date on header
dateDisplay.text(dayTracker + ", " + dateTracker)

// when save button is clicked execute this function
saveBtn.on("click", function (event) {
    // target which save button was clicked
    var element = event.target;
    // store the input the user typed in the input box associated with the targetted save button in a variable
    userTask = $(element).siblings().children().val()
    // get the id of the parent element of the input field for later use
    var userHour = $(element).siblings().children().attr("id")
    // save userHour and userTask to local storage
    localStorage.setItem(userHour, (userTask))
})

function renderEvent() {
    // Loop through an eventArr
    for (var i = 0; i < eventArr.length; i++) {
        var hourIndex = "#"
        // concat # on to eventArr at current index, store result in new variable
        index = hourIndex.concat(eventArr[i])
        // get eventArr at current index from local storage, store it in new variable
        var tasks = localStorage.getItem(eventArr[i])
        // set text content of index to tasts
        $(index).text(tasks)
    }
    
}

function init () {
    // Loop through an eventArr
    for (var i = 0; i < eventArr.length; i++) {
        // get eventArr at current index from local storage, store it in new variable
        var savedTasks = (localStorage.getItem(eventArr[i]))
        // if savedTasks is null/empty, store eventArr at current index position in local storage
            if (savedTasks === null) {
                localStorage.setItem(eventArr[i], "")
            }
    }
    renderEvent()
}
init()