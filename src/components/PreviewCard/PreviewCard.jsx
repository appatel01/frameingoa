import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function PreviewCard() {
        const { photo } = useContext(AppContext);

        if (!photo) return null;

        return (
            <div className="mt-8 flex justify-center">
            <img
                src={photo}
                alt="Preview"
                className="
                w-72
                h-72
                rounded-3xl
                object-cover
                border-2
                border-cyan-500
                shadow-lg
                "
            />
            </div>
        );
}

export default PreviewCard;