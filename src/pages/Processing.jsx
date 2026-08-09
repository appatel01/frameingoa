import { useEffect, useState } from "react";
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
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

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

  useEffect(() => {
    if (progress >= 35) {
      setCurrentStep(1);
    }

    if (progress >= 65) {
      setCurrentStep(2);
    }

    if (progress >= 100) {
      setCurrentStep(3);

      const timer = setTimeout(() => {
        navigate("/success");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [progress, navigate]);

  const steps = [
    {
      icon: <ScanFace size={18} />,
      title: "Detecting your identity",
    },
    {
      icon: <UserRound size={18} />,
      title: "Building your professional profile",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Generating your Builder Card & PFP Frame",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050817] text-white">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-purple-600/10 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="relative z-10 pt-28 pb-16">

        {/* Progress */}
        <ProgressBar
          step={3}
          title="AI Generation"
        />

        <div className="max-w-2xl mx-auto px-6 mt-12 text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-fuchsia-500/50
              bg-fuchsia-500/5
              text-fuchsia-300
              text-xs
              font-semibold
              tracking-wide
            "
          >
            <Sparkles size={14} />
            STEP 3 OF 4 • AI GENERATION
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              mt-7
              text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
            "
          >
            Creating Your{" "}
            <span className="
              bg-gradient-to-r
              from-fuchsia-400
              via-purple-400
              to-cyan-400
              bg-clip-text
              text-transparent
            ">
              Builder Identity
            </span>
          </motion.h1>

          {/* Subtitle */}
          <p className="mt-4 text-gray-400">
            Our AI is crafting something amazing for you...
          </p>

          {/* AI Circle */}
          <div className="relative flex justify-center mt-10 mb-10">

            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-44
                h-44
                rounded-full
                border
                border-dashed
                border-fuchsia-500/40
              "
            />

            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-36
                h-36
                rounded-full
                border
                border-cyan-400/30
              "
            />

            {/* Main Circle */}
            <div className="
              relative
              w-32
              h-32
              rounded-full
              flex
              items-center
              justify-center
              bg-gradient-to-br
              from-fuchsia-500/20
              to-cyan-500/20
              border
              border-fuchsia-400
              shadow-[0_0_50px_rgba(217,70,239,0.25)]
            ">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <ScanFace
                  size={52}
                  strokeWidth={1.5}
                  className="text-fuchsia-300"
                />
              </motion.div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-3 text-left">

            {steps.map((item, index) => {
              const active = index <= currentStep;

              return (
                <motion.div
                  key={index}
                  animate={{
                    opacity: active ? 1 : 0.35,
                  }}
                  className={`
                    flex
                    items-center
                    justify-between
                    px-5
                    py-4
                    rounded-xl
                    border
                    transition-all
                    ${
                      active
                        ? "border-fuchsia-500/30 bg-white/[0.04]"
                        : "border-white/10 bg-white/[0.02]"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`
                        w-9
                        h-9
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        border
                        ${
                          active
                            ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-400"
                            : "border-white/10 text-gray-600"
                        }
                      `}
                    >
                      {item.icon}
                    </div>

                    <span
                      className={
                        active
                          ? "text-gray-200 text-sm font-medium"
                          : "text-gray-500 text-sm"
                      }
                    >
                      {item.title}
                    </span>

                  </div>

                  {/* Status */}
                  <div>
                    {index === currentStep && progress < 100 ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          w-4
                          h-4
                          rounded-full
                          border-2
                          border-cyan-400
                          border-t-transparent
                        "
                      />
                    ) : index < currentStep || progress >= 100 ? (
                      <span className="text-cyan-400">✓</span>
                    ) : (
                      <span className="text-gray-700">•</span>
                    )}
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Percentage */}
          <div className="mt-8">

            <motion.div
              key={progress}
              className="
                text-5xl
                font-extrabold
                bg-gradient-to-r
                from-fuchsia-400
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              {progress}%
            </motion.div>

            <p className="mt-1 text-sm text-gray-500">
              {progress < 30
                ? "Analyzing your photo..."
                : progress < 70
                ? "Building your hacker profile..."
                : progress < 100
                ? "Generating your identity..."
                : "Identity ready!"}
            </p>

          </div>

          {/* Progress Bar */}
          <div className="
            mt-5
            h-2
            w-full
            rounded-full
            bg-white/10
            overflow-hidden
          ">
            <motion.div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-fuchsia-500
                via-purple-500
                to-cyan-400
              "
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Privacy */}
          <div className="
            mt-6
            flex
            justify-center
            items-center
            gap-2
            text-xs
            text-gray-500
          ">
            <ShieldCheck
              size={14}
              className="text-cyan-400"
            />
            Your data is secure and never shared.
          </div>

        </div>
      </main>
    </div>
  );
}

export default Processing;