const apiKey = `d7cd31b067ecef28a1e95426431eec8e`;
const callWeather = () => {
    const areaInput = document.getElementById('input-field').value;
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${areaInput}&appid=${apiKey}&units=metric`;
    console.log(api);
    fetch(api)
        .then(res => res.json())
        .then(data => displayTemp(data));
}
const displayTemp = temperature => {
    console.log(temperature);
    document.getElementById('city-name').innerText = temperature.name;
    document.getElementById('units').innerText = temperature.main.temp;
    document.getElementById('condition').innerText = temperature.weather[0].main;
}