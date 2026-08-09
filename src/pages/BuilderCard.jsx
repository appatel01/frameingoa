import { motion } from "framer-motion";
import {
    Zap,
    PawPrint,
    Laptop,
    } from "lucide-react";
    import { useContext, useEffect, useState } from "react";
    import { AppContext } from "../context/AppContext";

    function BuilderCard() {
    const { photo, user } = useContext(AppContext);

    const {
        fullName = "",
        role = "",
        college = "",
    } = user || {};

    // =====================================
    // CREATE PHOTO URL
    // =====================================

    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        if (!photo) {
        setPhotoUrl(null);
        return;
        }

        // If photo is already a URL/string
        if (typeof photo === "string") {
        setPhotoUrl(photo);
        return;
        }

        // If photo is a File object
        const url = URL.createObjectURL(photo);

        setPhotoUrl(url);

        // Cleanup old URL
        return () => {
        URL.revokeObjectURL(url);
        };
    }, [photo]);

    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full"
        >

        {/* =====================================
            BUILDER CARD
        ===================================== */}

        <div
            id="builder-card"
            className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-cyan-400/30
            bg-gradient-to-br
            from-[#171329]
            via-[#101321]
            to-[#071923]
            p-7
            sm:p-9
            shadow-[0_0_60px_rgba(34,211,238,0.08)]
            "
        >

            {/* =====================================
                BACKGROUND GLOW
            ===================================== */}

            <div
            className="
                absolute
                -top-32
                -right-32
                w-72
                h-72
                rounded-full
                bg-fuchsia-500/10
                blur-[100px]
                pointer-events-none
            "
            />

            <div
            className="
                absolute
                -bottom-32
                -left-32
                w-72
                h-72
                rounded-full
                bg-cyan-500/10
                blur-[100px]
                pointer-events-none
            "
            />

            {/* =====================================
                HEADER
            ===================================== */}

            <div className="relative flex items-center justify-between gap-4">

            <div>

                <p
                className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-cyan-400
                "
                >
                HACKER HOUSE GOA
                </p>

                <h2
                className="
                    mt-1
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    text-white
                "
                >
                Builder Card
                </h2>

            </div>

            <div
                className="
                shrink-0
                px-4
                py-2
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-400/10
                text-cyan-300
                text-xs
                font-semibold
                "
            >
                #FrameInGoa
            </div>

            </div>

            {/* =====================================
                PROFILE
            ===================================== */}

            <div className="relative mt-8 text-center">

            {/* PHOTO */}

            <div
                className="
                mx-auto
                w-32
                h-32
                rounded-full
                p-[2px]
                bg-gradient-to-br
                from-fuchsia-400
                via-purple-400
                to-cyan-400
                shadow-[0_0_35px_rgba(217,70,239,0.25)]
                "
            >

                <div
                className="
                    w-full
                    h-full
                    rounded-full
                    overflow-hidden
                    bg-[#101321]
                    flex
                    items-center
                    justify-center
                "
                >

                {photoUrl ? (

                    <img
                    src={photoUrl}
                    alt={fullName || "Builder"}
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                    />

                ) : (

                    <div className="text-gray-500 text-sm">
                    No Photo
                    </div>

                )}

                </div>

            </div>

            {/* NAME */}

            <h3
                className="
                mt-4
                text-2xl
                font-bold
                text-white
                "
            >
                {fullName || "Your Name"}
            </h3>

            {/* ROLE */}

            <p
                className="
                mt-1
                font-semibold
                text-cyan-400
                "
            >
                {role || "Your Role / Stack"}
            </p>

            {/* COLLEGE */}

            <p
                className="
                mt-1
                text-sm
                text-gray-400
                "
            >
                {college || "Your College"}
            </p>

            </div>

            {/* =====================================
                STATS
            ===================================== */}

            <div
            className="
                relative
                grid
                grid-cols-3
                gap-3
                mt-8
            "
            >

            {/* BUILDER SCORE */}

            <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
                text-center
                hover:border-yellow-400/30
                transition
                "
            >

                <Zap
                size={20}
                className="mx-auto text-yellow-400"
                />

                <p className="mt-2 text-[11px] text-gray-400">
                Builder Score
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                93
                </p>

            </div>

            {/* SPIRIT ANIMAL */}

            <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
                text-center
                hover:border-orange-400/30
                transition
                "
            >

                <PawPrint
                size={20}
                className="mx-auto text-orange-400"
                />

                <p className="mt-2 text-[11px] text-gray-400">
                Spirit Animal
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                Fox
                </p>

            </div>

            {/* BUILDER TITLE */}

            <div
                className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
                text-center
                hover:border-cyan-400/30
                transition
                "
            >

                <Laptop
                size={20}
                className="mx-auto text-cyan-400"
                />

                <p className="mt-2 text-[11px] text-gray-400">
                Builder Title
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                Prompt Wizard
                </p>

            </div>

            </div>

            {/* =====================================
                DIVIDER
            ===================================== */}

            <div className="relative h-px bg-white/10 my-7" />

            {/* =====================================
                FOOTER
            ===================================== */}

            <div
            className="
                relative
                flex
                items-center
                justify-between
                text-xs
            "
            >

            <span className="text-gray-400">
                Built with 💗 at Hacker House Goa
            </span>

            <span className="text-cyan-400 font-semibold">
                #FrameInGoa
            </span>

            </div>

        </div>

        </motion.div>
    );
}

export default BuilderCard;