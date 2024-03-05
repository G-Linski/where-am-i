# Where Am I

## Geolocation
We can use JavaScript and a 3rd party API to get our location.
This includes country, IP address and more.
To learn more about the API, feel free to click [here.](https://ip-api.com/)


## Fetch Request from 3rd Party API
First off let's get a Location Object
Here's some code I stole off a Youtube video
```javascript
fetch('http://ip-api.com/json/?fields=61439')
  .then(location => location.json())
  .then(location => console.log(location));
```
This code uses fetch to request data from a 3rd party site.
We then can convert this data into JSON, for easier manipulation and readibility.
To see this object we can print it to the console.


## Printed JSON Object
This location object will look something like this:
```javascript
as: "AS7122 Bell Canada"
city: "Winnipeg"
country: "Canada"
countryCode: "CA"
isp: "Bell Canada"
lat: 49.7834
lon: -97.1036
org: "Bell Canada"
query: "142.167.56.168"
region: "MB"
regionName: "Manitoba"
status: "success"
timezone: "America/Winnipeg"
zip: "R2N"

```

## Displaying our Geolocation Data
To display this data, we'll first need an HTML element.
In our case an h2 element with a class of country.

```html
<h2 class="country"></h2>
```
```javascript
//Element Selector
const country = document.querySelector('.country');

//Display Function
function displayLocation(res){
  country.innerText = res.country;
}

//Function that runs on page load
const systemContent= () =>{
  fetch('http://ip-api.com/json/?fields=61439')
  .then(location => location.json())
  .then(location => displayLocation(location));
}

//Event
window.addEventListener('load', systemContent);
```

## Saving Fetch Requests into a Variable
For future reference, if we want to save our fetch requests into a variable.
We will need to use asynchronous functions.
This is how I generally prefer to work with variables.
The async keywords will make the function return a promise.
The await keyword makes the function await for a response from the API.

```javascript
async function systemContent() {
  const response = await fetch('http://ip-api.com/json/?fields=61439');
  const responseJSON = await response.json();
  console.log(responseJSON);
}
```
Using these keywords we can now save the fetch request into a variable.
This variable can now be used elsewhere.

That ends our tutorial to see this in action click below.

##[Where AM I?]()







