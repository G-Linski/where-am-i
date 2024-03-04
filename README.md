# Where Am I
## Geolocation and IP Address







First off let's get our IP address
Here's some code I stole off a Youtube video
```javascript
  fetch('https://api.ipify.org')
    .then((res)=> res.text())
    .then(ip => console.log(ip))
    .catch(err => console.log(err))
```
This code uses a third party website API.






