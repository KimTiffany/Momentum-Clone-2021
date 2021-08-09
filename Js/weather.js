const API_KEY = "2756716d34458b0ff0c84394abf97d58";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  //when the information is avaiable, the user location is shared and the info is found
  const lat = position.coords.latitude; //users latitude
  const lon = position.coords.longitude; //users longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2756716d34458b0ff0c84394abf97d58&units=imperial`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //show the url
}

function onGeoError() {
  //an error for when the users locaiton is unable to be reached
  alert("Cannot find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//get the current position of the user and be able to display the weather
