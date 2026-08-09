import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    UploadCloud,
    Camera,
    ShieldCheck,
    Image as ImageIcon,
    } from "lucide-react";

    function UploadBox({ onFileSelect, selectedFile }) {
    const fileInputRef = useRef(null);
    const videoRef = useRef(null);

    const [cameraOpen, setCameraOpen] = useState(false);
    const [cameraStream, setCameraStream] = useState(null);

    // =========================================
    // HANDLE FILE
    // =========================================
    const handleFile = (file) => {
        if (!file) return;

        const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/heic",
        "image/heif",
        ];

        if (!allowedTypes.includes(file.type)) {
        alert("Please upload JPG, PNG or HEIC image.");
        return;
        }

        if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB.");
        return;
        }

        onFileSelect(file);
    };

    // =========================================
    // FILE INPUT
    // =========================================
    const handleInputChange = (e) => {
        handleFile(e.target.files[0]);

        // Allows selecting the same image again
        e.target.value = "";
    };

    // =========================================
    // DRAG & DROP
    // =========================================
    const handleDrop = (e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files[0]);
    };

    // =========================================
    // OPEN REAL CAMERA
    // =========================================
    const openCamera = async () => {
        try {
        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {
            alert("Camera is not supported by this browser.");
            return;
        }

        const stream =
            await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "user",
            },
            audio: false,
            });

        setCameraStream(stream);
        setCameraOpen(true);
        } catch (error) {
        console.error("Camera error:", error);

        if (error.name === "NotAllowedError") {
            alert(
            "Camera permission was denied. Please allow camera access in your browser."
            );
        } else if (error.name === "NotFoundError") {
            alert("No camera was found on this device.");
        } else if (error.name === "NotReadableError") {
            alert(
            "Your camera is already being used by another application."
            );
        } else {
            alert("Unable to access the camera.");
        }
        }
    };

    // =========================================
    // CONNECT CAMERA STREAM TO VIDEO
    // =========================================
    useEffect(() => {
        if (
        cameraOpen &&
        cameraStream &&
        videoRef.current
        ) {
        videoRef.current.srcObject = cameraStream;

        videoRef.current
            .play()
            .catch((error) => {
            console.error("Video play error:", error);
            });
        }
    }, [cameraOpen, cameraStream]);

    // =========================================
    // TAKE PHOTO
    // =========================================
    const takePhoto = () => {
        const video = videoRef.current;

        if (!video) {
        alert("Camera is not ready.");
        return;
        }

        if (
        video.videoWidth === 0 ||
        video.videoHeight === 0
        ) {
        alert("Camera is still loading. Please wait a moment.");
        return;
        }

        const canvas = document.createElement("canvas");

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
        alert("Could not capture photo.");
        return;
        }

        // Mirror selfie camera
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);

        ctx.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
        );

        canvas.toBlob(
        (blob) => {
            if (!blob) {
            alert("Could not capture photo.");
            return;
            }

            const file = new File(
            [blob],
            "camera-photo.jpg",
            {
                type: "image/jpeg",
            }
            );

            handleFile(file);

            closeCamera();
        },
        "image/jpeg",
        0.95
        );
    };

    // =========================================
    // CLOSE CAMERA
    // =========================================
    const closeCamera = () => {
        if (cameraStream) {
        cameraStream.getTracks().forEach((track) => {
            track.stop();
        });
        }

        if (videoRef.current) {
        videoRef.current.srcObject = null;
        }

        setCameraStream(null);
        setCameraOpen(false);
    };

    // =========================================
    // CAMERA CLEANUP
    // =========================================
    useEffect(() => {
        return () => {
        if (cameraStream) {
            cameraStream.getTracks().forEach((track) => {
            track.stop();
            });
        }
        };
    }, [cameraStream]);

    // =========================================
    // CLOSE CAMERA WITH ESC
    // =========================================
    useEffect(() => {
        const handleEscape = (event) => {
        if (event.key === "Escape" && cameraOpen) {
            closeCamera();
        }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
        window.removeEventListener(
            "keydown",
            handleEscape
        );
        };
    }, [cameraOpen, cameraStream]);

    return (
        <div className="w-full">

        {/* =========================================
            MAIN UPLOAD CARD
        ========================================= */}

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-[#101321]/80
            backdrop-blur-xl
            p-5
            sm:p-7
            shadow-2xl
            "
        >

            {/* PURPLE GLOW */}

            <div
            className="
                absolute
                -top-32
                -left-32
                w-72
                h-72
                bg-fuchsia-600/10
                blur-[100px]
                rounded-full
                pointer-events-none
            "
            />

            {/* CYAN GLOW */}

            <div
            className="
                absolute
                -bottom-32
                -right-32
                w-72
                h-72
                bg-cyan-500/10
                blur-[100px]
                rounded-full
                pointer-events-none
            "
            />

            {/* =========================================
                SECURE BADGE
            ========================================= */}

            <div className="relative flex justify-end mb-4">

            <div
                className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/[0.04]
                border
                border-white/10
                text-gray-300
                text-xs
                font-medium
                "
            >
                <ShieldCheck
                size={15}
                className="text-cyan-400"
                />

                Secure & Private
            </div>

            </div>

            {/* =========================================
                DRAG & DROP AREA
            ========================================= */}

            <motion.div
            whileHover={{ scale: 1.005 }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() =>
                fileInputRef.current?.click()
            }
            className="
                relative
                min-h-[300px]
                sm:min-h-[340px]
                rounded-[22px]
                border
                border-dashed
                border-fuchsia-500/70
                bg-[#0b0f1d]/70
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-white/[0.025]
                group
            "
            >

            {/* Inner Glow */}

            <div
                className="
                absolute
                inset-0
                rounded-[22px]
                opacity-0
                group-hover:opacity-100
                transition-opacity
                pointer-events-none
                shadow-[inset_0_0_40px_rgba(217,70,239,0.08)]
                "
            />

            {/* Upload Icon */}

            <motion.div
                whileHover={{ y: -5 }}
                className="
                relative
                w-20
                h-20
                rounded-full
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-fuchsia-500/20
                to-cyan-500/20
                border
                border-white/10
                mb-7
                "
            >

                <UploadCloud
                size={38}
                strokeWidth={1.7}
                className="
                    text-fuchsia-400
                    group-hover:text-cyan-400
                    transition-colors
                "
                />

                <div
                className="
                    absolute
                    inset-0
                    rounded-full
                    bg-fuchsia-500/10
                    blur-xl
                    -z-10
                "
                />

            </motion.div>

            {/* Drop Text */}

            <h3 className="text-xl sm:text-2xl font-bold text-white text-center">

                <span className="text-fuchsia-400">
                Drag & Drop
                </span>{" "}

                your photo here

            </h3>

            <p className="mt-2 text-sm text-gray-400">
                or click to browse
            </p>

            {/* File Types */}

            <div
                className="
                flex
                items-center
                gap-3
                mt-5
                text-xs
                text-gray-500
                "
            >
                <span>JPG</span>
                <span>•</span>
                <span>PNG</span>
                <span>•</span>
                <span>HEIC</span>
                <span>•</span>
                <span>Max 10MB</span>
            </div>

            {/* Normal File Input */}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/heic,image/heif"
                onChange={handleInputChange}
                className="hidden"
            />

            </motion.div>

            {/* =========================================
                SELECTED FILE
            ========================================= */}

            {selectedFile && (
            <motion.div
                initial={{
                opacity: 0,
                y: 10,
                }}
                animate={{
                opacity: 1,
                y: 0,
                }}
                className="
                mt-4
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                bg-cyan-500/5
                border
                border-cyan-500/20
                "
            >

                <ImageIcon
                size={18}
                className="text-cyan-400 shrink-0"
                />

                <p className="text-sm text-gray-300 truncate">
                {selectedFile.name}
                </p>

            </motion.div>
            )}

            {/* =========================================
                REAL CAMERA BUTTON
            ========================================= */}

            <button
            type="button"
            onClick={openCamera}
            className="
                w-full
                mt-5
                h-14
                rounded-xl
                border
                border-white/10
                bg-white/[0.02]
                hover:bg-white/[0.05]
                hover:border-fuchsia-500/40
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                transition-all
            "
            >

            <Camera size={19} />

            Use Camera

            </button>

            {/* =========================================
                AI FACE DETECTION
            ========================================= */}

            <div
            className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                text-xs
                sm:text-sm
                text-gray-400
                text-center
            "
            >

            <span className="text-fuchsia-400">
                ✦
            </span>

            <span>
                Face auto-detection is enabled for
            </span>

            <span className="text-fuchsia-400 font-medium">
                Builder Cards
            </span>

            <span>
                and
            </span>

            <span className="text-cyan-400 font-medium">
                PFP Frames
            </span>

            </div>

        </motion.div>


        {/* =========================================
            CAMERA MODAL
        ========================================= */}

        {cameraOpen && (
            <div
            className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                bg-black/80
                backdrop-blur-md
                p-5
            "
            >

            <div
                className="
                w-full
                max-w-lg
                rounded-3xl
                border
                border-white/10
                bg-[#101321]
                p-5
                shadow-2xl
                "
            >

                {/* CAMERA HEADER */}

                <div className="flex items-center justify-between mb-4">

                <div>
                    <h2 className="text-xl font-bold text-white">
                    Take Your Photo
                    </h2>

                    <p className="text-sm text-gray-400 mt-1">
                    Position your face inside the frame
                    </p>
                </div>

                <button
                    type="button"
                    onClick={closeCamera}
                    className="
                    w-9
                    h-9
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-gray-300
                    hover:bg-white/10
                    transition
                    "
                >
                    ✕
                </button>

                </div>


                {/* =========================================
                    CAMERA PREVIEW
                ========================================= */}

                <div
                className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-fuchsia-500/40
                    bg-black
                    aspect-[4/3]
                "
                >

                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="
                    w-full
                    h-full
                    object-cover
                    scale-x-[-1]
                    "
                />

                {/* Face Guide */}

                <div
                    className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    pointer-events-none
                    "
                >

                    <div
                    className="
                        w-52
                        h-64
                        rounded-[50%]
                        border-2
                        border-cyan-400/70
                        shadow-[0_0_30px_rgba(34,211,238,0.25)]
                    "
                    />

                </div>

                {/* Camera Status */}

                <div
                    className="
                    absolute
                    bottom-4
                    left-1/2
                    -translate-x-1/2
                    px-4
                    py-2
                    rounded-full
                    bg-black/50
                    backdrop-blur-md
                    border
                    border-white/10
                    text-xs
                    text-white
                    "
                >
                    Camera is active
                </div>

                </div>


                {/* =========================================
                    CAMERA BUTTONS
                ========================================= */}

                <div className="flex gap-3 mt-5">

                <button
                    type="button"
                    onClick={closeCamera}
                    className="
                    flex-1
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-gray-300
                    font-semibold
                    hover:bg-white/10
                    transition
                    "
                >
                    Cancel
                </button>

                <button
                    type="button"
                    onClick={takePhoto}
                    className="
                    flex-1
                    h-12
                    rounded-xl
                    bg-gradient-to-r
                    from-fuchsia-500
                    to-cyan-400
                    text-white
                    font-bold
                    hover:scale-[1.02]
                    transition
                    flex
                    items-center
                    justify-center
                    gap-2
                    "
                >

                    <Camera size={18} />

                    Take Photo

                </button>

                </div>

            </div>

            </div>
        )}

        </div>
    );
}

export default UploadBox;