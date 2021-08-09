const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  //when there is no user value previously saved, this function will execute to get the value from the user
  event.preventDefault(); //this code prevents the browser from performing the automatic function, in this case, it stops the browser from automatically refreshing when the user enters their value
  loginForm.classList.add(HIDDEN_CLASSNAME); //we add the users value to the "hidden" class in the login-form, and then hide the login form once again
  const username = loginInput.value; //save the value of the user input into the variable called username
  localStorage.setItem(USERNAME_KEY, username); //save the user name in the local storage under the key username
  paintGreetings(username); //takes the input of the username on the form
}
function paintGreetings(username) {
  //look for the username in the local storage
  //greeting.innerText = "Hello " + username; old way
  greeting.innerText = `Hello ${username}`; //new way to write, take the title which is empty and add some text inside
  greeting.classList.remove(HIDDEN_CLASSNAME); //remove the "hidden" class name from the greeting
}

const savedUsername = localStorage.getItem(USERNAME_KEY); //1st step, JS will look in the local storage for a saved value (small database)
if (savedUsername === null) {
  //if there is no saved user, than this code executes
  loginForm.classList.remove(HIDDEN_CLASSNAME); //we remove the "hidden" class name from the login-form in html to show the login page
  loginForm.addEventListener("submit", onLoginSubmit); //when the user hits submit or enter the value is then saved into the small database to be remembered
  //show the forms, when the value is submitted, the onLoginSubmut function will execute
} else {
  paintGreetings(savedUsername); //paintGreetings is just painting some text on the screen
  //this will execute if there is already a saved value in the local storage
  //show the greetings
}
//This is how you send information to the console
//let vs const
//const cannot change, so if you try to change it in the code it won't work
//let is something that can be changed or implies it can be chagned
// const, let, boolean, undefined
//data structures are important on how to save and store data
//most basic data structure is Array
//a FUNCTION is a piece of code that you can execute over and over again
//function will do a job and gvie you a result
//conditionals work to tell us if something is true or not
//javascript starts with the small () first and then works it's way out
// i.e. (3 (2 (1) ) )

//most common tags to use
//querySelector
//getElementById
//used to get information from html to JS
//how to listen to the events
//google up MDN
//want to look it up from the JS point of view
//greeting.innerText = "Hello " + username; //old way
//greeting.innerText = `Hello ${username}`; //new way
