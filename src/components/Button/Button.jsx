import { motion } from "framer-motion";

function Button({
    children,
    onClick,
    type = "button",
    fullWidth = false,
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
        className={`
            ${fullWidth ? "w-full" : ""}
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-fuchsia-600
            via-purple-600
            to-cyan-500
            text-white
            font-semibold
            transition-all
            duration-300
        `}
        >
        {children}
        </motion.button>
    );
}

export default Button;