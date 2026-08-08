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

        console.log("Button Clicked");
        console.log(user);
        console.log("USER SAVED:", user);
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
            p-10
            backdrop-blur-xl
        "
        >
        <h1 className="text-4xl font-bold text-white text-center">
            Hacker Profile
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
            Tell us what you build.
        </p>

        <InputField
            label="Full Name"
            name="fullName"
            placeholder="Anushka Patel"
            value={user.fullName}
            onChange={handleChange}
        />

        <InputField
            label="Primary Role / Stack"
            name="role"
            placeholder="Full Stack Developer"
            value={user.role}
            onChange={handleChange}
        />

        <InputField
            label="College"
            name="college"
            placeholder="Ramdeobaba University"
            value={user.college}
            onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-5">
            <SocialInput
            label="GitHub"
            name="github"
            placeholder="github username"
            value={user.github}
            onChange={handleChange}
            />

            <SocialInput
            label="X (Twitter)"
            name="twitter"
            placeholder="@username"
            value={user.twitter}
            onChange={handleChange}
            />
        </div>

        <div className="mt-8">
            <Button
            type="submit"
            className="w-full py-4 rounded-xl bg-purple-600 text-white"
            >
            Generate Identity
            </Button>
        </div>
        </form>
    );
}

export default DetailsForm;