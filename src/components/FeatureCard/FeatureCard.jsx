import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

import InputField from "../InputField/InputField";
import SocialInput from "../SocialInput/SocialInput";
import Button from "../Button/Button";

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

        if (
        !user.fullName.trim() ||
        !user.role.trim() ||
        !user.college.trim()
        ) {
        alert("Please fill all required fields.");
        return;
        }

        navigate("/processing");
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="
            w-full
            bg-white/5
            border
            border-white/10
            rounded-3xl
            px-12
            py-10
            backdrop-blur-xl
            shadow-2xl
        "
        >
        {/* Step */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
            STEP 2 OF 4 • Builder Information
        </p>

        {/* Title */}
        <h1 className="mt-4 text-5xl font-bold text-white text-center">
            Hacker Profile
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 mt-3 mb-10 leading-relaxed">
            Tell us what you build. We'll generate a personalized power tier.
        </p>

        <div className="space-y-6">
            <InputField
            label="FULL NAME"
            name="fullName"
            placeholder="Anushka Patel"
            value={user.fullName}
            onChange={handleChange}
            />

            <InputField
            label="PRIMARY ROLE / STACK"
            name="role"
            placeholder="Full Stack Developer"
            value={user.role}
            onChange={handleChange}
            />

            <InputField
            label="COLLEGE OR ORGANIZATION"
            name="college"
            placeholder="Ramdeobaba University"
            value={user.college}
            onChange={handleChange}
            />
        </div>

        <div className="grid grid-cols-2 gap-5 mt-6">
            <SocialInput
            label="GITHUB"
            name="github"
            placeholder="anushka-patel"
            value={user.github}
            onChange={handleChange}
            />

            <SocialInput
            label="X (TWITTER)"
            name="twitter"
            placeholder="@anushka_codes"
            value={user.twitter}
            onChange={handleChange}
            />
        </div>

        <div className="mt-10">
            <Button fullWidth>
            Generate Identity
            </Button>
        </div>
        </form>
    );
}

export default DetailsForm;