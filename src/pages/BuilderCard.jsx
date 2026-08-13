import {
    useEffect,
    useMemo,
    useRef,
} from "react";

import {
    useLocation,
    useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import html2canvas from "html2canvas";

import {
    Download,
    Sparkles,
    Share2,
    ArrowRight,
} from "lucide-react";

import BuilderCard from "../components/BuilderCard/BuilderCard";

import "./BuilderCard.css";


function BuilderCardPage() {

    const navigate = useNavigate();

    const location = useLocation();

    const cardRef = useRef(null);


    // =========================================
    // GET DATA
    // =========================================

    const formData =
        location.state?.formData || {};

    const photo =
        location.state?.photo || null;


    const fullName =
        formData.fullName?.trim() ||
        "YOUR NAME";

    const role =
        formData.role?.trim() ||
        "Your Role / Stack";

    const college =
        formData.college?.trim() ||
        "Your College";


    // =========================================
    // PHOTO URL
    // =========================================

    const photoUrl = useMemo(() => {

        if (!photo) {
            return null;
        }

        /*
         * If photo is already a URL,
         * use it directly.
         */

        if (typeof photo === "string") {
            return photo;
        }


        /*
         * If photo is a File object,
         * create a temporary URL.
         */

        return URL.createObjectURL(photo);

    }, [photo]);


    // =========================================
    // CLEAN PHOTO URL
    // =========================================

    useEffect(() => {

        if (
            photo &&
            typeof photo !== "string" &&
            photoUrl
        ) {

            return () => {
                URL.revokeObjectURL(photoUrl);
            };

        }

    }, [photo, photoUrl]);


    // =========================================
    // DOWNLOAD BUILDER CARD
    // =========================================

    const handleDownloadCard = async () => {

        const card = cardRef.current;


        if (!card) {

            console.error(
                "Builder card not found."
            );

            alert(
                "Builder Card could not be found."
            );

            return;
        }


        try {

            /*
             * Wait for fonts.
             */

            if (document.fonts?.ready) {
                await document.fonts.ready;
            }


            /*
             * Wait for images.
             */

            const images =
                card.querySelectorAll("img");


            await Promise.all(

                Array.from(images).map((img) => {

                    if (img.complete) {
                        return Promise.resolve();
                    }


                    return new Promise((resolve) => {

                        img.onload = resolve;

                        img.onerror = resolve;

                    });

                })

            );


            /*
             * Give browser a moment to
             * finish painting the card.
             */

            await new Promise((resolve) => {

                setTimeout(
                    resolve,
                    200
                );

            });


            /*
             * Capture Builder Card.
             */

            const canvas =
                await html2canvas(
                    card,
                    {
                        scale: 3,

                        useCORS: true,

                        allowTaint: false,

                        backgroundColor: null,

                        logging: false,

                        imageTimeout: 15000,

                        removeContainer: true,

                        scrollX: 0,

                        scrollY:
                            -window.scrollY,
                    }
                );


            /*
             * Convert to PNG.
             */

            const image =
                canvas.toDataURL(
                    "image/png",
                    1.0
                );


            /*
             * Create download link.
             */

            const link =
                document.createElement("a");


            link.download =
                "FrameInGoa-Builder-Card.png";


            link.href = image;


            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);


        } catch (error) {

            console.error(
                "Builder Card download failed:",
                error
            );


            alert(
                "Download failed. Please try again."
            );

        }

    };


    // =========================================
    // DOWNLOAD PFP
    // =========================================

    const handleDownloadPFP = () => {

        alert(
            "PFP Frame download will be connected next."
        );

    };


    // =========================================
    // SHARE ON X
    // =========================================

    const handleShare = () => {

        const text =
            "I just created my Goa Builder Identity 🌴🔥 #FrameInGoa";


        const url =
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                text
            )}`;


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


            {/* =====================================
                DARK OVERLAY
            ===================================== */}

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
                        y: -30,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.7,
                    }}
                >

                    <div className="builder-title-top">

                        <span>
                            🌴
                        </span>


                        <span className="title-bird">
                            ✦
                        </span>


                        <h1>
                            Your Identity
                        </h1>


                        <span className="title-bird">
                            ✦
                        </span>


                        <span>
                            🌴
                        </span>

                    </div>


                    {/* PROGRESS */}

                    <div className="builder-progress">

                        <span className="active" />

                        <span />

                        <span />

                        <span />

                    </div>

                </motion.div>


                {/* =================================
                    BUILDER CARD
                ================================= */}

                <motion.div

                    initial={{
                        opacity: 0,
                        scale: 0.9,
                        y: 40,
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}

                    transition={{
                        duration: 0.8,
                    }}

                    className="w-full flex justify-center"
                >

                    <BuilderCard
                        cardRef={cardRef}
                        photoUrl={photoUrl}
                        fullName={fullName}
                        role={role}
                        college={college}
                    />

                </motion.div>


                {/* =================================
                    ACTION BUTTONS
                ================================= */}

                <motion.div
                    className="builder-actions"

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: 0.3,
                        duration: 0.6,
                    }}
                >


                    {/* =================================
                        DOWNLOAD BUILDER CARD
                    ================================= */}

                    <button
                        type="button"
                        className="builder-action yellow"
                        onClick={handleDownloadCard}
                    >

                        <Download size={22} />

                        DOWNLOAD BUILDER CARD

                    </button>


                    {/* =================================
                        DOWNLOAD PFP
                    ================================= */}

                    <button
                        type="button"
                        className="builder-action pink"
                        onClick={handleDownloadPFP}
                    >

                        <Sparkles size={22} />

                        DOWNLOAD PFP FRAME

                    </button>


                    {/* =================================
                        SHARE ON X
                    ================================= */}

                    <button
                        type="button"
                        className="builder-share"
                        onClick={handleShare}
                    >

                        <span className="share-x">
                            X
                        </span>

                        SHARE ON X

                    </button>


                    {/* =================================
                        FINISH
                    ================================= */}

                    <button
                        type="button"
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