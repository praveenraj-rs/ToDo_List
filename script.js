function append() {
  let task = document.querySelector(".inputRow input").value;
  let tasks = document.querySelector(".tasks")

  if (task==""){
    alert("Enter Some Value")
  }
  else{
  let div = document.createElement("div");
  div.classList.add("taskList")
  div.innerText=task
  

  let input = document.createElement("input")
  input.classList.add("checkbx")
  input.setAttribute("type","checkbox")
  div.appendChild(input)

  let button = document.createElement("button")
  button.innerHTML="&#10005;"
  button.setAttribute("onclick","this.parentElement.style.display='none';save()")
  div.appendChild(button)
  

  tasks.appendChild(div)
  document.querySelector(".inputRow input").value="";

  save()
  }
}


function save(){
  localStorage.setItem('data',document.querySelector(".tasks").innerHTML)
  console.log(localStorage.getItem('data'))

}

document.querySelector(".tasks").innerHTML=localStorage.getItem('data')