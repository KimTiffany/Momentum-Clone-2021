const toDoForm = document.getElementById("todo-form"); //links html id to-do to js
const toDoInput = toDoForm.querySelector("input"); //links html input to js
const toDoList = document.getElementById("todo-list"); //links html todo-list to js
let toDos = []; //creates the array that will hold the users todos
const TODOS_KEY = "todos";

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //saves the user input to the local storage and converts it into a string obj
}

function deleteToDo(event) {
  const li = event.target.parentElement; //removes the todo from the screen when clicked by the user
  li.remove(); //removes the todo from the li
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //creating the filter so that we are creating a new array that
  //contains the ids of the objs that were not clicked on
  //this creates a new array that does not contain the items that were removed by the user from the li
  saveToDo();
}
function paintToDo(newToDo) {
  //this prints the new obj on the screen for the user to see
  const li = document.createElement("li"); //creates a new li in the html
  li.id = newToDo.id; //assigns each new li created a unique id
  const span = document.createElement("span"); //creates a span with each new obj added to the li
  span.innerText = newToDo.text; //writes the span with the text entered into the span onto the screen
  const button = document.createElement("button"); //creates a button that can be pressed to delete and obj in the li
  button.innerText = "X"; //the symbol used for the button
  button.addEventListener("click", deleteToDo); //adds the event listener for when the user presses the button
  li.appendChild(span); //adds the new span to the end of the ul
  li.appendChild(button); // adds the new button to the end of the ul

  toDoList.appendChild(li); // adds the new li as a whole to the end of the ul
}
function handleToDoSubmit(event) {
  event.preventDefault(); //prevents the default submit behabvior of the event
  const newToDo = toDoInput.value; //coping the current value of the input into a new variable
  toDoInput.value = ""; //the added obj will be saved as a string within the array
  const newToDoObj = {
    text: newToDo, //the new obj as text
    id: Date.now(), //the new obj with a unique id
  };
  toDos.push(newToDoObj); //push the new toDoObj onto the array
  paintToDo(newToDoObj); //prints the new toDoObj onto the screen
  saveToDo(); //saves the new toDo onto the local storage
}

toDoForm.addEventListener("submit", handleToDoSubmit); //listens for the event of the user submitting a new toDo

const savedToDos = localStorage.getItem(TODOS_KEY); //this is used to recal the users saved Todos

if (savedToDos !== null) {
  //if there are no saved toDos in the local storage
  const parsedToDos = JSON.parse(savedToDos); //
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //the forEach executes the paintToDo for each item that is parsedToDos in the array
  //the ForEach is essentially pressing play on the paintToDo function
}

//calls the filter function for each item in the array
//the filter function should return true if I want to keep an
