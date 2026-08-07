import { motion } from "framer-motion";

function Loader() {
    const steps = [
        "Detecting Face",
        "Cropping Portrait",
        "Generating Builder Card",
        "Preparing Your Identity",
    ];

    return (
        <div className="flex flex-col items-center">

        <motion.div
            animate={{ rotate: 360 }}
            transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
            }}
            className="
            w-24
            h-24
            rounded-full
            border-4
            border-cyan-500
            border-t-fuchsia-500
            "
        />

        <h2 className="mt-8 text-2xl font-bold text-white">
            Creating your Identity...
        </h2>

        <div className="mt-8 space-y-4">

            {steps.map((step, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                delay: index * 0.6,
                }}
                className="flex items-center gap-3 text-gray-300"
            >
                <span className="text-green-400">✔</span>

                {step}
            </motion.div>
            ))}

        </div>

        </div>
    );
}

export default Loader;