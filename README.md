# Where Am I
## Geolocation and IP Address







First off let's get our IP address
Here's some code I stole off a Youtube video
```javascript
fetch('http://ip-api.com/json/?fields=61439')
  .then(res => res.json())
  .then(res => displayLocation(res));
```
This code uses a third party website API.
Feel free to read up more [here.](https://ip-api.com/)






