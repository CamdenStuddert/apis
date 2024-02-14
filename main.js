let getResidents = document.querySelector(`button`)

// const buttonClick = () => console.log(`Button Clicked!`)

getResidents.onclick = () => {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`).then((obj) => {
        obj.data.results[0].residents.forEach((el) => {
            axios.get(`${el}`).then((obj) => {
                let h2 = document.createElement(`h2`)
                h2.textContent = obj.data.name
                document.querySelector(`button`).appendChild(h2)
            })
        })
    })
}

// getResidents.addEventListener(`click`, buttonClick)