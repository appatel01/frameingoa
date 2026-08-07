import { motion } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import {
    UploadCloud,
    Sparkles,
    Download,
    Share2,
} from "lucide-react";

function Landing() {
    return (
        <div className="relative overflow-hidden bg-[#050816] min-h-screen">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/10 blur-[140px] rounded-full"></div>

        <Navbar />

        <Hero />

        <motion.section
            id="features"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-6 pb-24"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <FeatureCard
                icon={<UploadCloud size={28} />}
                number="01"
                title="Upload"
                description="Upload your favorite portrait in JPG, PNG or HEIC."
                />

                <FeatureCard
                icon={<Sparkles size={28} />}
                number="02"
                title="AI Generate"
                description="AI creates your Builder Card and PFP Frame."
                />

                <FeatureCard
                icon={<Download size={28} />}
                number="03"
                title="Download"
                description="Download a high-quality branded image."
                />

                <FeatureCard
                icon={<Share2 size={28} />}
                number="04"
                title="Share"
                description="Share directly on X using #FrameInGoa."
                />

            </div>
        </motion.section>

        </div>
    );
}

export default Landing;