function getCountries(){
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(data => showCountries(data))
}

const showCountries = data => {
    const mainDiv = document.getElementById('country');

    data.forEach( country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = "country-info";
        const countryInfo = `
            <h3 class="countryName">${ country.name }</h3>
            <p class="countryCapital">${ country.capital }</p>
            <button onclick="showCountryInfo('${country.name}')" class="info-button">details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        mainDiv.appendChild(countryDiv);
    });
}

getCountries();

const showCountryInfo = name => {
    const urls = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(urls)
    .then(res => res.json())
    .then(data => getMoreInfo(data[0])) // be careful . it's an object in array
}

const getMoreInfo = country => {
    const details = document.getElementById('countryMoreInfo');
    const info = `
        <h3>${country.name}</h3>
        <h5>${country.capital}</h5>
        <h5>${country.population}</h5>
        <h5>${country.region}</h5>
        <h5>${country.timezones}</h5>
        <img src='${country.flag}'>
    `;
    details.innerHTML = info;

    document.getElementById('country').style.display='none';

    setTimeout(()=>{
        location.reload();   // after 30s will auto reload the current page
    },30000);
}