const apiKey='307c95350c763cc5d985fc0712599ff8';
const apiURL='https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const inputBox=document.querySelector(".search input");
const Btn=document.querySelector(".search button");
const weatherIcon=document.querySelector('.weather-icon');

async function checkWeather(city){
    const response= await fetch (apiURL+ city +`&appid=${apiKey}`);
    if (response.status==404){
       document.querySelector('.error').style.display='block';
       document.querySelector('.weather').style.display='none';
    }
    else{
        var data=await response.json();
    
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp )+ "°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity  + "%";
        document.querySelector('.wind').innerHTML=data.wind.speed  + "Km/hr";
        if (data.weather[0].main=="Clouds"){
            weatherIcon.src="assets/clouds.png";
        }
        else if (data.weather[0].main=="Clear"){
            weatherIcon.src="assets/clear.png";
        }
        else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src="assets/drizzle.png";
        }
        else if (data.weather[0].main=="Mist"){
            weatherIcon.src="assets/mist.png";
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src="assets/rain.png";
        }
        else if (data.weather[0].main=="Snow"){
            weatherIcon.src="assets/snow.png";
        }
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
    }

    
}
Btn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});
inputBox.addEventListener('keydown',(e)=>{
    if (e.key === "Enter"){
        checkWeather(inputBox.value);
    }
})
