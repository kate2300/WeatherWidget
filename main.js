function addLocationName(location) {
    let elem = document.createElement("p");
    elem.textContent = location;
    let targetDiv = document.querySelector('.city-contry')
    targetDiv.textContent = ''
    targetDiv.append(elem)
}

function addTodayWeather(weatherData) {
    let targetDiv = document.querySelector('.today_weather')
    let fragment = document.createDocumentFragment()

    let dateContainer = document.createElement("div")
    dateContainer.classList.add('today')
    let dateNameElement = document.createElement("p");
    let dateElement = document.createElement("p");
    let dayOfWeekElement = document.createElement("p");
    dateNameElement.classList.add('today_data-name')
    dateElement.classList.add('today_data')
    dayOfWeekElement.classList.add('today_day-of-week')
    dateNameElement.textContent = 'Today'
    dateElement.textContent = weatherData.date
    dayOfWeekElement.textContent = weatherData.day
    dateContainer.append(dateNameElement, dateElement, dayOfWeekElement)
    fragment.append(dateContainer)

    let weatherInfoContainer = document.createElement("div")
    weatherInfoContainer.classList.add('today_weather-weather')

    let dayIcon = document.createElement("i");
    let dayTemperature = document.createElement("p");
    let nightIcon = document.createElement("i");
    let nightTemperature = document.createElement("p");
    let pressure = document.createElement("p");
    let wind = document.createElement("p");
    let humidity = document.createElement("p");

    dayIcon.classList.add('fas', 'fa-sun', 'today_i')
    dayTemperature.classList.add('today_weather-day')
    nightIcon.classList.add('fas', 'fa-cloud-moon', 'today_i')
    nightTemperature.classList.add('today_weather-night')
    pressure.classList.add('today_weather-pressure')
    wind.classList.add('today_weather-wind')
    humidity.classList.add('today_weather-humidity')

    dayTemperature.textContent = `${ weatherData.temperatureDay }°
    C`
    nightTemperature.textContent = `${ weatherData.temperatureNight }°
    C`
    pressure.textContent = `Pressure: ${ weatherData.pressure }
    mm`
    wind.textContent = `Wind: ${ weatherData.wind }
    m / s`
    humidity.textContent = `Humidity: ${ weatherData.humidity } %`

    weatherInfoContainer.append(dayIcon, dayTemperature, nightIcon, nightTemperature, pressure, wind, humidity)
    fragment.append(weatherInfoContainer)

    targetDiv.innerHTML = ''
    targetDiv.append(fragment)


}

function giveNockData(value) {
    return {
        location: 'Moscow, RUSSIA',
        date: '11.09.2001',
        day: 'monday',
        temperatureDay: 24,
        temperatureNight: 12,
        humidity: 96,
        pressure: 748,
        wind: 2,
    }
}

function handleInput(imputValue) {

}

function main() {

    const weatherData = giveNockData(456456);
    addLocationName(weatherData.location);
    addTodayWeather(weatherData);

}

main()