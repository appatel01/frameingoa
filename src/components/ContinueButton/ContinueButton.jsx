import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function ContinueButton() {
    const { photo } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <button
        disabled={!photo}
        onClick={() => navigate("/details")}
        className={`
            mt-8
            w-full
            py-4
            rounded-2xl
            font-bold
            flex
            justify-center
            items-center
            gap-2
            transition-all
            ${
            photo
                ? "bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }
        `}
        >
        Continue
        <ArrowRight size={18} />
        </button>
    );
}

export default ContinueButton;