localStorage.clear();
var taskInputEl = $(".time-block");
var submitTask = $(".saveBtn");

const DateTime = luxon.DateTime;
const now = DateTime.now();
// $enable-responsive-font-sizes=true;

function displayDay() {
	var currentDayEL = document.getElementById("currentDay");
	currentDayEL.textContent = DateTime.now().toLocaleString();
	// dt.toLocaleString(DateTime.DATETIME_MED);
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
