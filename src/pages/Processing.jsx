import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ScanFace,
    UserRound,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";


function Processing() {
    const location = useLocation();

    const formData = location.state?.formData || {};
    const photo = location.state?.photo || null;
    const navigate = useNavigate();

    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);


    // =========================================
    // PROGRESS ANIMATION
    // =========================================

    useEffect(() => {

        const interval = setInterval(() => {

            setProgress((prev) => {

                if (prev >= 100) {

                    clearInterval(interval);

                    return 100;
                }

                return prev + 1;

            });

        }, 80);


        return () => clearInterval(interval);

    }, []);


    // =========================================
    // UPDATE CURRENT STEP
    // =========================================

    useEffect(() => {

        if (progress >= 35 && progress < 65) {
            setCurrentStep(1);
        }

        if (progress >= 65 && progress < 100) {
            setCurrentStep(2);
        }

        if (progress >= 100) {

            setCurrentStep(3);

            const timer = setTimeout(() => {

                navigate("/builder-card", {
                  state: {
                      formData,
                      photo,
                  },
              });

            }, 1000);

            return () => clearTimeout(timer);
        }

    }, [progress, navigate]);


    // =========================================
    // GENERATION STEPS
    // =========================================

    const steps = [

        {
            icon: <ScanFace size={18} />,
            title: "Scanning your profile",
        },

        {
            icon: <UserRound size={18} />,
            title: "Building your Goa identity",
        },

        {
            icon: <Sparkles size={18} />,
            title: "Creating your Builder Card",
        },

    ];


    // =========================================
    // STATUS MESSAGE
    // =========================================

    const getStatusMessage = () => {

        if (progress < 20) {
            return "Scanning your profile...";
        }

        if (progress < 40) {
            return "Finding your Goa vibe...";
        }

        if (progress < 65) {
            return "Building your builder identity...";
        }

        if (progress < 85) {
            return "Adding beach vibes & neon energy...";
        }

        if (progress < 100) {
            return "Crafting your Builder Card...";
        }

        return "Your Goa identity is ready!";

    };


    return (

        <div className="processing-page">


            {/* =========================================
                GOA BACKGROUND
            ========================================= */}

            <div className="processing-background">

                <img
                    src="/goa-night.png"
                    alt="Goa beach background"
                />

            </div>


            <div className="processing-background-overlay" />


            {/* =========================================
                GOA DECORATIONS
            ========================================= */}

            <div className="processing-palm processing-palm-left">
                🌴
            </div>

            <div className="processing-palm processing-palm-right">
                🌴
            </div>


            <div className="processing-wave processing-wave-one">
                〰
            </div>

            <div className="processing-wave processing-wave-two">
                〰
            </div>


            <div className="processing-sun">
                ☀
            </div>


            {/* =========================================
                NAVBAR
            ========================================= */}

            <div className="processing-navbar">

                <Navbar />

            </div>


            {/* =========================================
                MAIN
            ========================================= */}

            <main className="processing-main">


                {/* =====================================
                    PROGRESS BAR
                ===================================== */}

                <ProgressBar
                    step={3}
                    title="AI Generation"
                />


                {/* =====================================
                    STEP BADGE
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
                    className="processing-step-badge"
                >

                    <Sparkles size={13} />

                    STEP 3 OF 4 • GOA GENERATION

                    <Sparkles size={13} />

                </motion.div>


                {/* =====================================
                    HEADING
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
                    className="processing-heading"
                >

                    <h1>

                        CREATING YOUR{" "}

                        <span>
                            GOA IDENTITY
                        </span>

                    </h1>


                    <p>
                        Turning your profile into a beach-ready builder identity.
                    </p>

                </motion.div>


                {/* =====================================
                    GENERATION MACHINE
                ===================================== */}

                <div className="processing-machine">


                    {/* OUTER ROTATING RING */}

                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 9,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="processing-ring processing-ring-outer"
                    />


                    {/* INNER ROTATING RING */}

                    <motion.div
                        animate={{
                            rotate: -360,
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="processing-ring processing-ring-inner"
                    />


                    {/* DASHED RING */}

                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 14,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="processing-ring processing-ring-dashed"
                    />


                    {/* MAIN CIRCLE */}

                    <div className="processing-core">

                        <motion.div
                            animate={{
                                scale: [1, 1.12, 1],
                                opacity: [0.75, 1, 0.75],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >

                            <ScanFace
                                size={58}
                                strokeWidth={1.4}
                            />

                        </motion.div>


                        {/* CENTER SPARK */}

                        <motion.div
                            animate={{
                                rotate: 360,
                                scale: [1, 1.15, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="processing-core-spark"
                        >

                            ✦

                        </motion.div>

                    </div>


                    {/* ORBIT DOT */}

                    <motion.span
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="processing-orbit"
                    >

                        <i />

                    </motion.span>


                </div>


                {/* =====================================
                    PERCENTAGE
                ===================================== */}

                <motion.div
                    key={progress}
                    className="processing-percentage"
                >

                    {progress}%

                </motion.div>


                {/* =====================================
                    STATUS
                ===================================== */}

                <motion.p
                    key={getStatusMessage()}
                    initial={{
                        opacity: 0,
                        y: 5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="processing-status"
                >

                    {getStatusMessage()}

                </motion.p>


                {/* =====================================
                    PROGRESS BAR
                ===================================== */}

                <div className="processing-progress-container">

                    <div className="processing-progress-track">

                        <motion.div
                            className="processing-progress-fill"
                            animate={{
                                width: `${progress}%`,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        />

                    </div>


                    <div className="processing-progress-labels">

                        <span>
                            GOA VIBES
                        </span>

                        <span>
                            {progress} / 100
                        </span>

                    </div>

                </div>


                {/* =====================================
                    GENERATION STEPS
                ===================================== */}

                <div className="processing-steps">


                    {steps.map((item, index) => {

                        const active =
                            index <= currentStep;


                        return (

                            <motion.div
                                key={index}
                                animate={{
                                    opacity: active ? 1 : 0.35,
                                    x: active ? 0 : 4,
                                }}
                                className={`processing-step-card ${
                                    active
                                        ? "processing-step-active"
                                        : ""
                                }`}
                            >


                                <div className="processing-step-left">


                                    <div className="processing-step-icon">

                                        {item.icon}

                                    </div>


                                    <span>

                                        {item.title}

                                    </span>


                                </div>


                                <div className="processing-step-status">


                                    {index === currentStep &&
                                    progress < 100 ? (

                                        <motion.div
                                            animate={{
                                                rotate: 360,
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="processing-spinner"
                                        />

                                    ) : index < currentStep ||
                                      progress >= 100 ? (

                                        <span className="processing-check">
                                            ✓
                                        </span>

                                    ) : (

                                        <span className="processing-dot">
                                            •
                                        </span>

                                    )}


                                </div>


                            </motion.div>

                        );

                    })}


                </div>


                {/* =====================================
                    PRIVACY
                ===================================== */}

                <div className="processing-privacy">

                    <ShieldCheck size={14} />

                    Your profile stays private while we build your identity.

                </div>


                {/* =====================================
                    BRAND
                ===================================== */}

                <div className="processing-brand">

                    <span>
                        FRAMEIN
                    </span>

                    GOA

                    <small>
                        BUILD • BEACH • CREATE
                    </small>

                </div>


            </main>

        </div>

    );
}


export default Processing;