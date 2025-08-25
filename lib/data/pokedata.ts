const endpoint = "https://pokeapi.co/api/v2/pokemon?offset=1&limit=100";

export async function fetchPokemons() {
    try {
        const response = await fetch(endpoint, { cache: 'no-store' });
        if (!response.ok) {
            return { message: 'Failed to get courses' }
        }
        const courses = await response.json();
        return courses;
    } catch (error) {
        console.log(error);
        throw new Error("Det gick inte att nå API:et för att hämta kurser.");
    }
}