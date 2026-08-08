import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import CameraButton from "../CameraButton/CameraButton";

function UploadBox() {
    const { setPhoto } = useContext(AppContext);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        console.log("Selected file:", file);

        if (!file) return;

        // Check file size - max 10MB
        if (file.size > 10 * 1024 * 1024) {
            alert("File size must be less than 10MB.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            console.log("Image converted successfully");

            setPhoto(reader.result);
        };

        reader.onerror = () => {
            console.error("Failed to read image");
            alert("Unable to read the image.");
        };

        reader.readAsDataURL(file);
        }, [setPhoto]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop, // <-- THIS WAS MISSING
        accept: {
            "image/*": [".jpg", ".jpeg", ".png", ".heic"],
        },
        multiple: false,
    });

    return (
        <div className="bg-white/5 rounded-3xl p-8 border border-white/10">

        <h2 className="text-4xl text-white font-bold text-center">
            Upload Your Photo
        </h2>

        <p className="text-center text-gray-400 mt-3">
            Choose a clear portrait. Bright tropical lighting works best!
        </p>

        <div
            {...getRootProps()}
            className="mt-8 border-2 border-dashed border-cyan-500 rounded-3xl py-20 flex flex-col items-center cursor-pointer hover:bg-cyan-500/5 transition"
        >
            <input {...getInputProps()} />

            <div className="bg-[#072D3B] w-16 h-16 rounded-full flex items-center justify-center">
            <UploadCloud size={32} className="text-cyan-400" />
            </div>

            <h3 className="mt-6 text-white text-xl font-semibold">
            Drag & Drop your photo here
            </h3>

            <p className="text-gray-400 mt-2">
            or click to browse
            </p>

            <div className="flex gap-3 mt-5 text-sm text-gray-500">
            <span>JPG</span>
            <span>PNG</span>
            <span>HEIC</span>
            <span>Max 10MB</span>
            </div>
        </div>

        <CameraButton />

        <div className="mt-6 flex items-center gap-2 text-sm text-purple-400">
            ✨ Face auto-detection is enabled for Builder Cards and PFP Frames.
        </div>

        </div>
    );
}

export default UploadBox;