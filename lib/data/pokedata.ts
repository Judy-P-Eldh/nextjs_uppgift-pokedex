import { Pokemon } from "../interface";

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

export async function fetchPokemon(identifier: number | string): Promise<Pokemon> {
            console.log("Anropar URL:", `${endpoint}${identifier}`);

    try {
        const res = await fetch(`${endpoint}${identifier}`);

        if (!res.ok) {
            throw new Error(`Pokémon inte hittad: ${identifier}`);
        }
        const data = await res.json();
        return data; // Se till att ditt interface matchar detta
    } catch (error) {
        console.error("Fel vid hämtning av Pokémon:", error);
        throw error;
    }
}

export async function fetchColor(identifier: number | string): Promise<Pokemon> {
            console.log("Anropar URL:", `${endpoint}-species/${identifier}`);

    try {
        const res = await fetch(`${endpoint}-species/${identifier}`);

        if (!res.ok) {
            throw new Error(`Pokémonfärg inte hittad: ${identifier}`);
        }
        const data = await res.json();
        return data; // Se till att ditt interface matchar detta
    } catch (error) {
        console.error("Fel vid hämtning av Pokémonfärg:", error);
        throw error;
    }
}
