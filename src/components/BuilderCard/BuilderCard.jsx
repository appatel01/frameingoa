import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function BuilderCard() {
    const { photo, user } = useContext(AppContext);

    // Debugging
    console.log("PHOTO =", photo);
    console.log("USER =", user);

    return (
        <div
        id="builder-card"
        className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-cyan-500/30
            bg-gradient-to-br
            from-[#0B1022]
            via-[#141C34]
            to-[#1E293B]
            p-10
            shadow-[0_0_60px_rgba(34,211,238,0.15)]
        "
        >
        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-fuchsia-600/10 rounded-full blur-3xl"></div>

        {/* Header */}
        <div className="relative flex justify-between items-center">
            <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
                Hacker House Goa
            </p>

            <h1 className="text-3xl font-bold text-white mt-2">
                Builder Card
            </h1>
            </div>

            <div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
            <span className="text-cyan-300 text-sm font-semibold">
                #FrameInGoa
            </span>
            </div>
        </div>

        {/* Profile */}
        <div className="relative flex flex-col items-center mt-10">

            {photo ? (
            <img
                src={photo}
                alt="Profile"
                className="
                w-40
                h-40
                rounded-full
                object-cover
                border-4
                border-cyan-400
                shadow-lg
                "
            />
            ) : (
            <div
                className="
                w-40
                h-40
                rounded-full
                border-4
                border-cyan-400
                flex
                items-center
                justify-center
                text-white
                text-xl
                bg-[#111827]
                "
            >
                No Photo
            </div>
            )}

            <h2 className="mt-6 text-4xl font-bold text-white text-center">
            {user.fullName || "Your Name"}
            </h2>

            <p className="mt-2 text-cyan-400 text-lg">
            {user.role || "Your Role"}
            </p>

            <p className="text-gray-400 mt-1">
            {user.college || "College"}
            </p>

        </div>

        {/* Stats */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
            <p className="text-3xl">⚡</p>

            <p className="text-gray-400 text-sm mt-2">
                Builder Score
            </p>

            <h3 className="text-white text-2xl font-bold mt-2">
                93
            </h3>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
            <p className="text-3xl">🦊</p>

            <p className="text-gray-400 text-sm mt-2">
                Spirit Animal
            </p>

            <h3 className="text-white text-xl font-bold mt-2">
                Fox
            </h3>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-center">
            <p className="text-3xl">💻</p>

            <p className="text-gray-400 text-sm mt-2">
                Builder Title
            </p>

            <h3 className="text-white text-lg font-bold mt-2">
                Prompt Wizard
            </h3>
            </div>

        </div>

        {/* Footer */}
        <div className="relative mt-10 pt-6 border-t border-white/10 flex justify-between items-center">

            <span className="text-gray-400 text-sm">
            Built with ❤️ at Hacker House Goa
            </span>

            <span className="text-cyan-400 font-semibold">
            #FrameInGoa
            </span>

        </div>
        </div>
    );
}

export default BuilderCard;