function ProgressBar({ step, title }) {
    return (
        <div className="flex flex-col items-center">

        {/* Step Number */}
        <p className="text-sm uppercase tracking-widest text-fuchsia-400 font-semibold">
            STEP {step} OF 4
        </p>

        {/* Page Title */}
        <h2 className="mt-2 text-3xl font-bold text-white">
            {title}
        </h2>

        {/* Progress Circles */}
        <div className="flex items-center mt-8">

            {/* Step 1 */}
            <div
            className={`w-4 h-4 rounded-full ${
                step >= 1 ? "bg-cyan-400" : "border border-gray-600"
            }`}
            ></div>

            <div
            className={`w-20 h-[2px] ${
                step >= 2 ? "bg-cyan-400" : "bg-gray-700"
            }`}
            ></div>

            {/* Step 2 */}
            <div
            className={`w-4 h-4 rounded-full ${
                step >= 2 ? "bg-cyan-400" : "border border-gray-600"
            }`}
            ></div>

            <div
            className={`w-20 h-[2px] ${
                step >= 3 ? "bg-cyan-400" : "bg-gray-700"
            }`}
            ></div>

            {/* Step 3 */}
            <div
            className={`w-4 h-4 rounded-full ${
                step >= 3 ? "bg-cyan-400" : "border border-gray-600"
            }`}
            ></div>

            <div
            className={`w-20 h-[2px] ${
                step >= 4 ? "bg-cyan-400" : "bg-gray-700"
            }`}
            ></div>

            {/* Step 4 */}
            <div
            className={`w-4 h-4 rounded-full ${
                step >= 4 ? "bg-cyan-400" : "border border-gray-600"
            }`}
            ></div>

        </div>
        </div>
    );
}

export default ProgressBar;