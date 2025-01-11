const axios = require('axios')

async function pokemon () {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
    const name = response.data.results.map(pokemon => pokemon.name)
    console.log(name)
}

async function main () {
    const response = await axios.put("https://httpdump.app/dumps/347a2952-f0fe-4b9f-9ffe-61ffa6e921ec", {
        username: "Ayush",
        password: 12345
    }, {
        headers: {
            Authorization: "Bearer"
        }
    })
    console.log(response.data)
}

main()
// pokemon()