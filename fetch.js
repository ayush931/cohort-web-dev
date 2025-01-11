// Fetch

function pokemon () {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(async (response) => {
        const json = await response.json()
        const pokemonName = json.results.map(pokemon => pokemon.name)
        console.log(pokemonName)
    })
}

// other syntax

async function main () {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const json = await response.json()
    console.log(json)
}

async function postRequest () {
    const response = await fetch("https://www.postb.in/1736610464587-4144434258341", {
        method: "POST",
        body: {
            username: "Ayush",
            password: 12345
        },
        headers: {
            Authorization: "Bearer"
        }
    })
    const textualData = await response.text()
    console.log(textualData)
}

pokemon()
main ()
postRequest()