// Create a new list item when clicking on the "Add" button
function newTodoItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementsByClassName("todoItem").appendChild(li);
    // append to active day
    // change appended item to set color
  }

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}




// Create a "close" button and append it to each list item
var closeButton = document.getElementsByClassName("todoItem");

for (var i = 0; i < closeButton.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  closeButton[i].appendChild(span);
}

//Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {

  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// filter functions below
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function todaysDate() {
  var currentDate = moment().format("MMM Do YY");
  $(".today").text(currentDate);
  console.log(currentDate);
  console.log(currentDate.split(" ")[1].split("th")[0]);
  var dateOutput = currentDate.split(" ")[1].split("th")[0];
  console.log(typeof dateOutput);
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


// if state showing if appended list item is past present future it gets the proper color
// function timeStamp() {
//   if (newTodoItem.moment() != (moment().format("MMM Do YY"))) {
//     // mark red for past
//   }
//   else if (newTodoItem.moment() === (moment().format("MMM Do YY"))) {
//     // mark light blue for present
//   }
//   else if (newTodoItem.moment() > (moment().format("MMM Do YY"))) {
//     // mark green for future
//   }
//   else {
//     alert("null");
//     console.log("null");
//   }
// }