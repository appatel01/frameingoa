import { Camera } from "lucide-react";

function CameraButton() {
    return (
        <button
        className="
            mt-6
            w-full
            py-3
            rounded-xl
            border
            border-gray-700
            text-white
            flex
            justify-center
            items-center
            gap-2
            hover:border-cyan-400
            transition-all
            duration-300
            "
        >
        <Camera size={20} />
        Use Camera
        </button>
    );
}
export default CameraButton;