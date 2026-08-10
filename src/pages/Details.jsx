import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    User,
    Code2,
    GraduationCap,
    Sparkles,
    ShieldCheck,
    X,
    Glasses,
    Sun,
    Camera,
} from "lucide-react";

import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar/Navbar";


function Details() {

    const navigate = useNavigate();

    const { photo } = useContext(AppContext);

    const [formData, setFormData] = useState({
        fullName: "",
        role: "",
        college: "",
        github: "",
        twitter: "",
    });


    // =========================================
    // HANDLE INPUT
    // =========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    // =========================================
    // GENERATE IDENTITY
    // =========================================

    const handleGenerate = () => {

        if (!formData.fullName.trim()) {
            alert("Please enter your full name.");
            return;
        }

        if (!formData.role.trim()) {
            alert("Please enter your role / stack.");
            return;
        }

        if (!formData.college.trim()) {
            alert("Please enter your college or organization.");
            return;
        }

        navigate("/processing", {
            state: {
                formData,
                photo,
            },
        });
    };


    return (

        <div className="details-page">


            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="details-background">

                <img
                    src="/goa-night.png"
                    alt="Goa beach night"
                />

            </div>


            <div className="details-background-overlay" />


            {/* =========================================
                NAVBAR
            ========================================= */}

            <div className="details-navbar">

                <Navbar />

            </div>


            {/* =========================================
                PAGE CONTENT
            ========================================= */}

            <main className="details-main">


                {/* =====================================
                    PROGRESS
                ===================================== */}

                <div className="details-progress">


                    <div className="progress-step completed">

                        <div className="progress-circle">
                            ✓
                        </div>

                        <span>
                            UPLOAD
                        </span>

                    </div>


                    <div className="progress-line completed-line" />


                    <div className="progress-step active">

                        <div className="progress-circle">
                            2
                        </div>

                        <span>
                            PROFILE
                        </span>

                    </div>


                    <div className="progress-line" />


                    <div className="progress-step">

                        <div className="progress-circle">
                            3
                        </div>

                        <span>
                            GENERATE
                        </span>

                    </div>


                    <div className="progress-line" />


                    <div className="progress-step">

                        <div className="progress-circle">
                            4
                        </div>

                        <span>
                            DOWNLOAD
                        </span>

                    </div>

                </div>


                {/* =====================================
                    STEP LABEL
                ===================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="details-step-label"
                >

                    <span>
                        🌴
                    </span>

                    STEP 2 OF 4 • BUILDER INFORMATION

                    <span>
                        🌴
                    </span>

                </motion.div>


                {/* =====================================
                    TITLE
                ===================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.1,
                    }}
                    className="details-heading"
                >

                    <h1>

                        CREATE YOUR{" "}

                        <span>
                            BUILDER IDENTITY
                        </span>

                    </h1>

                    <p>
                        Tell us who you are and what you build.
                    </p>

                    <small>
                        We'll turn it into your Hacker House identity.
                    </small>

                </motion.div>


                {/* =====================================
                    MAIN GRID
                ===================================== */}

                <div className="details-grid">


                    {/* =================================
                        PROFILE FORM
                    ================================= */}

                    <motion.section
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.15,
                        }}
                        className="profile-panel"
                    >


                        {/* PANEL DECORATION */}

                        <div className="panel-palm palm-one">
                            🌴
                        </div>

                        <div className="panel-palm palm-two">
                            🌿
                        </div>


                        {/* HEADER */}

                        <div className="panel-header">

                            <div className="panel-icon">

                                <User size={22} />

                            </div>

                            <div>

                                <h2>
                                    Hacker Profile
                                </h2>

                                <p>
                                    Fill in your details to generate your identity.
                                </p>

                            </div>

                        </div>


                        {/* =================================
                            FORM
                        ================================= */}

                        <div className="details-form">


                            {/* FULL NAME */}

                            <div className="form-field">

                                <label>
                                    FULL NAME
                                </label>

                                <div className="input-wrapper">

                                    <User size={14} />

                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                    />

                                </div>

                            </div>


                            {/* ROLE */}

                            <div className="form-field">

                                <label>
                                    PRIMARY ROLE / STACK
                                </label>

                                <div className="input-wrapper">

                                    <Code2 size={14} />

                                    <input
                                        type="text"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        placeholder="e.g. Full Stack Developer"
                                    />

                                </div>

                            </div>


                            {/* COLLEGE */}

                            <div className="form-field">

                                <label>
                                    COLLEGE OR ORGANIZATION
                                </label>

                                <div className="input-wrapper">

                                    <GraduationCap size={14} />

                                    <input
                                        type="text"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleChange}
                                        placeholder="Enter your college or organization"
                                    />

                                </div>

                            </div>


                            {/* SOCIALS */}

                            <div className="social-fields">


                                {/* GITHUB */}

                                <div className="form-field">
                                    <label>
                                        GITHUB USERNAME
                                    </label>
                                    <div className="input-wrapper">
                                        <span className="github-text-icon">
                                            GH
                                        </span>
                                        <input
                                            type="text"
                                            name="github"
                                            value={formData.github}
                                            onChange={handleChange}
                                            placeholder="github-username"
                                        />
                                    </div>
                                </div>

                                {/* X / TWITTER */}

                                <div className="form-field">

                                    <label>
                                        X USERNAME
                                    </label>

                                    <div className="input-wrapper">

                                        <X size={14} />

                                        <input
                                            type="text"
                                            name="twitter"
                                            value={formData.twitter}
                                            onChange={handleChange}
                                            placeholder="@username"
                                        />

                                    </div>

                                </div>


                            </div>


                            {/* =================================
                                GENERATE BUTTON
                            ================================= */}

                            <button
                                type="button"
                                onClick={handleGenerate}
                                className="generate-identity-button"
                            >

                                <Sparkles size={16} />

                                GENERATE MY IDENTITY

                                <span>
                                    →
                                </span>

                            </button>


                            {/* PRIVACY */}

                            <div className="privacy-note">

                                <ShieldCheck size={11} />

                                Your profile data stays private

                            </div>


                        </div>

                    </motion.section>


                    {/* =================================
                        IDENTITY PREVIEW
                    ================================= */}

                    <motion.section
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                        className="preview-panel"
                    >


                        {/* HEADER */}

                        <div className="preview-header">

                            <div className="preview-title">

                                <Glasses size={18} />

                                <h2>
                                    Identity Preview
                                </h2>

                            </div>

                            <Sun
                                size={25}
                                className="preview-sun"
                            />

                        </div>


                        <p className="preview-description">
                            This is how your card will look.
                        </p>


                        {/* =================================
                            IDENTITY CARD
                        ================================= */}

                        <div className="identity-card">


                            {/* CARD CORNERS */}

                            <div className="card-corner top-left" />

                            <div className="card-corner top-right" />

                            <div className="card-corner bottom-left" />

                            <div className="card-corner bottom-right" />


                            {/* PALM LEFT */}

                            <div className="identity-palm identity-palm-left">
                                🌴
                            </div>


                            {/* PALM RIGHT */}

                            <div className="identity-palm identity-palm-right">
                                🌴
                            </div>


                            {/* BIRDS */}

                            <div className="identity-birds">
                                ~ ~ ~
                            </div>


                            {/* PROFILE PHOTO */}

                            <div className="identity-photo">

                                {photo ? (

                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt="Profile"
                                    />

                                ) : (

                                    <User size={40} />

                                )}

                            </div>


                            {/* NAME */}

                            <h3 className="identity-name">

                                {formData.fullName ||
                                    "YOUR NAME"}

                            </h3>


                            {/* ROLE */}

                            <p className="identity-role">

                                {formData.role ||
                                    "Your Role / Stack"}

                            </p>


                            {/* COLLEGE */}

                            <div className="identity-college">

                                <GraduationCap size={13} />

                                {formData.college ||
                                    "Your College"}

                            </div>


                            {/* DIVIDER */}

                            <div className="identity-divider" />


                            {/* BRAND */}

                            <div className="identity-brand">

                                #FRAMEINGOA

                            </div>


                        </div>


                        {/* PREVIEW FOOTER */}

                        <div className="preview-footer">

                            <Sparkles size={12} />

                            Preview updates as you type

                        </div>

                    </motion.section>

                </div>


                {/* =====================================
                    BOTTOM ACTIONS
                ===================================== */}

                <div className="details-bottom-actions">


                    {/* UPLOAD PHOTO */}

                    <button
                        type="button"
                        onClick={() => navigate("/upload")}
                        className="details-secondary-button"
                    >

                        <Camera size={15} />

                        UPLOAD PHOTO

                    </button>


                    {/* VIEW FEATURES */}

                    <button
                        type="button"
                        onClick={() =>
                            document
                                .getElementById("details-features")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                })
                        }
                        className="details-yellow-button"
                    >

                        🌴

                        VIEW FEATURES

                        <span>
                            →
                        </span>

                    </button>


                </div>


                {/* =====================================
                    BOTTOM SPACE
                ===================================== */}

                <div
                    id="details-features"
                    className="details-bottom-space"
                />


            </main>

        </div>
    );
}

export default Details;