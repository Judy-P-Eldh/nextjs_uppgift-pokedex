import Header from "@/components/header";
import { fetchPokemon } from "@/lib/data/pokedata";
import { Pokemon } from "@/lib/interface";
import Image from "next/image";

export default async function PokemonPage({ params }: { params: { identifier?: number | string } }) {
    const idname = params.identifier;
    console.log("Hämtar Pokémon med identifier:", idname);

    if (!idname) {
        console.log(idname, "finns inte.");
        return (
            <div>
                <p>Hittade ingen pokémon</p>
            </div>
        );
    }

    // Hämta pokémonen – förutsatt att fetchPokemon är async
    let pokemon: Pokemon;
    try {
        pokemon = await fetchPokemon(idname);
    } catch (error) {
        return (
            <div>
                <p>Kunde inte hitta denna pokémon.</p>
            </div>
        );
    }
    const image = pokemon.sprites.front_default ? pokemon.sprites.front_default : "ingen bild";
    return (
        <main>
            <Header />

            <h2 className="justify-self-center text-cetner mx-auto text-4xl">{pokemon.name}</h2>
            <div className="flex flex-col items-center mx-auto px-40 py-20 gap-4">
                <Image className={`border-2 rounded-full border-cyan-500`}
                    src={image}
                    alt={pokemon.name}
                    width={150}
                    height={150}
                />
                <div>
                    <p>Name: {pokemon.name}</p>
                    <p>Id: {pokemon.id}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                    <p>Base experience: {pokemon.base_experience}</p>
                </div>

                <div>{pokemon.types.map((type, index) => (
                    <div key={index}>
                        <p>Slot: {type.slot}</p>
                        <p>Type: {type.type.name}</p>
                    </div>
                ))}</div>
            </div>
        </main>
    );
}