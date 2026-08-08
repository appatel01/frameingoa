import { CheckCircle, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function Success() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-[#050816] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-600/20 blur-[170px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="relative z-10 pt-32 px-6">

            {/* Progress */}
            <ProgressBar
            step={4}
            title="Complete"
            />

            {/* Success Card */}
            <div className="max-w-2xl mx-auto mt-12">

            <div
                className="
                bg-white/5
                border
                border-cyan-500/30
                rounded-3xl
                p-12
                backdrop-blur-xl
                shadow-[0_0_60px_rgba(34,211,238,0.12)]
                text-center
                "
            >

                {/* Success Icon */}
                <div className="flex justify-center mb-8">

                <div
                    className="
                    w-24
                    h-24
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-400/20
                    to-purple-600/20
                    border
                    border-cyan-400/40
                    flex
                    items-center
                    justify-center
                    "
                >
                    <CheckCircle
                    size={52}
                    className="text-cyan-400"
                    />
                </div>

                </div>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-white">
                Identity Created! 🎉
                </h1>

                <p className="text-gray-400 mt-4 text-lg">
                Your FrameInGoa Builder identity has been successfully created.
                </p>

                {/* Message */}
                <div
                className="
                    mt-8
                    p-5
                    rounded-2xl
                    bg-cyan-500/5
                    border
                    border-cyan-500/20
                "
                >
                <p className="text-cyan-300">
                    Your Builder Card and PFP Frame are ready to use.
                </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

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
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:scale-105
                    transition
                    "
                >
                    <ArrowLeft size={18} />
                    Back to Identity
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
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-cyan-400
                    hover:text-black
                    transition
                    "
                >
                    <Home size={18} />
                    Back to Home
                </button>

                </div>

            </div>

            </div>

        </div>

        </div>
    );
}

export default Success;