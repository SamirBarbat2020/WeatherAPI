let fotos = [
    'https://images.unsplash.com/photo-1465577512280-1c2d41a79862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', //Sunny
    'https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', //Rainy
    'https://images.unsplash.com/photo-1622034329097-e9cf36069a3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', //Cloudy
    'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', //Fog
    'https://images.unsplash.com/photo-1546719321-bbd819cfaa3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', // snow
    'https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', // Clear Sky
    'https://images.unsplash.com/photo-1585074245728-eedb0cc44a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80',
]





let Unsplash_Api_Key = 'ku0Bl9SWnk3bCdiH5LsHmX56YunYTbfW6Z9aAmz_7Oc';
function getUserLocation() {
    let userInput = document.getElementById('user-input').value;
    getWeather(userInput);
    userInput = document.getElementById('user-input').value = '';
}

async function getWeather(userLocation) {
    let unsplash_url = `https://api.unsplash.com/photos/?client_id=ku0Bl9SWnk3bCdiH5LsHmX56YunYTbfW6Z9aAmz_7Oc`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&units=metric&appid=65abb21746f04cba148d253850201f7d`;
    let weatherApi = await fetch(url);
    let weatherApiAsJson = await weatherApi.json();
    console.log(weatherApiAsJson);
    showApi(weatherApiAsJson);
}

function showApi(weatherApiAsJson) {
    let description = weatherApiAsJson.weather[0].description;
    document.getElementById('local-name').innerHTML = '';
    document.getElementById('left-container').innerHTML = '';
    document.getElementById('left-container').innerHTML += `<h1> ${weatherApiAsJson.name}</h1>`;
    document.getElementById('left-container').innerHTML += `<h1> ${weatherApiAsJson.weather[0].description}</h1>`;

    document.getElementById('local-name').innerHTML += `<h2>Location: ${weatherApiAsJson.name}</h2>`;
    document.getElementById('temp').innerHTML = '';
    document.getElementById('temp').innerHTML += `
               
                    <h3>Temperatur: <span style="color:tomato; font-size:30px">${parseInt(weatherApiAsJson.main.temp)}</span></h3>
                    <h3>Max-Temperatur: <span style="color:tomato; font-size:30px">${parseInt(weatherApiAsJson.main.temp_max)}</span></h3>
                    <h3>Min-Temperatur: <span style="color:tomato; font-size:30px">${parseInt(weatherApiAsJson.main.temp_min)}</span></h3>
                    <h3>Feels_like: <span style="color:tomato; font-size:30px">${parseInt(weatherApiAsJson.main.feels_like)}</span></h3>
                    <h3>Wind speed: <span style="color:tomato; font-size:30px">${parseInt(weatherApiAsJson.wind.speed)}</span> Km/h</h3>           
            `;

    ChangingBackground(description);
}

function ChangingBackground(description) {

    if (description == 'clear sky') {
        document.getElementById('left-container').style.backgroundImage = `url('${fotos[5]}')`;
        document.getElementById('body').style.backgroundImage = `url('${fotos[5]}')`;
    }
    if (description == 'overcast clouds' || description == 'few clouds' || description == 'scattered clouds' || description == 'broken clouds') {
        document.getElementById('left-container').style.backgroundImage = `url('${fotos[2]}')`;
        document.getElementById('body').style.backgroundImage = `url('${fotos[2]}')`;
    }
    if (description == 'shower rain' || description == 'rain') {
        document.getElementById('left-container').style.backgroundImage = `url('${fotos[1]}')`;
        document.getElementById('body').style.backgroundImage = `url('${fotos[1]}')`;
    }
    if (description == 'thunderstorm') {
        document.getElementById('left-container').style.backgroundImage = `url('${fotos[6]}')`;
        document.getElementById('body').style.backgroundImage = `url('${fotos[6]}')`;
    }
    if (description == 'snow') {
        document.getElementById('left-container').style.backgroundImage = `url('${fotos[4]}')`;
        document.getElementById('body').style.backgroundImage = `url('${fotos[4]}')`;
    }
    if (description == 'mist') {
        document.getElementById('left-container').style.backgroundImage = `url('${fotos[3]}')`;
        document.getElementById('body').style.backgroundImage = `url('${fotos[3]}')`;
    }
}