import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="relative border-b-4 border-[#FF0080] bg-[#064D2E]">

        <div
            className="
            mx-auto
            flex
            h-[76px]
            max-w-7xl
            items-center
            justify-between
            px-5
            sm:px-8
            "
        >

            {/* ================= LOGO ================= */}

            <Link
            to="/"
            className="flex items-center gap-3 group"
            >

            <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border-2
                border-[#064D2E]
                bg-[#FFD900]
                font-black
                text-[#064D2E]
                shadow-[4px_4px_0_#FF0080]
                transition-transform
                group-hover:rotate-6
                "
            >
                HH
            </div>

            <div>

                <span
                className="
                    block
                    text-xl
                    font-black
                    uppercase
                    tracking-tight
                    text-[#FFD900]
                    sm:text-2xl
                "
                >
                FrameInगोवा
                </span>

                <span
                className="
                    hidden
                    text-[9px]
                    font-bold
                    tracking-[0.25em]
                    text-[#FFF7D6]
                    sm:block
                "
                >
                BUILD • BEACH • CREATE
                </span>

            </div>

            </Link>


            {/* ================= DESKTOP NAV ================= */}

            <div className="hidden items-center gap-8 md:flex">

            <Link
                to="/"
                className="goa-nav-link active"
            >
                HOME
            </Link>

            <a
                href="/#features"
                className="goa-nav-link"
            >
                FEATURES
            </a>

            <Link
                to="/identity"
                className="goa-nav-link"
            >
                BUILDER CARD
            </Link>

            <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="goa-nav-link"
            >
                GITHUB
            </a>

            <div
                className="
                border-2
                border-[#064D2E]
                bg-[#FFD900]
                px-5
                py-2.5
                text-xs
                font-black
                tracking-wide
                text-[#064D2E]
                shadow-[4px_4px_0_#FF0080]
                "
            >
                🌴 गोवा 2026
            </div>

            </div>


            {/* ================= MOBILE ================= */}

            <button
            type="button"
            className="
                flex
                h-11
                w-11
                items-center
                justify-center
                border-2
                border-[#FFD900]
                bg-[#FF0080]
                text-xl
                font-bold
                text-[#FFF7D6]
                md:hidden
            "
            >
            ☰
            </button>

        </div>

        </nav>
    );
}

export default Navbar;