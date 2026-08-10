import { motion } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import TropicalBackground from "../components/TropicalBackground/TropicalBackground";

import {
    UploadCloud,
    Sparkles,
    Download,
    Share2,
} from "lucide-react";

function Landing() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#075C36]">

            {/* =====================================
                GOA RETRO BACKGROUND
            ===================================== */}
            <TropicalBackground />

            {/* =====================================
                NAVBAR
            ===================================== */}
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* =====================================
                MAIN
            ===================================== */}
            <main className="relative z-10">

                {/* =====================================
                    HERO
                ===================================== */}
                <Hero />


                {/* =====================================
                    FEATURES
                ===================================== */}
                <motion.section
                    id="features"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative px-5 pt-4 pb-24"
                >

                    {/* Wavy divider */}
                    <div className="goa-wave mb-10" />


                    <div className="mx-auto max-w-7xl">

                        {/* Section heading */}
                        <div className="mb-12 text-center">

                            <p className="goa-small-title">
                                BUILD • BEACH • CREATE
                            </p>

                            <h2 className="goa-section-title">
                                HOW IT WORKS
                            </h2>

                        </div>


                        {/* Cards */}
                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-4
                                gap-5
                            "
                        >

                            <FeatureCard
                                icon={<UploadCloud size={28} />}
                                number="01"
                                title="UPLOAD"
                                description="Upload your favorite photo in JPG, PNG or HEIC."
                                background="/cards/upload.png"
                            />

                            <FeatureCard
                                icon={<Sparkles size={28} />}
                                number="02"
                                title="AI GENERATE"
                                description="Our AI creates your personalized Builder Card and Profile Frame."
                                background="/cards/ai-generate.png"
                            />

                            <FeatureCard
                                icon={<Download size={28} />}
                                number="03"
                                title="DOWNLOAD"
                                description="Download your high-quality branded FrameInGoa image."
                                background="/cards/download.png"
                            />

                            <FeatureCard
                                icon={<Share2 size={28} />}
                                number="04"
                                title="SHARE"
                                description="Share your Goa identity directly on X using #FrameInGoa."
                                background="/cards/share.png"
                            />

                        </div>

                    </div>

                </motion.section>


                {/* =====================================
                    STATS
                ===================================== */}
                <section className="relative px-5 pb-24">

                    <div className="mx-auto max-w-6xl">

                        <div className="mb-12 text-center">

                            <p className="goa-small-title">
                                THE गोवा MOVEMENT
                            </p>

                            <h2 className="goa-section-title">
                                THE NUMBERS
                            </h2>

                        </div>


                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                            <div className="goa-stat yellow">

                                <span className="goa-stat-number">
                                    6800+
                                </span>

                                <span className="goa-stat-label">
                                    REGISTRATIONS
                                </span>

                            </div>


                            <div className="goa-stat pink">

                                <span className="goa-stat-number">
                                    390+
                                </span>

                                <span className="goa-stat-label">
                                    HACKERS
                                </span>

                            </div>


                            <div className="goa-stat yellow">

                                <span className="goa-stat-number">
                                    100
                                </span>

                                <span className="goa-stat-label">
                                    PROJECTS
                                </span>

                            </div>


                            <div className="goa-stat pink">

                                <span className="goa-stat-number">
                                    $50K+
                                </span>

                                <span className="goa-stat-label">
                                    BOUNTIES
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================
                    BUILDER CARD CTA
                ===================================== */}
                <section className="relative px-5 pb-28">

                    <div className="mx-auto max-w-6xl">

                        <div className="goa-builder">

                            <div className="goa-builder-decoration">
                                ✦
                            </div>


                            <p className="goa-small-title">
                                YOUR गोवा IDENTITY
                            </p>


                            <h2 className="goa-section-title">
                                READY TO BUILD?
                            </h2>


                            <p className="mx-auto mt-5 max-w-xl text-center text-[#FFF7D6]">
                                Upload your photo and create your personalized
                                Hacker House गोवा identity in seconds.
                            </p>


                            <a
                                href="/upload"
                                className="
                                    mt-8
                                    inline-flex
                                    items-center
                                    justify-center
                                    border-2
                                    border-[#075C36]
                                    bg-[#FFD900]
                                    px-8
                                    py-4
                                    font-bold
                                    uppercase
                                    tracking-wide
                                    text-[#075C36]
                                    shadow-[6px_6px_0_#FF0080]
                                    transition-all
                                    hover:translate-x-1
                                    hover:translate-y-1
                                    hover:shadow-[3px_3px_0_#FF0080]
                                "
                            >
                                CREATE MY ID
                            </a>

                        </div>

                    </div>

                </section>

            </main>


            {/* =====================================
                FOOTER
            ===================================== */}
            <Footer />

        </div>
    );
}

export default Landing;