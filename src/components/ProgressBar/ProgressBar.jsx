function ProgressBar() {
    return (
    <div className="flex flex-col items-center mb-8">

        <h2 className="text-center text-cyan-400 text-xl">
            STEP 1 OF 4
        </h2>

        <div className="flex items-center mt-4">

        <div className="w-4 h-4 rounded-full bg-cyan-400"></div>

        <div className="w-20 h-[2px] bg-gray-700"></div>

        <div className="w-4 h-4 rounded-full border border-gray-600"></div>

        <div className="w-20 h-[2px] bg-gray-700"></div>

        <div className="w-4 h-4 rounded-full border border-gray-600"></div>

        <div className="w-20 h-[2px] bg-gray-700"></div>

        <div className="w-4 h-4 rounded-full border border-gray-600"></div>

        </div>

    </div>
    );
}

export default ProgressBar;