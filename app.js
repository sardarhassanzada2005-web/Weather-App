
const searchValue = document.getElementById('searchValue');
const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const description = document.querySelector('.description');
const clouds = document.getElementById('clouds');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const form = document.querySelector('form');

form.addEventListener('submit' ,(e)=> {
    e.preventDefault()
    if(searchValue.value != ''){
        searchWeather();
    }
})

let id = '';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;

const searchWeather = () => {
    fetch(url + '&q' + searchValue.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data)
        if(data.cod == 200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector()
        }
    })
}


// prevent Defalut