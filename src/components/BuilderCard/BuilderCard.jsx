import { motion } from "framer-motion";

function BuilderCard() {

    return (

        <motion.div

        initial={{ opacity:0, scale:.8 }}

        animate={{ opacity:1, scale:1 }}

        transition={{ duration:.6 }}

        className="
        w-[380px]
        rounded-3xl
        bg-[#1A1D33]
        border
        border-[#8B5CF6]
        shadow-[0_0_40px_rgba(139,92,246,.35)]
        p-6
        "

        >

        <div className="flex justify-between">

            <p className="text-cyan-400 text-xs">
            HH GOA 2026
            </p>

            <span className="bg-pink-500 px-3 py-1 rounded-full text-xs text-white">
            EPIC BUILDER
            </span>

        </div>

        <div className="flex justify-center mt-5">

            <div className="w-28 h-28 rounded-full border-[3px] border-pink-500 overflow-hidden">

            <img
                src="https://i.pravatar.cc/300"
                alt=""
                className="w-full h-full object-cover"
            />

            </div>

        </div>

        <h2 className="text-center mt-5 text-2xl font-bold text-white">

            Anushka Patel

        </h2>

        <p className="text-center text-gray-400">

            Full Stack Developer

        </p>

        <div className="flex justify-center gap-2 mt-5 flex-wrap">

            {["React","Node.js","MongoDB","Java"].map((tech)=>(

            <span
                key={tech}
                className="px-3 py-1 rounded-full bg-[#252A3D] text-gray-300 text-xs"
            >
                {tech}
            </span>

            ))}

        </div>

        <div className="mt-8">

            <div className="flex justify-between text-sm">

            <span className="text-gray-400">

                Builder Power

            </span>

            <span className="text-pink-400">

                92/100

            </span>

            </div>

            <div className="w-full bg-[#252A3D] rounded-full h-3 mt-2">

            <div className="w-[92%] rounded-full h-3 bg-gradient-to-r from-pink-500 to-purple-500"></div>

            </div>

        </div>

        <div className="flex justify-between mt-8">

            <div>

            <p className="text-xs text-gray-500">

                CARD NO.

            </p>

            <p className="text-white">

                HH-GOA-2026-092

            </p>

            </div>

            <div className="w-16 h-16 bg-white rounded-lg"></div>

        </div>

        </motion.div>

    );
}

export default BuilderCard;