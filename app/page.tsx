import { fetchPokemons } from "@/lib/data/pokedata";
import Image from "next/image";
import { FeaturedList, Pokemon } from "@/lib/interface";
import Header from "@/components/header";
import Link from "next/link";

function getRandomItems<T>(arr: T[], count: number): T[] {
  if (!Array.isArray(arr) || arr.length === 0 || count <= 0) {
    return [];
  }
  // Skapar en kopia av arrayen och blanda den (shuffla)
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  // Returnerar 'count' antal element från den blandade arrayen
  return shuffled.slice(0, count);
}


export default async function Home() {
  const pokemonsObject = await fetchPokemons();
  const pokemonArray: Pokemon[] = Object.values(pokemonsObject);       // Konvertera objekt till array
  const featuredPokemons = getRandomItems(pokemonArray, 4);                // Hämta 4 slumpade Pokémon  
  const getPokemonIdFromUrl = (url: string): string => {
    const parts = url.split('/').filter(Boolean);
    // console.log(parts);
    return parts[parts.length - 1];
  };

  return (
    <main>
      <Header />
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <Link className="btn-primary" href={"/"}>
          <Image
            src="/Dice.svg"
            width={25}
            height={25}
            alt="Dice"
          />
          Random Pokémon</Link>
      </section>

      <section id="searach" className="flex justify-between gap-1 mt-14 mx-auto items-center px-4 rounded-full md:w-2xl shadow-md hover:bg-purple-50">
        <input type="text" className="px-4 focus:outline-none" placeholder="Search for a pokemon" />
        <svg className="h-5 m-4" xmlns="/Search.svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </section>

      <section id="featured" className="my-14 p-14 bg-purple-50">
        <h2 className="justify-self-center text-cetner pb-16 mx-auto text-4xl">Featured Pokémon</h2>
        <div className="flex justify-evenly gap-4 mx-auto">
          {featuredPokemons.map((pokemon, index) => {
            const id = getPokemonIdFromUrl(pokemon.url);
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            return (
              <div key={index} className="justify-center border-4 border-sky-700 p-8 rounded-2xl max-w-2xs bg-green-50">
                <Image className="border-2 rounded-full border-cyan-900" src={imageUrl} alt={pokemon.name} width={150} height={150} />
                <h3 className="justify-self-center text-xl mt-4 mx-auto">{pokemon.name}</h3>
                <div>
                    <p>Name: {pokemon.name}</p>
                    <p>Id: {pokemon.id}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                    <p>Base experience: {pokemon.base_experience}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}


