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
        `;
        countryDiv.innerHTML = countryInfo;
        mainDiv.appendChild(countryDiv);
    });
}

getCountries();