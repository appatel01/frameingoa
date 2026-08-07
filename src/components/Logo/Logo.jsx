function Logo() {
    return (
        <div className="flex items-center gap-3">

        <div
            className="
            w-10
            h-10
            rounded-xl
            bg-gradient-to-r
            from-violet-500
            to-cyan-400
            flex
            items-center
            justify-center
            text-white
            font-bold
        "
        >
            ✈
        </div>

        <span className="text-white text-2xl font-bold">
            FrameInGoa
        </span>

        </div>
    );
}

export default Logo;