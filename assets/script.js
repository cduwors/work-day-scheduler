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
	var inputTag = $(this).closest(".row").find("input");
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
	var rowHour = $(".hour");
	var rowTask = $(this).closest(".row").find("taskInputEl");
	console.log(rowHour[0].setAttribute("class", "present"));
	for (let i = 0; i < rowHour.length; i++) {
		if (now.hour === rowHour[i].textContent) {
			rowTask.addClass(".present");
		} else if (now.hour < rowHour[i].textContent) {
			rowTask.addClass(".past");
		} else {
			rowTask.addClass(".future");
		}
		console.log("in checkTime function");
		console.log(rowHour[i].length);
	}
}

checkTime();
// Hard code all the times in HTML 9-5pm
// You are going ot do a condtiiton that says
// If this time block is less than the current time then it will be gray
//else if the timeblocks is the same time as current time, then it will be red,
//else it will be green

//auto-update time to keep color coding current
