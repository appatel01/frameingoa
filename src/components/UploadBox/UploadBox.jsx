import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, Camera } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function UploadBox() {
    const [image, setImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        setPhoto(imageUrl);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/heic": [],
        "image/heif": [],
        },
        multiple: false,
    });

    return (
        <div className="bg-[#121722] rounded-3xl border border-[#2A3140] p-8 w-full max-w-xl">

        <h2 className="text-4xl text-white font-bold text-center">
            Upload Your Photo
        </h2>

        <p className="text-center text-gray-400 mt-3">
            Choose a clear portrait. Bright tropical lighting works best!
        </p>

        {/* Upload Area */}

        <div
            {...getRootProps()}
            className={`mt-8 border-2 border-dashed rounded-3xl p-10 flex flex-col items-center cursor-pointer transition-all duration-300
            ${
            isDragActive
                ? "border-fuchsia-500 bg-fuchsia-500/10"
                : "border-cyan-500"
            }`}
        >
            <input {...getInputProps()} />

            {image ? (
            <>
                <img
                src={image}
                alt="Preview"
                className="w-52 h-52 object-cover rounded-2xl"
                />

                <p className="mt-5 text-green-400">
                Image selected successfully
                </p>

                <button
                className="mt-5 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white"
                >
                Continue →
                </button>
            </>
            ) : (
            <>
                <div className="bg-[#072D3B] w-16 h-16 rounded-full flex items-center justify-center">
                <UploadCloud size={30} className="text-cyan-400" />
                </div>

                <h3 className="mt-6 text-white text-xl font-semibold">
                {isDragActive
                    ? "Drop your image here"
                    : "Drag & Drop your photo here"}
                </h3>

                <p className="text-gray-400 mt-2">
                or click to browse
                </p>

                <div className="flex gap-3 mt-5 text-sm text-gray-500 flex-wrap justify-center">
                <span>JPG</span>
                <span>PNG</span>
                <span>HEIC</span>
                <span>Max 10MB</span>
                </div>
            </>
            )}
        </div>

        {/* Camera Button */}

        <button
            className="w-full mt-6 border border-gray-700 rounded-xl py-3 flex items-center justify-center gap-2 text-white hover:border-cyan-400 transition"
        >
            <Camera size={18} />
            Use Camera
        </button>

        {/* Info */}

        <div className="mt-6 flex items-center gap-2 text-sm text-purple-400">
            ✨ Face auto-detection is enabled for Builder Cards and PFP Frames.
        </div>

        </div>
    );
}

export default UploadBox;