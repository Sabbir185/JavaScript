function getCountries(){
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(data => showCountries(data))
}

const showCountries = data => {
    const div = document.getElementById('country');
    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        const countryDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);

        div.appendChild(countryDiv);
    }
}

getCountries();