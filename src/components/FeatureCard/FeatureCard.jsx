import { motion } from "framer-motion";

function FeatureCard({
    icon,
    title,
    description,
    number,
    }) {
    return (
        <motion.div
        whileHover={{
            y: -10,
            scale: 1.03,
            rotateX: 4,
            rotateY: 2,
        }}
        transition={{ duration: 0.3 }}
        className="
        relative
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
        overflow-hidden
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
        transition-all
        duration-300
        "
        >

        {/* Number */}

        <span className="absolute top-5 right-5 text-gray-600 font-bold text-xl">

            {number}

        </span>

        {/* Icon */}

        <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-gradient-to-r
        from-violet-500
        to-cyan-400
        flex
        items-center
        justify-center
        text-white
        ">

            {icon}

        </div>

        <h2 className="mt-6 text-white text-xl font-semibold">

            {title}

        </h2>

        <p className="mt-3 text-gray-400 leading-7">

            {description}

        </p>

        </motion.div>
    );
}

export default FeatureCard;