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
        const countryInfo = `
            <h3>${ country.name }</h3>
            <p>${ country.capital }</p>
        `;
        countryDiv.innerHTML = countryInfo;
        mainDiv.appendChild(countryDiv);
    });
}

getCountries();