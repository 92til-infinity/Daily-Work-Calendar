// global variables


// Create a new list item when clicking on the "Add" button
function newTodoItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputDate = document.getElementById("myDate").value;
  var $inputDate = inputDate.split("-")[2];
  console.log(inputDate.split("-")[2]);

  // var inputDate = document.getElementById("myDate").value;
  $(li).attr("date", $inputDate);
  var t = document.createTextNode(inputValue);
  // t.appendChild(inputDate);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  }
  else if (inputDate === '') {
    alert("You must pick a date!");
  }
  else {
    console.log(document.getElementsByClassName(("todoItem")[0]));
    document.getElementsByClassName("todoItem")[0].appendChild(li);
    // append to active day
    // need to compare the timestamp it has to the current day, still working local storage.
  }
  // ------------------------
  function whatDay() {
    if ($inputDate === dateOutput) {
      console.log("worked")
      // change the text background to green for future
      // change text bckground to red for past
      // 
    }
  }
}

var currentDate = moment().format("MMM Do YY");
var dateOutput = currentDate.split(" ")[1].split("th")[0];



function todaysDate() {

  $(".today").text(currentDate);
  // console.log(currentDate);
  // console.log(currentDate.split(" ")[1].split("th")[0]);
  // var dateOutput = currentDate.split(" ")[1].split("th")[0];
  // console.log(typeof dateOutput);
  return dateOutput;



}
todaysDate();

// highlight todays active day to then append to do list items to that specific day

$(".date").each(function () {
  var elemText = $(this).text().trim();
  var dateElem = $(this);
  if (elemText === todaysDate())
    dateElem.addClass("todoItem")

});

// function whatDay() {
//   if ($inputDate === dateOutput) {
//     console.log("worked")
//   }

// }
// whatDay();