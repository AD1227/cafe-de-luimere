// Get the user's location
navigator.geolocation.getCurrentPosition(
  //When user allowed location
  function (position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  },
  //when user denied location, the location is set to default
  function (error) {
    const latitude = 47.6062;
    const longitude = -122.3321;
    getWeather(latitude, longitude);
  }
);

// use user's location to generate quate of the day.
function getWeather(latitude, longitude) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  )
    .then((Response) => Response.json())
    .then((cityData) => {
      const address = cityData.address || {};
      const cityName =
        address?.city || address?.town || address?.village || "your area";

      return fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&temperature_unit=fahrenheit`
      )
        .then((response) => response.json())

        .then((data) => {
          console.log(longitude);
          console.log(latitude);
          var temp = data.current.temperature_2m;

          var message = "";

          if (temp < 50) {
            message = `It's ${temp}°F today in ${cityName} — perfect for a hot latte ☕`;
          } else if (temp <= 75) {
            message = `It's ${temp}°F today in ${cityName}  — enjoy a cappuccino ☕`;
          } else {
            message = `It's ${temp}°F today in ${cityName}  — try our iced coffee 🧊☕`;
          }

          document.getElementById("coffeeMessage").innerHTML = message;
        });
    })
    .catch((error) => {
      document.getElementById("coffeeMessage").innerHTML =
        "Weather unavailable";
    });
}
