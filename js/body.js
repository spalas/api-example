const loadbuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displaybuddies(data));

}
loadbuddies();
const displaybuddies = data => {
    const buddies = data.results;
    // call from html
    const buddiesDiv = document.getElementById('buddies')

    for (const buddy of buddies) {
        console.log(buddy.email);
        // crate element to html
        const p = document.createElement('p')
        p.innerText = `name: ${buddy.name.first} ${buddy.name.title} ${buddy.name.last} ${buddy.email}`;



        // sitting in html push give apace
        buddiesDiv.appendChild(p)

    }





}