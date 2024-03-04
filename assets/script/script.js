'use strict';


//System

//Geolocation
const longitude = document.querySelector('.longitude');



var x = document.getElementById("demo");


//Display System Content
const systemContent= () =>{
  

  
  longitude.innerText = navigator.geolocation.longitude;


  fetch('https://api.ipify.org')
    .then((res)=> res.text())
    .then(ip => console.log(ip))
    .catch(err => console.log(err))
}

//Events
window.addEventListener('load', systemContent);




