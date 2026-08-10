import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
    UploadCloud,
    Camera,
    ShieldCheck,
    Image as ImageIcon,
} from "lucide-react";


// =========================================
// SUN MEDALLION
// =========================================

function SunMedallion({ className = "" }) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>

                <radialGradient
                    id="sunFace"
                    cx="40%"
                    cy="35%"
                    r="70%"
                >
                    <stop
                        offset="0%"
                        stopColor="#ffe6a1"
                    />

                    <stop
                        offset="55%"
                        stopColor="#e0b85c"
                    />

                    <stop
                        offset="100%"
                        stopColor="#a97a2e"
                    />
                </radialGradient>


                <linearGradient
                    id="sunRay"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        stopColor="#f5d98c"
                    />

                    <stop
                        offset="100%"
                        stopColor="#c8963f"
                    />
                </linearGradient>

            </defs>


            {/* =================================
                SUN RAYS
            ================================= */}

            <g
                fill="url(#sunRay)"
                stroke="#7a5220"
                strokeWidth="0.6"
            >
                {[...Array(12)].map((_, i) => (
                    <path
                        key={i}
                        d="M50 4 L55 20 L45 20 Z"
                        transform={`rotate(${i * 30} 50 50)`}
                    />
                ))}
            </g>


            {/* =================================
                SUN FACE
            ================================= */}

            <circle
                cx="50"
                cy="50"
                r="26"
                fill="url(#sunFace)"
                stroke="#7a5220"
                strokeWidth="1.5"
            />


            {/* =================================
                CARVED FACE
            ================================= */}

            <g fill="#5c3d16">

                {/* Left eye */}
                <ellipse
                    cx="41"
                    cy="46"
                    rx="2.6"
                    ry="3.4"
                />

                {/* Right eye */}
                <ellipse
                    cx="59"
                    cy="46"
                    rx="2.6"
                    ry="3.4"
                />

                {/* Smile */}
                <path
                    d="M46 58 Q50 63 54 58"
                    stroke="#5c3d16"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Nose */}
                <path
                    d="M50 48 L48 54 L52 54Z"
                    opacity="0.7"
                />

            </g>

        </svg>
    );
}


// =========================================
// UPLOAD BOX
// =========================================

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


        // File type validation
        if (!allowedTypes.includes(file.type)) {

            alert(
                "Please upload JPG, PNG or HEIC image."
            );

            return;
        }


        // File size validation
        if (file.size > 10 * 1024 * 1024) {

            alert(
                "File size must be less than 10MB."
            );

            return;
        }


        // Send file to parent
        onFileSelect(file);
    };


    // =========================================
    // FILE INPUT
    // =========================================

    const handleInputChange = (e) => {

        const file = e.target.files[0];

        handleFile(file);


        // Allow selecting same image again
        e.target.value = "";
    };


    // =========================================
    // DRAG & DROP
    // =========================================

    const handleDrop = (e) => {

        e.preventDefault();

        const file =
            e.dataTransfer.files[0];

        handleFile(file);
    };


    // =========================================
    // OPEN CAMERA
    // =========================================

    const openCamera = async () => {

        try {

            if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices.getUserMedia
            ) {

                alert(
                    "Camera is not supported by this browser."
                );

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

            console.error(
                "Camera error:",
                error
            );


            if (
                error.name === "NotAllowedError"
            ) {

                alert(
                    "Camera permission was denied. Please allow camera access."
                );

            } else if (
                error.name === "NotFoundError"
            ) {

                alert(
                    "No camera was found on this device."
                );

            } else if (
                error.name === "NotReadableError"
            ) {

                alert(
                    "Your camera is already being used by another application."
                );

            } else {

                alert(
                    "Unable to access the camera."
                );
            }
        }
    };


    // =========================================
    // CONNECT CAMERA STREAM
    // =========================================

    useEffect(() => {

        if (
            cameraOpen &&
            cameraStream &&
            videoRef.current
        ) {

            videoRef.current.srcObject =
                cameraStream;


            videoRef.current
                .play()
                .catch((error) => {

                    console.error(
                        "Video play error:",
                        error
                    );

                });
        }

    }, [
        cameraOpen,
        cameraStream,
    ]);


    // =========================================
    // TAKE PHOTO
    // =========================================

    const takePhoto = () => {

        const video =
            videoRef.current;


        if (!video) {

            alert(
                "Camera is not ready."
            );

            return;
        }


        if (
            video.videoWidth === 0 ||
            video.videoHeight === 0
        ) {

            alert(
                "Camera is still loading. Please wait a moment."
            );

            return;
        }


        // Create canvas
        const canvas =
            document.createElement("canvas");


        canvas.width =
            video.videoWidth;

        canvas.height =
            video.videoHeight;


        const ctx =
            canvas.getContext("2d");


        if (!ctx) {

            alert(
                "Could not capture photo."
            );

            return;
        }


        // Mirror selfie
        ctx.translate(
            canvas.width,
            0
        );

        ctx.scale(
            -1,
            1
        );


        // Draw video frame
        ctx.drawImage(
            video,
            0,
            0,
            canvas.width,
            canvas.height
        );


        // Convert canvas to image
        canvas.toBlob(

            (blob) => {

                if (!blob) {

                    alert(
                        "Could not capture photo."
                    );

                    return;
                }


                const file =
                    new File(
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

            cameraStream
                .getTracks()
                .forEach((track) => {

                    track.stop();

                });
        }


        if (videoRef.current) {

            videoRef.current.srcObject =
                null;
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

                cameraStream
                    .getTracks()
                    .forEach((track) => {

                        track.stop();

                    });
            }
        };

    }, [cameraStream]);


    // =========================================
    // ESCAPE KEY
    // =========================================

    useEffect(() => {

        const handleEscape = (event) => {

            if (
                event.key === "Escape" &&
                cameraOpen
            ) {

                closeCamera();
            }
        };


        window.addEventListener(
            "keydown",
            handleEscape
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };

    }, [
        cameraOpen,
        cameraStream,
    ]);


    // =========================================
    // RENDER
    // =========================================

    return (

        <div className="upload-box-container">


            {/* =====================================
                CAMERA CARD
            ===================================== */}

            <motion.div

                initial={{
                    opacity: 0,
                    y: 25,
                    scale: 0.96,
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}

                transition={{
                    duration: 0.6,
                }}

                className="goa-camera-card"
            >


                {/* =================================
                    SUN MEDALLION LEFT
                ================================= */}

                <SunMedallion
                    className="
                        sun-medallion
                        sun-medallion-left
                    "
                />


                {/* =================================
                    SUN MEDALLION RIGHT
                ================================= */}

                <SunMedallion
                    className="
                        sun-medallion
                        sun-medallion-right
                    "
                />


                {/* =================================
                    CAMERA HEADER
                ================================= */}

                <div className="camera-header">

                    <span className="camera-label">
                        PHOTO BOOTH
                    </span>


                    <span className="camera-secure">

                        <ShieldCheck
                            size={11}
                        />

                        Secure & Private

                    </span>

                </div>


                {/* =================================
                    CAMERA LENS
                ================================= */}

                <div className="camera-lens">

                    <div className="camera-lens-inner">

                        <div
                            className="
                                camera-lens-shine
                            "
                        />

                    </div>

                </div>


                {/* =================================
                    UPLOAD AREA
                ================================= */}

                <motion.div

                    whileHover={{
                        scale: 1.01,
                    }}

                    onDragOver={(e) =>
                        e.preventDefault()
                    }

                    onDrop={handleDrop}

                    onClick={() =>
                        fileInputRef.current?.click()
                    }

                    className="goa-upload-area"
                >


                    {/* =================================
                        SELECTED IMAGE
                    ================================= */}

                    {selectedFile ? (

                        <img
                            src={URL.createObjectURL(
                                selectedFile
                            )}
                            alt="Selected"
                            className="goa-selected-image"
                        />

                    ) : (

                        <>

                            {/* Upload Icon */}

                            <UploadCloud
                                size={38}
                                strokeWidth={1.5}
                                className="
                                    upload-cloud-icon
                                "
                            />


                            {/* Main text */}

                            <h3>
                                Drag & Drop your photo here
                            </h3>


                            {/* Browse text */}

                            <p>
                                or click to browse
                            </p>


                            {/* File information */}

                            <span>
                                JPG • PNG • HEIC • Max 10MB
                            </span>

                        </>

                    )}


                    {/* =================================
                        HIDDEN FILE INPUT
                    ================================= */}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="
                            image/jpeg,
                            image/png,
                            image/heic,
                            image/heif
                        "
                        onChange={handleInputChange}
                        hidden
                    />

                </motion.div>


                {/* =================================
                    CAMERA FOOTER
                ================================= */}

                <div className="camera-footer">


                    {/* Use Camera */}

                    <button
                        type="button"
                        onClick={openCamera}
                        className="camera-use-button"
                    >

                        <Camera
                            size={13}
                        />

                        Use Camera

                    </button>


                    {/* Secure */}

                    <span className="camera-private">

                        <ShieldCheck
                            size={10}
                        />

                        Secure & Private

                    </span>

                </div>

            </motion.div>


            {/* =====================================
                SELECTED FILE INFO
            ===================================== */}

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

                    className="selected-file-info"
                >

                    <ImageIcon
                        size={16}
                    />


                    <span>
                        {selectedFile.name}
                    </span>

                </motion.div>

            )}


            {/* =====================================
                FACE DETECTION
            ===================================== */}

            <div className="face-detection">

                <span>
                    ✦
                </span>


                Face auto-detection is enabled for{" "}


                <strong>
                    Builder Cards
                </strong>


                {" "}and{" "}


                <strong>
                    PFP Frames
                </strong>

            </div>


            {/* =====================================
                CAMERA MODAL
            ===================================== */}

            {cameraOpen && (

                <div className="camera-modal">


                    <div className="camera-modal-content">


                        {/* =================================
                            MODAL HEADER
                        ================================= */}

                        <div className="camera-modal-header">

                            <div>

                                <h2>
                                    Take Your Photo
                                </h2>


                                <p>
                                    Position your face inside the frame
                                </p>

                            </div>


                            <button

                                type="button"

                                onClick={
                                    closeCamera
                                }

                                className="camera-close"
                            >

                                ✕

                            </button>

                        </div>


                        {/* =================================
                            CAMERA PREVIEW
                        ================================= */}

                        <div className="camera-preview">


                            <video

                                ref={videoRef}

                                autoPlay

                                playsInline

                                muted

                            />


                            {/* Face guide */}

                            <div
                                className="
                                    face-guide
                                "
                            />


                            {/* Camera status */}

                            <div
                                className="
                                    camera-status
                                "
                            >
                                Camera is active
                            </div>

                        </div>


                        {/* =================================
                            CAMERA BUTTONS
                        ================================= */}

                        <div className="camera-modal-buttons">


                            {/* Cancel */}

                            <button

                                type="button"

                                onClick={
                                    closeCamera
                                }

                                className="
                                    camera-cancel
                                "
                            >
                                Cancel
                            </button>


                            {/* Take Photo */}

                            <button

                                type="button"

                                onClick={
                                    takePhoto
                                }

                                className="
                                    camera-capture
                                "
                            >

                                <Camera
                                    size={17}
                                />

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