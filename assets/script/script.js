'use strict';

//Components
const country = document.querySelector('.country');
const region = document.querySelector('.region');
const city = document.querySelector('.city');
const longitude = document.querySelector('.longitude');
const latitude = document.querySelector('.latitude');
const ip = document.querySelector('.ip');

function displayLocation(res){
  country.innerText = res.country;
  region.innerText = res.regionName;
  city.innerText = res.city;
  longitude.innerText = res.lon;
  latitude.innerText = res.lat;
  ip.innerText = res.query;
}

//Display System Content
const systemContent= () =>{

  fetch('http://ip-api.com/json/?fields=61439')
  .then(location => location.json())
  .then(location => displayLocation(location));

}

// async function systemContent() {
//   const response = await fetch('http://ip-api.com/json/?fields=61439');
//   const responseJSON = await response.json();
//   console.log(responseJSON);
// }


//Events
window.addEventListener('load', systemContent);
