const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}
loadCountries();
const displayCountries = counties => {
    // for (const country of counties) {
    //     console.log(country)
    // }
    const countriesDiv = document.getElementById('countres');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name} </h3>
        <p>${country.capital} </p>
        <button onclick ="loadCountryDetails('${country.name}')">Details
        </button>
        `;

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);




    })
}

const loadCountryDetails = name => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    console.log(country)

    const countryDiv = document.getElementById('country-detail')
    countryDiv.innerHTML = `
    <h5>${country.name}</h4>
    <p> Population : ${country.population}</p>
    <img width ="200px" src= "${country.flag}">


   
    `


}



