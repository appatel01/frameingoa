import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    UploadCloud,
    ArrowRight,
} from "lucide-react";

function Hero() {

    const navigate = useNavigate();

    return (
        <section
            className="
                relative
                min-h-[520px]
                flex
                items-center
                justify-center
                overflow-hidden
                px-5
                pt-20
                pb-4
            "
        >

            {/* =====================================
                HERO CONTENT
            ===================================== */}

            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="
                    relative
                    z-20
                    w-full
                    max-w-5xl
                    text-center
                "
            >

                {/* =====================================
                    BADGE
                ===================================== */}

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        bg-[#FFD900]
                        border-[3px]
                        border-[#064D2E]
                        px-5
                        py-2
                        text-[#064D2E]
                        text-xs
                        font-black
                        shadow-[5px_5px_0_#FF0080]
                    "
                >
                    🌴 HACKER HOUSE गोवा 2026 PRESENTS
                </div>


                {/* =====================================
                    HEADING
                ===================================== */}

                <h1
                    className="
                        mt-8
                        uppercase
                        font-black
                        leading-[0.82]
                        tracking-tight
                    "
                >

                    <span
                        className="
                            block
                            text-[#FFD900]
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                        "
                    >
                        CREATE YOUR
                    </span>


                    <span
                        className="
                            block
                            text-[#FFF7D6]
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                        "
                    >
                        HACKER HOUSE
                    </span>


                    <span
                        className="
                            block
                            text-[#FF0080]
                            text-5xl
                            sm:text-6xl
                            md:text-7xl
                            [text-shadow:5px_5px_0_#FFD900]
                        "
                    >
                        गोवा IDENTITY
                    </span>

                </h1>


                {/* =====================================
                    DESCRIPTION
                ===================================== */}

                <p
                    className="
                        mx-auto
                        mt-7
                        max-w-2xl
                        text-[#FFF7D6]
                        text-sm
                        sm:text-base
                        font-semibold
                        leading-7
                    "
                >
                    Upload your photo and generate an AI-powered
                    Builder Card or Profile Frame in seconds.
                    Claim your place in the tropics.
                </p>


                {/* =====================================
                    BUTTONS
                ===================================== */}

                <div
                    className="
                        mt-8
                        flex
                        flex-wrap
                        justify-center
                        gap-4
                    "
                >

                    {/* UPLOAD */}

                    <button
                        onClick={() => navigate("/upload")}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-[#FF0080]
                            border-[3px]
                            border-[#064D2E]
                            px-7
                            py-4
                            text-[#FFF7D6]
                            text-sm
                            font-black
                            shadow-[6px_6px_0_#FFD900]
                            transition-all
                            hover:translate-x-[3px]
                            hover:translate-y-[3px]
                            hover:shadow-[3px_3px_0_#FFD900]
                        "
                    >
                        <UploadCloud size={19} />

                        UPLOAD PHOTO
                    </button>


                    {/* FEATURES */}

                    <a
                        href="#features"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            bg-[#075C36]/80
                            border-2
                            border-[#FFD900]
                            px-7
                            py-4
                            text-[#FFD900]
                            text-sm
                            font-black
                            transition
                            hover:bg-[#FFD900]
                            hover:text-[#064D2E]
                        "
                    >
                        VIEW FEATURES

                        <ArrowRight size={18} />

                    </a>

                </div>

            </motion.div>

        </section>
    );
}

export default Hero;