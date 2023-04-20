const API_KEY = '308d066f51ab954066a899aa1d71d8bb';

function airQuality(index) {
  switch (index) {
    case 1:
      return '좋음😍';
    case 2:
      return '보통😐';
    case 3:
      return '약간 나쁨😠';
    case 4:
      return '나쁨😡';
    case 5:
      return '매우 나쁨🤬';
  }
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('You live in', lat, lon);

  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const air_pollution_url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(weather_url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = `${data.name}`;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}°`;
    });

  fetch(air_pollution_url)
    .then((response) => response.json())
    .then((data) => {
      const quality = document.querySelector('#air-quality span:last-child');
      quality.innerText = airQuality(data.list[0].main.aqi);
    });
}

function onGeoError() {
  alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
