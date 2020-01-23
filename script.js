var currentDate_Time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDate_Time);
// post current time and date to page
document.getElementById("currentDay").innerHTML = currentDate_Time;
/*come back to this
const submitButton = document.getElementsByClassName("saveBtn");
const textArea = document.getElementsByClassName("description");
*/

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        //var value = $(this).siblings(".description").val();
        //var time = $(this).parent().attr("id");
        console.log("save button worked");
    //save in local storage
    //localStorage.setItem("time", "value");
})
});

/*const textDescription = document.getElementsByClassName("description");
textDescription.value = localStorage.getItem("myText");
textEl.addEventListener("input", () => localStorage.setItem("myText", textEl.value));*/