import { motion } from "framer-motion";

function PFPFrame() {

    return (

        <motion.div

        initial={{opacity:0}}

        animate={{opacity:1}}

        className="flex flex-col items-center"

        >

        <div
        className="
        w-[320px]
        h-[320px]
        rounded-full
        p-2
        bg-gradient-to-r
        from-pink-500
        via-purple-500
        to-cyan-400
        ">

            <div className="rounded-full overflow-hidden w-full h-full">

            <img
                src="https://i.pravatar.cc/400"
                className="w-full h-full object-cover"
            />

            </div>

        </div>

        <button
        className="
        mt-8
        px-8
        py-4
        rounded-xl
        bg-gradient-to-r
        from-pink-500
        to-purple-500
        text-white
        ">

            Download PFP Frame

        </button>

        </motion.div>

    );
}

export default PFPFrame;