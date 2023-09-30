// "this.parentElement.style.display='none';save()"

// DOM
let rowInput = document.querySelector(".inputRow input");
let tasks = document.querySelector(".tasks");
let delButton = document.querySelector(".delButton");
let taskList = document.querySelector(".taskList")

// Clicking Enter to add the task to the list
rowInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    append();
  }
});

function append() {
  // Getting the task data from input field
  let task = rowInput.value;

  // Checking the empty tasks
  if (task == "") {
    alert("Enter Some Value");
  } else {
    let div = document.createElement("div");
    div.classList.add("taskList");
    div.innerText = task;


    let button = document.createElement("button");
    button.innerHTML = "&#10005;";
    button.setAttribute("onClick","this.parentElement.style.display='none';save()")
    div.appendChild(button);

    tasks.appendChild(div);
    document.querySelector(".inputRow input").value = "";

    save();
  }
}

function save() {
  localStorage.setItem("data", document.querySelector(".tasks").innerHTML);
}

document.querySelector(".tasks").innerHTML = localStorage.getItem("data");

var list = document.querySelector('.tasks');
list.addEventListener('click', function(ev) {
  if(ev.target.classList=="tasks"){
  
  }
  else{
  console.log(ev.target)
  ev.target.classList.toggle('checked');
  save()
  }
}
)