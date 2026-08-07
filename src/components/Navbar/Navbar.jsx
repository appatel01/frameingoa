import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {

    return (

        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050816]/60 border-b border-white/5">

            <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <div
                    className="
                    w-11
                    h-11
                    rounded-xl
                    bg-gradient-to-r
                    from-fuchsia-500
                    to-cyan-500
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    ">

                        HH

                    </div>

                    <div>

                        <h1 className="text-white text-xl font-bold">

                            FrameInGoa

                        </h1>

                    </div>

                </div>

                <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

                    <li>
                        <Link
                        to="/"
                        className="hover:text-cyan-400 transition duration-300"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <a
                        href="#features"
                        className="hover:text-cyan-400 transition duration-300"
                        >
                        Features
                        </a>
                    </li>

                    <li>
                        <a
                        href="#builder"
                        className="hover:text-cyan-400 transition duration-300"
                        >
                        Builder Card
                        </a>
                    </li>

                    <li>
                        <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition duration-300"
                        >
                        GitHub
                        </a>
                    </li>

                    </ul>

                <button className="md:hidden text-white">

                    <Menu />

                </button>

            </div>

        </nav>

    );

}

export default Navbar;