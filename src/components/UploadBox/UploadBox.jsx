import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

import { AppContext } from "../../context/AppContext";
import CameraButton from "../CameraButton/CameraButton";

function UploadBox() {
    const { setPhoto } = useContext(AppContext);
    const [error, setError] = useState("");

    const onDrop = useCallback(
        (acceptedFiles) => {
        setError("");

        const file = acceptedFiles[0];

        if (!file) {
            setError("Please select a valid image file.");
            return;
        }

        // 10 MB limit
        const maxSize = 10 * 1024 * 1024;

        if (file.size > maxSize) {
            setError("File is too large. Please upload an image under 10 MB.");
            return;
        }

        // Allowed file types
        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/heic",
        ];

        if (!allowedTypes.includes(file.type)) {
            setError("Only JPG, JPEG, PNG and HEIC images are allowed.");
            return;
        }

        console.log("Uploaded file:", file);

        const imageUrl = URL.createObjectURL(file);

        setPhoto(imageUrl);
        },
        [setPhoto]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
        "image/heic": [".heic"],
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
            className={`
            mt-8
            border-2
            border-dashed
            rounded-3xl
            py-20
            flex
            flex-col
            items-center
            cursor-pointer
            transition
            ${
                isDragActive
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-cyan-500 hover:bg-cyan-500/5"
            }
            `}
        >
            <input {...getInputProps()} />

            <div className="bg-[#072D3B] w-16 h-16 rounded-full flex items-center justify-center">
            <UploadCloud size={32} className="text-cyan-400" />
            </div>

            <h3 className="mt-6 text-white text-xl font-semibold text-center">
            {isDragActive
                ? "Drop your photo here"
                : "Drag & Drop your photo here"}
            </h3>

            <p className="text-gray-400 mt-2">
            or click to browse
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-5 text-sm text-gray-500">
            <span>JPG</span>
            <span>PNG</span>
            <span>HEIC</span>
            <span>Max 10MB</span>
            </div>
        </div>

        {/* Error Message */}
        {error && (
            <div className="mt-4 px-4 py-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-sm text-center">
            {error}
            </div>
        )}

        <CameraButton />

        <div className="mt-6 flex items-center gap-2 text-sm text-purple-400">
            ✨ Face auto-detection is enabled for Builder Cards and PFP Frames.
        </div>

        </div>
    );
}

export default UploadBox;