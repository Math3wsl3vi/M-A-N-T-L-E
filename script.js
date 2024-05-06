const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday",
"Friday","Saturday",];
const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

date.innerHTML = (today.getDate() <10?"0":"") + today.getDate();
day.innerHTML =weekDays[today.getDay()] ;
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

const name = document.getElementById(span);



//js for the notes app
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("create-btn");
let notes = document.querySelectorAll("input-box");

createBtn.addEventListener("click", ()=>{
  let inputBox = document.createElement("p");
  let del= document.createElement("button");
  inputBox.className = "input-box";
  inputBox.setAttribute("conteneditable", "true");
  notesContainer.appendChild(inputBox).appendChild("button");
}
)
