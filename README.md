# Daily-Work-Calendar
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
    --------use separate DIV linked to the function calling current day, also showing any event marked "important"
    --------still display full calendar below header div showing rest of courses
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
----------------inside the days of the calender show the events marked ToDo in the days
----------------create filter section, only allowing for business hours to be selected. no after hours ToDo allowed.

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    ------------------ color code blocks using badges from bootstrap, past= red present=light blue future=green

WHEN I click into a timeblock
THEN I can enter an event
    ----------add on("click" function(){};) event listener to the block date number. is "24" will be the click section

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
----------- console.log to save local storage

WHEN I refresh the page
THEN the saved events persist
 ---------use local storage to keep this persistant.


 ***********reference to do list excercise