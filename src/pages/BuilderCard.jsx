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
    // CREATE PHOTO URL
    // =========================================

    const photoUrl = useMemo(() => {

        if (!photo) {
            return null;
        }

        // If already a URL / data URL
        if (typeof photo === "string") {
            return photo;
        }

        // If File / Blob
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

            // Wait for fonts
            if (document.fonts?.ready) {
                await document.fonts.ready;
            }


            // Wait for card images
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


            // Give browser time to render
            await new Promise((resolve) => {

                setTimeout(
                    resolve,
                    200
                );

            });


            // Capture card
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

                        scrollY: -window.scrollY,
                    }
                );


            // Convert to PNG
            const image =
                canvas.toDataURL(
                    "image/png",
                    1.0
                );


            // Download
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
    // CONVERT PHOTO TO DATA URL
    // =========================================

    const getPhotoDataUrl = async () => {

        if (!photo) {
            return null;
        }


        // -----------------------------------------
        // File / Blob
        // -----------------------------------------

        if (photo instanceof Blob) {

            return new Promise(
                (resolve, reject) => {

                    const reader =
                        new FileReader();


                    reader.onload = () => {

                        resolve(
                            reader.result
                        );

                    };


                    reader.onerror = () => {

                        reject(
                            new Error(
                                "Unable to read uploaded photo."
                            )
                        );

                    };


                    reader.readAsDataURL(photo);

                }
            );

        }


        // -----------------------------------------
        // Already data URL
        // -----------------------------------------

        if (
            typeof photo === "string" &&
            photo.startsWith("data:")
        ) {

            return photo;

        }


        // -----------------------------------------
        // Photo URL
        // -----------------------------------------

        if (
            typeof photo === "string"
        ) {

            return photo;

        }


        return photoUrl;

    };


    // =========================================
    // DOWNLOAD PFP FRAME
    // =========================================

    const handleDownloadPFP = async () => {

        if (!photo) {

            alert(
                "Please upload your photo first."
            );

            return;
        }


        try {

            // Get safe image source
            const safePhoto =
                await getPhotoDataUrl();


            if (!safePhoto) {

                alert(
                    "Photo could not be loaded."
                );

                return;
            }


            // =====================================
            // CREATE CANVAS
            // =====================================

            const SIZE = 1080;

            const canvas =
                document.createElement("canvas");

            canvas.width = SIZE;
            canvas.height = SIZE;


            const ctx =
                canvas.getContext("2d");


            if (!ctx) {

                throw new Error(
                    "Canvas context could not be created."
                );

            }


            // =====================================
            // BACKGROUND
            // =====================================

            ctx.fillStyle =
                "#075c36";

            ctx.fillRect(
                0,
                0,
                SIZE,
                SIZE
            );


            // =====================================
            // RETRO SUNSET BACKGROUND
            // =====================================

            const gradient =
                ctx.createLinearGradient(
                    0,
                    0,
                    0,
                    SIZE
                );


            gradient.addColorStop(
                0,
                "#ffb746"
            );

            gradient.addColorStop(
                0.40,
                "#f4dfa3"
            );

            gradient.addColorStop(
                0.47,
                "#075c36"
            );

            gradient.addColorStop(
                1,
                "#075c36"
            );


            ctx.fillStyle =
                gradient;

            ctx.fillRect(
                0,
                0,
                SIZE,
                SIZE
            );


            // =====================================
            // SUN
            // =====================================

            ctx.beginPath();

            ctx.arc(
                SIZE / 2,
                175,
                105,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#ffd900";

            ctx.globalAlpha =
                0.65;

            ctx.fill();

            ctx.globalAlpha =
                1;


            // =====================================
            // PALMS
            // =====================================

            ctx.textAlign =
                "center";

            ctx.font =
                "100px Arial";

            ctx.fillStyle =
                "#075c36";

            ctx.fillText(
                "🌴",
                110,
                250
            );

            ctx.fillText(
                "🌴",
                970,
                250
            );


            // =====================================
            // LOAD USER PHOTO
            // =====================================

            const image =
                new Image();


            // Data URLs don't require CORS
            if (
                typeof safePhoto === "string" &&
                !safePhoto.startsWith("data:")
            ) {

                image.crossOrigin =
                    "anonymous";

            }


            image.src =
                safePhoto;


            await new Promise(
                (resolve, reject) => {

                    image.onload = () => {
                        resolve();
                    };


                    image.onerror = () => {

                        reject(
                            new Error(
                                "Unable to load photo."
                            )
                        );

                    };

                }
            );


            // =====================================
            // PHOTO SETTINGS
            // =====================================

            const photoSize =
                700;

            const centerX =
                SIZE / 2;

            const centerY =
                525;


            // =====================================
            // OUTER PINK RING
            // =====================================

            ctx.beginPath();

            ctx.arc(
                centerX,
                centerY,
                photoSize / 2 + 48,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#ff2385";

            ctx.fill();


            // =====================================
            // YELLOW RING
            // =====================================

            ctx.beginPath();

            ctx.arc(
                centerX,
                centerY,
                photoSize / 2 + 30,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#ffd900";

            ctx.fill();


            // =====================================
            // GREEN INNER RING
            // =====================================

            ctx.beginPath();

            ctx.arc(
                centerX,
                centerY,
                photoSize / 2 + 10,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#075c36";

            ctx.fill();


            // =====================================
            // CLIP PHOTO
            // =====================================

            ctx.save();

            ctx.beginPath();

            ctx.arc(
                centerX,
                centerY,
                photoSize / 2,
                0,
                Math.PI * 2
            );

            ctx.clip();


            // =====================================
            // OBJECT COVER
            // =====================================

            const scale =
                Math.max(
                    photoSize / image.width,
                    photoSize / image.height
                );


            const drawWidth =
                image.width * scale;

            const drawHeight =
                image.height * scale;


            const drawX =
                centerX -
                drawWidth / 2;


            const drawY =
                centerY -
                drawHeight / 2;


            ctx.drawImage(
                image,
                drawX,
                drawY,
                drawWidth,
                drawHeight
            );


            ctx.restore();


            // =====================================
            // TOP BRAND
            // =====================================

            ctx.textAlign =
                "center";

            ctx.fillStyle =
                "#075c36";

            ctx.font =
                "900 42px Arial";

            ctx.fillText(
                "HACKER HOUSE GOA",
                SIZE / 2,
                65
            );


            // =====================================
            // FRAMEINGOA
            // =====================================

            ctx.fillStyle =
                "#fff7d6";

            ctx.font =
                "900 64px Arial";

            ctx.fillText(
                "FRAMEINGOA",
                SIZE / 2,
                965
            );


            // =====================================
            // HASHTAG
            // =====================================

            ctx.fillStyle =
                "#ffd900";

            ctx.font =
                "bold 32px Arial";

            ctx.fillText(
                "#FrameInGoa",
                SIZE / 2,
                1020
            );


            // =====================================
            // DECORATIVE STARS
            // =====================================

            ctx.fillStyle =
                "#ff2385";

            ctx.font =
                "55px Arial";

            ctx.fillText(
                "✦",
                80,
                105
            );

            ctx.fillText(
                "✦",
                1000,
                105
            );


            // =====================================
            // GENERATE PNG
            // =====================================

            const imageData =
                canvas.toDataURL(
                    "image/png",
                    1.0
                );


            // =====================================
            // DOWNLOAD
            // =====================================

            const link =
                document.createElement("a");


            link.download =
                "FrameInGoa-PFP-Frame.png";


            link.href =
                imageData;


            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);


        } catch (error) {

            console.error(
                "PFP FRAME ERROR:",
                error
            );


            alert(
                "Unable to download PFP frame. Please try again."
            );

        }

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


    // =========================================
    // UI
    // =========================================

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


                    {/* DOWNLOAD BUILDER CARD */}

                    <button
                        type="button"
                        className="builder-action yellow"
                        onClick={handleDownloadCard}
                    >

                        <Download size={22} />

                        DOWNLOAD BUILDER CARD

                    </button>


                    {/* DOWNLOAD PFP FRAME */}

                    <button
                        type="button"
                        className="builder-action pink"
                        onClick={handleDownloadPFP}
                    >

                        <Sparkles size={22} />

                        DOWNLOAD PFP FRAME

                    </button>


                    {/* SHARE ON X */}

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


                    {/* FINISH */}

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