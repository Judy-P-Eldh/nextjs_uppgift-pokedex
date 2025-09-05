import Header from "@/components/header";
import { fetchPokemons } from "@/lib/data/pokedata";
import { Pokemon } from "@/lib/interface";

export default async function Pokedex() {
    const pokemonsObject: Pokemon = await fetchPokemons();
    // console.log(pokemonsObject.values);
    const pokemonArray: Pokemon[] = Object.values(pokemonsObject);
    console.log(pokemonArray);
    return (
        <main>
            <Header />

            {pokemonArray.map((poke: Pokemon, index) => (
                <div className="flex justify-center" key={index}>
                    <p>{poke.name}</p>
                    <p>{poke.id}</p>
                    <p>{poke.height}</p>
                    <p>{poke.weight}</p>
                    <p>{poke.base_experience}</p>
                    {/* <div>{poke.species.map((sp, i) => (
                   <div key={i}>
                    <p>{sp.color.name}</p>
                    <p>{sp.habitat.name}</p>
                    <p>{sp.shape.name}</p>
                   </div>  
                    ))}
                    </div> */}

                    {/* <p>{poke.sprites.front_default}</p> */}
                </div>
            ))}

        </main>
    );
}