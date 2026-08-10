import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./BuilderCard.css";

import {
    Download,
    Sparkles,
    Share2,
    ArrowRight,
    Zap,
    PawPrint,
    Trophy,
    Palmtree,
} from "lucide-react";


function BuilderCardPage() {

    const navigate = useNavigate();
    const location = useLocation();

    // =========================================
    // GET DATA
    // =========================================

    const formData = location.state?.formData || {};
    const photo = location.state?.photo || null;

    const fullName =
        formData.fullName?.trim() || "YOUR NAME";

    const role =
        formData.role?.trim() || "Your Role / Stack";

    const college =
        formData.college?.trim() || "Your College";


    // =========================================
    // PHOTO URL
    // =========================================

    const photoUrl = useMemo(() => {

        if (!photo) {
            return null;
        }

        return URL.createObjectURL(photo);

    }, [photo]);


    // =========================================
    // CLEAN PHOTO URL
    // =========================================

    useEffect(() => {

        return () => {

            if (photoUrl) {
                URL.revokeObjectURL(photoUrl);
            }

        };

    }, [photoUrl]);


    // =========================================
    // DOWNLOAD BUILDER CARD
    // =========================================

    const handleDownloadCard = () => {

        alert("Builder Card download will be connected next.");

    };


    // =========================================
    // DOWNLOAD PFP
    // =========================================

    const handleDownloadPFP = () => {

        alert("PFP Frame download will be connected next.");

    };


    // =========================================
    // SHARE ON X
    // =========================================

    const handleShare = () => {

        const text =
            "I just created my Goa Builder Identity 🌴🔥 #FrameInGoa";

        const url =
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    };


    // =========================================
    // FINISH
    // =========================================

    const handleFinish = () => {

        navigate("/");

    };


    return (

        <div className="builder-goa-page">

            {/* =====================================
                FULL GOA BACKGROUND
            ===================================== */}

            <div className="builder-goa-background">

                <img
                    src="/goa-sunset.png"
                    alt="Goa sunset"
                />

            </div>


            {/* DARK OVERLAY */}
            <div className="builder-goa-overlay" />


            {/* =====================================
                MAIN CONTENT
            ===================================== */}

            <main className="builder-goa-main">


                {/* =================================
                    PAGE TITLE
                ================================= */}

                <motion.div
                    className="builder-goa-title"

                    initial={{
                        opacity: 0,
                        y: -30
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.7
                    }}
                >

                    <div className="builder-title-top">

                        <span>🌴</span>

                        <span className="title-bird">
                            ✦
                        </span>

                        <h1>
                            Your Identity
                        </h1>

                        <span className="title-bird">
                            ✦
                        </span>

                        <span>🌴</span>

                    </div>


                    <div className="builder-progress">

                        <span className="active" />

                        <span />

                        <span />

                        <span />

                    </div>

                </motion.div>


                {/* =================================
                    MAIN RETRO CARD
                ================================= */}

                <motion.section
                    className="retro-builder-card"

                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}
                >


                    {/* =================================
                        CARD TOP
                    ================================= */}

                    <div className="retro-card-header">

                        <div>

                            <p className="retro-eyebrow">
                                HACKER HOUSE GOA
                            </p>

                            <h2>
                                BUILDER CARD
                            </h2>

                        </div>


                        {/* STAMP */}

                        <div className="retro-stamp">

                            <Palmtree size={32} />

                            <strong>
                                #FrameInGoa
                            </strong>

                        </div>

                    </div>


                    {/* =================================
                        SUNSET DECORATION
                    ================================= */}

                    <div className="retro-sunset">

                        <div className="retro-sun" />

                        <div className="retro-hills">

                            🌴
                            <span>🌴</span>
                            🌴

                        </div>

                    </div>


                    {/* =================================
                        PROFILE PHOTO
                    ================================= */}

                    <div className="retro-profile-section">

                        <div className="retro-photo-ring">

                            {photoUrl ? (

                                <img
                                    src={photoUrl}
                                    alt={fullName}
                                />

                            ) : (

                                <div className="retro-photo-placeholder">

                                    <div className="placeholder-sunset">

                                        <span />
                                        <span />

                                    </div>

                                </div>

                            )}

                        </div>

                    </div>


                    {/* =================================
                        IDENTITY
                    ================================= */}

                    <div className="retro-identity-text">

                        <div className="retro-name-decoration">

                            <span>✦</span>

                            <div />

                            <span>✦</span>

                        </div>


                        <h3>
                            {fullName}
                        </h3>


                        <div className="retro-role">

                            <span>〰</span>

                            <strong>
                                {role}
                            </strong>

                            <span>〰</span>

                        </div>


                        <p className="retro-college">
                            {college}
                        </p>

                    </div>


                    {/* =================================
                        STAT CARDS
                    ================================= */}

                    <div className="retro-stats">


                        {/* SCORE */}

                        <div className="retro-stat">

                            <Zap size={34} />

                            <span>
                                BUILDER SCORE
                            </span>

                            <strong>
                                93
                            </strong>

                        </div>


                        {/* SPIRIT */}

                        <div className="retro-stat">

                            <PawPrint size={34} />

                            <span>
                                SPIRIT ANIMAL
                            </span>

                            <strong>
                                Fox
                            </strong>

                        </div>


                        {/* TITLE */}

                        <div className="retro-stat">

                            <Trophy size={34} />

                            <span>
                                BUILDER TITLE
                            </span>

                            <strong>
                                Prompt Wizard
                            </strong>

                        </div>

                    </div>


                    {/* =================================
                        CARD FOOTER
                    ================================= */}

                    <div className="retro-card-footer">

                        <span>

                            🌴 Built with
                            <b> ♥ </b>
                            at Hacker House Goa

                        </span>


                        <strong>
                            #FrameInGoa
                        </strong>

                    </div>

                </motion.section>


                {/* =================================
                    ACTION BUTTONS
                ================================= */}

                <motion.div
                    className="builder-actions"

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: 0.3,
                        duration: 0.6
                    }}
                >


                    {/* DOWNLOAD */}

                    <button
                        className="builder-action yellow"
                        onClick={handleDownloadCard}
                    >

                        <Download size={22} />

                        DOWNLOAD BUILDER CARD

                    </button>


                    {/* PFP */}

                    <button
                        className="builder-action pink"
                        onClick={handleDownloadPFP}
                    >

                        <Sparkles size={22} />

                        DOWNLOAD PFP FRAME

                    </button>


                    {/* SHARE */}

                    <button
                        className="builder-share"
                        onClick={handleShare}
                    >

                        <span className="share-x">
                            X
                        </span>

                        SHARE ON X

                    </button>


                    {/* FINISH */}

                    <button
                        className="builder-finish"
                        onClick={handleFinish}
                    >

                        FINISH & CONTINUE

                        <ArrowRight size={22} />

                    </button>

                </motion.div>


            </main>

        </div>

    );

}


export default BuilderCardPage;