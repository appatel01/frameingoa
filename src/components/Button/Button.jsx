import { motion } from "framer-motion";

function Button({
    children,
    onClick,
    type = "button",
    }) {
    return (
        <motion.button
        type={type}
        onClick={onClick}
        whileHover={{
            scale: 1.04,
            boxShadow: "0px 0px 30px rgba(34,211,238,.45)",
        }}
        whileTap={{
            scale: 0.97,
        }}
        className="
        px-10
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-500
        to-cyan-400
        text-white
        text-lg
        font-semibold
        transition-all
        duration-300
        shadow-lg
        shadow-cyan-500/20
        "
        >
        {children}
        </motion.button>
    );
}

export default Button;