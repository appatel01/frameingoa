import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function Success() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-600/20 blur-[170px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full" />

        <Navbar />

        <div className="relative z-10 pt-32">

            <ProgressBar
            step={4}
            title="Identity Created"
            />

            <div className="max-w-2xl mx-auto mt-12 px-6">

            <div
                className="
                bg-white/5
                border
                border-cyan-500/30
                rounded-3xl
                p-10
                text-center
                backdrop-blur-xl
                shadow-[0_0_60px_rgba(34,211,238,0.12)]
                "
            >

                {/* Success Icon */}
                <div
                className="
                    mx-auto
                    w-20
                    h-20
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-500/20
                    to-purple-600/20
                    border
                    border-cyan-400/40
                    flex
                    items-center
                    justify-center
                "
                >
                <span className="text-4xl">
                    ✓
                </span>
                </div>

                <h1 className="mt-8 text-4xl font-bold">
                Identity Created! 🎉
                </h1>

                <p className="mt-4 text-gray-400">
                Your FrameInGoa Builder identity has been
                successfully created.
                </p>

                <div
                className="
                    mt-8
                    rounded-2xl
                    bg-cyan-500/5
                    border
                    border-cyan-500/20
                    px-6
                    py-5
                "
                >
                <p className="text-cyan-400 font-semibold">
                    Your Builder Card and PFP Frame are ready to use.
                </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

                <button
                    onClick={() => navigate("/identity")}
                    className="
                    px-6
                    py-3
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    text-white
                    font-semibold
                    hover:scale-105
                    transition
                    "
                >
                    ← Back to Identity
                </button>

                <button
                    onClick={() => navigate("/")}
                    className="
                    px-6
                    py-3
                    rounded-xl
                    border
                    border-cyan-400
                    text-cyan-400
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                    "
                >
                    ⌂ Back to Home
                </button>

                </div>

            </div>

            </div>

        </div>

        </div>
    );
}

export default Success;