'use strict';


//System

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
  .then(res => res.json())
  .then(res => displayLocation(res));

}

//Events
window.addEventListener('load', systemContent);
