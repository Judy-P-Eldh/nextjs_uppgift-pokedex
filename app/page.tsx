import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
        <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
        <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
        <button className="btn-primary">
          <Image
            src="/Dice.svg"
            width={25}
            height={25}
            alt="Dice"
          />
          Random Pokémon</button>
      </section>

      <section id="searach" className="flex justify-between gap-1 mt-8 mx-auto items-center px-4 rounded-full w-2xl shadow-md hover:bg-purple-50">
        <input type="text" className="p-4 focus:outline-none" placeholder="Search for a pokemon" />
        <svg className="h-5 m-4" xmlns="/Search.svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </section>

      {/* <section className="flex gap-4 items-center my-14 p-14 bg-purple-50"> */}
      <section className="content-grid my-14 p-14 bg-purple-50">

        <h2 className="text-cetner mx-auto  text-4xl">Featured Pokémon</h2>

      </section>
    </main>
  );
}
