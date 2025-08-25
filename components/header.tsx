import Image
 from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <header className="flex gap-4 justify-between h-20 px-20 mx-auto">
            <div className="flex gap-4 items-center">
                <Image className="h-fit"
                    src="/Logo.png"
                    width={40}
                    height={40}
                    alt="Logo"
                />
                <h3 className="text-3xl text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokédex</h3>
            </div>
            <div className="flex gap-4 items-center">
                <Link className="p-2" href={"/"}>Home</Link>
                <Link className="p-2" href={"/Pokedex"}>Pokedex</Link>
                <Link className="p-2" href={"/"}>Types</Link>
                <Link className="p-2" href={"/"}>Favourites</Link>
            </div>
        </header>
    );
}