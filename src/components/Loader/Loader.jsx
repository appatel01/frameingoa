import { motion } from "framer-motion";
import { ScanFace } from "lucide-react";

function Loader() {
    return (
    <div className="relative flex items-center justify-center w-36 h-36">

      {/* Outer Ring */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
            }}
            className="absolute w-36 h-36 rounded-full border-[3px] border-cyan-400 border-t-transparent"
        />

        {/* Middle Ring */}
        <motion.div
            animate={{ rotate: -360 }}
            transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear",
            }}
            className="absolute w-28 h-28 rounded-full border-[3px] border-pink-500 border-b-transparent"
        />

        {/* Pulse */}
        <motion.div
            animate={{
            scale: [1, 1.15, 1],
            }}
            transition={{
            repeat: Infinity,
            duration: 2,
            }}
            className="w-16 h-16 rounded-full bg-[#112133] flex items-center justify-center"
        >
            <ScanFace className="text-cyan-400" size={30} />
        </motion.div>

        </div>
    );
    }

    export default Loader;