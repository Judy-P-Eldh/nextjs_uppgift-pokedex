const endpoint = "https://pokeapi.co/api/v2/pokemon/";
//?offset=1&limit=100


export async function fetchPokemons() {
    try {
        const response = await fetch(endpoint, { cache: 'no-store' });
        if (!response.ok) {
            return { message: 'Misslyckad hämtning av pokémons.' }
        }
        const data = await response.json();
        return data.results;  // Här returnerar vi arrayen under 'results'
    } catch (error) {
        console.log(error);
        throw new Error("Det gick inte att nå API:et för att hämta pokémons.");
    }
}

export async function fetchPokemonById(id: string) {
    try {
        const response = await fetch(`${endpoint}/${id}`, { cache: 'no-store' });
        return await response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Det gick inte att nå API:et för att hämta pokémons.");
    }
}

export async function fetchPokemonBySearch(name: string) {
    try {
        const response = await fetch(`${endpoint}/${name}`, { cache: 'no-store' });
        return await response.json();
    } catch (error) {
        console.log(error);
        throw new Error("Det gick inte att nå API:et för att hämta pokémons.");
    }
}

