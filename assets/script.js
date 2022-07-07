localStorage.clear();
var taskInputEl = $(".time-block");
var submitTask = $(".saveBtn");

const DateTime = luxon.DateTime;
const now = DateTime.now();
// $enable-responsive-font-sizes=true;

function displayDay() {
	var currentDayEL = document.getElementById("currentDay");
	var newFormat = { ...DateTime.DATE_SHORT, weekday: "long", month: "long" };
	currentDayEL.textContent = now.toLocaleString(newFormat);
	console.log(now.toLocaleString(newFormat));
	console.log("in day function");
}
displayDay();

//3 columns time - input - submit button

//function for input of timeblock
var handleTaskInput = function (event) {
	var taskInput = taskInputEl.val();
	var inputTag = $(this).closest(".row").find("textarea");
	var inputValue = inputTag.val();
	var inputValRow = inputTag[0].id;
	localStorage.setItem(inputValRow, inputValue);

	console.log("in handleTaskInput");
	console.log(inputTag);
	console.log(inputValRow);
	console.log(localStorage);
};

//listener for submit timeblock information and save to localStorage
submitTask.on("click", handleTaskInput);

function checkTime() {
	//row times are hard coded into the html then compared using luxon

	var rowTask = $(".description");
	// var hour = 12;

	// for loop to check each hour for color coding
	for (let i = 0; i < rowTask.length; i++) {
		// If this time block equals the current time then it will be red
		console.log(rowTask[i]);

		if (now.hour === parseInt(rowTask[i].dataset.hour)) {
			rowTask[i].classList.add("present");

			// If this time block is less than the current time then it will be gray
		} else if (now.hour > parseInt(rowTask[i].dataset.hour)) {
			rowTask[i].classList.add("past");
			// else it is after current time and will be green
		} else {
			rowTask[i].classList.add("future");
		}
// I've checked this function and it is returning the now.hour correctly
	}
}

checkTime();

//audit times every 30 min to keep color coding current
setInterval(function () {
	checkTime();
}, 1800000);
