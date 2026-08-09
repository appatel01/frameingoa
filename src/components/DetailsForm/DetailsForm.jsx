import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
    User,
    Code2,
    GraduationCap,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

import { AppContext } from "../../context/AppContext";

function DetailsForm() {
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const fullName = user.fullName.trim();
        const role = user.role.trim();
        const college = user.college.trim();

        if (!fullName || !role || !college) {
            alert(
                "Please fill Full Name, Primary Role / Stack and College."
            );
            return;
        }

        setUser({
            ...user,
            fullName,
            role,
            college,
        });

        navigate("/processing");
    }

    return (
        <div className="relative w-full">

            {/* Background Glow */}
            <div className="absolute -top-20 left-10 w-72 h-72 bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-40 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Step Indicator */}
            <div className="relative z-10 flex items-center justify-center mb-10">
                <div className="flex items-center">

                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border border-cyan-400 bg-cyan-400/10 text-cyan-400 flex items-center justify-center text-sm font-bold">
                            ✓
                        </div>

                        <span className="mt-2 text-[10px] uppercase tracking-wider text-cyan-400">
                            Upload
                        </span>
                    </div>

                    <div className="w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500" />

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white flex items-center justify-center font-bold shadow-[0_0_25px_rgba(217,70,239,0.4)]">
                            2
                        </div>

                        <span className="mt-2 text-[10px] uppercase tracking-wider text-fuchsia-400">
                            Profile
                        </span>
                    </div>

                    <div className="w-20 h-[2px] bg-white/10" />

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border border-white/20 text-gray-500 flex items-center justify-center text-sm font-bold">
                            3
                        </div>

                        <span className="mt-2 text-[10px] uppercase tracking-wider text-gray-500">
                            Generate
                        </span>
                    </div>

                    <div className="w-20 h-[2px] bg-white/10" />

                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border border-white/20 text-gray-500 flex items-center justify-center text-sm font-bold">
                            4
                        </div>

                        <span className="mt-2 text-[10px] uppercase tracking-wider text-gray-500">
                            Download
                        </span>
                    </div>

                </div>
            </div>

            {/* Heading */}
            <div className="relative z-10 text-center mb-10">

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-semibold tracking-widest">
                    <Sparkles size={14} />
                    STEP 2 OF 4 • BUILDER INFORMATION
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
                    Create Your{" "}
                    <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Builder Identity
                    </span>
                </h1>

                <p className="mt-4 text-gray-400 max-w-xl mx-auto leading-relaxed">
                    Tell us who you are and what you build.
                    <br />
                    We'll turn it into your Hacker House identity.
                </p>

            </div>

            {/* Main Layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">

                {/* FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="
                        lg:col-span-3
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-fuchsia-500/30
                        bg-gradient-to-br
                        from-fuchsia-500/10
                        via-white/5
                        to-cyan-500/5
                        backdrop-blur-xl
                        p-7
                        md:p-9
                        shadow-[0_0_50px_rgba(168,85,247,0.08)]
                    "
                >

                    {/* Top glow */}
                    <div className="absolute -top-32 -left-20 w-72 h-72 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative">

                        {/* Form Header */}
                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/30 flex items-center justify-center text-fuchsia-400">
                                <User size={27} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white">
                                    Hacker Profile
                                </h2>

                                <p className="text-gray-400 text-sm mt-1">
                                    Fill in your details to generate your identity.
                                </p>
                            </div>

                        </div>

                        {/* Full Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                FULL NAME
                            </label>

                            <div className="relative group">

                                <User
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-fuchsia-400"
                                />

                                <input
                                    type="text"
                                    name="fullName"
                                    value={user.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="
                                        w-full
                                        bg-black/20
                                        border
                                        border-white/10
                                        rounded-xl
                                        py-4
                                        pl-12
                                        pr-4
                                        text-white
                                        placeholder-gray-600
                                        outline-none
                                        transition-all
                                        focus:border-fuchsia-400
                                        focus:ring-2
                                        focus:ring-fuchsia-500/20
                                    "
                                />

                            </div>
                        </div>

                        {/* Role */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                PRIMARY ROLE / STACK
                            </label>

                            <div className="relative">

                                <Code2
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400"
                                />

                                <input
                                    type="text"
                                    name="role"
                                    value={user.role}
                                    onChange={handleChange}
                                    placeholder="e.g. Full Stack Developer"
                                    className="
                                        w-full
                                        bg-black/20
                                        border
                                        border-white/10
                                        rounded-xl
                                        py-4
                                        pl-12
                                        pr-4
                                        text-white
                                        placeholder-gray-600
                                        outline-none
                                        transition-all
                                        focus:border-cyan-400
                                        focus:ring-2
                                        focus:ring-cyan-500/20
                                    "
                                />

                            </div>
                        </div>

                        {/* College */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                COLLEGE OR ORGANIZATION
                            </label>

                            <div className="relative">

                                <GraduationCap
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400"
                                />

                                <input
                                    type="text"
                                    name="college"
                                    value={user.college}
                                    onChange={handleChange}
                                    placeholder="Enter your college or organization"
                                    className="
                                        w-full
                                        bg-black/20
                                        border
                                        border-white/10
                                        rounded-xl
                                        py-4
                                        pl-12
                                        pr-4
                                        text-white
                                        placeholder-gray-600
                                        outline-none
                                        transition-all
                                        focus:border-purple-400
                                        focus:ring-2
                                        focus:ring-purple-500/20
                                    "
                                />

                            </div>
                        </div>

                        {/* Socials */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

                            {/* GitHub */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    GITHUB USERNAME
                                </label>

                                <input
                                    type="text"
                                    name="github"
                                    value={user.github}
                                    onChange={handleChange}
                                    placeholder="github-username"
                                    className="
                                        w-full
                                        bg-black/20
                                        border
                                        border-white/10
                                        rounded-xl
                                        py-4
                                        px-4
                                        text-white
                                        placeholder-gray-600
                                        outline-none
                                        focus:border-fuchsia-400
                                        focus:ring-2
                                        focus:ring-fuchsia-500/20
                                    "
                                />
                            </div>

                            {/* X */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    X USERNAME
                                </label>

                                <div className="relative">

                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 font-bold">
                                        𝕏
                                    </div>

                                    <input
                                        type="text"
                                        name="twitter"
                                        value={user.twitter}
                                        onChange={handleChange}
                                        placeholder="@username"
                                        className="
                                            w-full
                                            bg-black/20
                                            border
                                            border-white/10
                                            rounded-xl
                                            py-4
                                            pl-12
                                            pr-3
                                            text-white
                                            placeholder-gray-600
                                            outline-none
                                            focus:border-cyan-400
                                            focus:ring-2
                                            focus:ring-cyan-500/20
                                        "
                                    />

                                </div>
                            </div>

                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
                                w-full
                                py-4
                                rounded-xl
                                bg-gradient-to-r
                                from-fuchsia-600
                                via-purple-500
                                to-cyan-500
                                text-white
                                font-bold
                                tracking-wide
                                shadow-[0_0_30px_rgba(168,85,247,0.25)]
                                hover:scale-[1.01]
                                hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
                                transition-all
                                duration-300
                                flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >
                            <Sparkles size={18} />
                            Generate My Identity
                            <span>→</span>
                        </button>

                        {/* Security */}
                        <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-500">
                            <ShieldCheck
                                size={15}
                                className="text-fuchsia-400"
                            />
                            Your profile data stays private
                        </div>

                    </div>

                </form>

                {/* PREVIEW */}
                <div
                    className="
                        lg:col-span-2
                        rounded-3xl
                        border
                        border-cyan-500/20
                        bg-gradient-to-br
                        from-cyan-500/5
                        via-white/5
                        to-purple-500/10
                        backdrop-blur-xl
                        p-7
                        flex
                        flex-col
                    "
                >

                    <div className="text-center">

                        <div className="inline-flex items-center gap-2 text-cyan-400">
                            <Sparkles size={18} />

                            <span className="text-lg font-bold text-white">
                                Identity Preview
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm mt-2">
                            This is how your card will look.
                        </p>

                    </div>

                    {/* Preview Card */}
                    <div
                        className="
                            relative
                            flex-1
                            mt-7
                            rounded-3xl
                            border
                            border-cyan-400/30
                            bg-black/20
                            overflow-hidden
                            min-h-[420px]
                            flex
                            flex-col
                            items-center
                            justify-center
                            text-center
                            p-6
                        "
                    >

                        <div className="absolute top-4 left-4 text-fuchsia-400 text-xl">
                            ◢
                        </div>

                        <div className="absolute top-4 right-4 text-cyan-400 text-xl">
                            ◣
                        </div>

                        <div className="absolute bottom-4 left-4 text-fuchsia-400 text-xl">
                            ◥
                        </div>

                        <div className="absolute bottom-4 right-4 text-cyan-400 text-xl">
                            ◤
                        </div>

                        {/* Avatar */}
                        <div className="w-28 h-28 rounded-full border-2 border-fuchsia-400 bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center shadow-[0_0_35px_rgba(217,70,239,0.2)]">
                            <User size={48} className="text-gray-400" />
                        </div>

                        <h3 className="mt-7 text-2xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            {user.fullName?.trim() || "YOUR NAME"}
                        </h3>

                        <p className="mt-2 text-cyan-400 font-medium">
                            {user.role?.trim() || "Your Role / Stack"}
                        </p>

                        <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
                            <GraduationCap size={16} />
                            {user.college?.trim() || "Your College"}
                        </div>

                        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-7" />

                        <p className="mt-5 text-xs text-gray-600 tracking-widest uppercase">
                            #FrameInGoa
                        </p>

                    </div>

                    <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500">
                        <Sparkles size={15} className="text-cyan-400" />
                        Preview updates as you type
                    </div>

                </div>

            </div>
        </div>
    );
}

export default DetailsForm;