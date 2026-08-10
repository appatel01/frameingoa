import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import UploadBox from "../components/UploadBox/UploadBox";

function Upload() {
    const { photo, setPhoto } = useContext(AppContext);
    const navigate = useNavigate();

    const handleFileSelect = (file) => {
        if (!file) return;

        setPhoto(file);
    };

    const handleContinue = () => {
        if (!photo) {
            alert("Please upload a photo first.");
            return;
        }

        navigate("/details");
    };

    const handleViewFeatures = () => {
        document
            .getElementById("upload-features")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <div className="upload-page">

            {/* =====================================
                GOA BACKGROUND
            ===================================== */}

            <div className="upload-page-background">
                <img
                    src="/goa-hero.png"
                    alt="Goa beach"
                />
            </div>

            {/* Background overlay */}
            <div className="upload-page-overlay" />


            {/* =====================================
                NAVBAR
            ===================================== */}

            <div className="relative z-50">
                <Navbar />
            </div>


            {/* =====================================
                MAIN
            ===================================== */}

            <main className="upload-main">

                {/* =================================
                    PROGRESS
                ================================= */}

                <ProgressBar
                    step={1}
                    title="Upload Headshot"
                />


                {/* =================================
                    HEADING
                ================================= */}

                <div className="upload-heading-wrapper">

                    <h1 className="upload-main-title">
                        UPLOAD YOUR PHOTO
                    </h1>

                    <p className="upload-main-subtitle">
                        Choose a clear portrait. Bright lighting works best!
                    </p>

                </div>


                {/* =================================
                    UPLOAD BOX
                ================================= */}

                <div className="upload-box-wrapper">

                    <UploadBox
                        onFileSelect={handleFileSelect}
                        selectedFile={photo}
                    />

                </div>


                {/* =================================
                    BUTTONS
                ================================= */}

                <div className="upload-bottom-actions">

                    {/* Upload / Continue */}
                    <button
                        type="button"
                        onClick={handleContinue}
                        className="upload-primary-button"
                    >
                        {photo ? "CONTINUE →" : "UPLOAD PHOTO"}
                    </button>


                    {/* View Features */}
                    <button
                        type="button"
                        onClick={handleViewFeatures}
                        className="upload-secondary-button"
                    >
                        VIEW FEATURES
                        <span>→</span>
                    </button>

                </div>


                {/* =================================
                    BOTTOM SPACE
                ================================= */}

                <div
                    id="upload-features"
                    className="upload-bottom-space"
                />

            </main>

        </div>
    );
}

export default Upload;