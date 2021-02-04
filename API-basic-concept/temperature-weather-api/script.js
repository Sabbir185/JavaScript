
// button response
document.getElementById('button-id').addEventListener("click", function(){
    const cityName = document.getElementById('city').value;
    document.getElementById('cityDisplay').innerText = cityName.toUpperCase();
    getWeatherInfo(cityName);
})


// API fetching & posting
function getWeatherInfo(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=a18376cb63703f63e5656f5db15124cd`)
    .then(res => res.json())
    .then(data => display(data) )  // calling function to display info
    .catch(err => alert(err) )
}


function display(data){
    const temp = data.main.temp - 273.15 ;
    // console.log(typeof(temp));
    document.getElementById('temp').innerText = temp.toFixed(2) ;
    document.getElementById('description').innerText = data.weather[0].description ;
    let imageSrc = document.querySelector('img').src;
    // console.log(imageSrc);
    const icon = data.weather[0].icon ;
    const newImgSrc = "https://openweathermap.org/img/wn/"+icon+"@2x.png" ;
    document.querySelector('img').src = newImgSrc ;
    const timeDate = new Date();
    document.getElementById('time').innerText = timeDate;
}



/*
    console.log(data);
    console.log(data.weather[0]);
    console.log(data.main.temp);
    console.log(data.weather[0].icon);
    console.log(data.weather[0].description);
    console.log(data.name);
    console.log(data.sys.country);

*/