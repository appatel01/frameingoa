import { motion } from "framer-motion";

function FeatureCard({ icon, number, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                shadow-xl
                hover:border-fuchsia-500/40
                transition-all
                duration-300
            "
        >

            {/* Glow */}
            <div
                className="
                    absolute
                    -top-16
                    -right-16
                    w-40
                    h-40
                    rounded-full
                    bg-fuchsia-500/10
                    blur-3xl
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                "
            ></div>

            {/* Top */}
            <div className="relative flex items-center justify-between">

                {/* Number */}
                <span className="
                    text-sm
                    font-bold
                    tracking-widest
                    text-fuchsia-400
                ">
                    {number}
                </span>

                {/* Icon */}
                <div className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-fuchsia-600/20
                    to-cyan-500/20
                    border
                    border-white/10
                    text-cyan-400
                    group-hover:text-fuchsia-400
                    transition-colors
                ">
                    {icon}
                </div>

            </div>

            {/* Title */}
            <h3 className="
                relative
                mt-8
                text-2xl
                font-bold
                text-white
            ">
                {title}
            </h3>

            {/* Description */}
            <p className="
                relative
                mt-3
                text-gray-400
                leading-relaxed
            ">
                {description}
            </p>

        </motion.div>
    );
}

export default FeatureCard;