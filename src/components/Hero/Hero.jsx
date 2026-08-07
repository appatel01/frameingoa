import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[160px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", }}
            className="relative z-10 text-center max-w-3xl px-6"
        >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider">
            🌴 HACKER HOUSE GOA 2026 PRESENTS
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Create Your Hacker House Goa Identity
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-400 text-lg leading-8 max-w-2xl mx-auto">
            Upload your photo and generate an AI-powered Builder Card or
            Profile Frame in seconds. Claim your place in the tropics.
            </p>

            {/* Button */}
            <div className="mt-10">
            <Button onClick={() => navigate("/upload")}>
                Upload Photo
            </Button>
            </div>

            {/* Divider */}
            <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-10"></div>
        </motion.div>

        </section>
    );
}

export default Hero;