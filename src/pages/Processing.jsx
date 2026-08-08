import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Loader from "../components/Loader/Loader";

function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/identity");
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-600/20 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-32">

        <ProgressBar
          step={3}
          title="Generating Identity"
        />

        <div className="mt-20 flex justify-center">
          <Loader />
        </div>

      </div>

    </div>
  );
}

export default Processing;