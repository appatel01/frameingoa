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

    // Store the actual File object in Context
    setPhoto(file);
  };

  const handleContinue = () => {
    if (!photo) {
      alert("Please upload a photo first.");
      return;
    }

    navigate("/details");
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* Simple Background */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          bg-purple-600/10
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <Navbar />

      <main className="relative z-10 pt-28 pb-20">

        {/* Progress */}
        <ProgressBar
          step={1}
          title="Upload Headshot"
        />

        {/* Heading */}
        <div className="text-center mt-10 mb-8 px-5">

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Upload{" "}
            <span
              className="
                bg-gradient-to-r
                from-fuchsia-400
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Your Photo
            </span>
          </h1>

          <p className="mt-3 text-gray-400 text-sm md:text-base">
            Choose a clear portrait. Bright lighting works best!
          </p>

        </div>

        {/* Upload */}
        <div className="max-w-xl mx-auto px-5">

          <UploadBox
            onFileSelect={handleFileSelect}
            selectedFile={photo}
          />

          {/* Continue */}
          <button
            type="button"
            onClick={handleContinue}
            disabled={!photo}
            className={`
              w-full
              mt-6
              h-14
              rounded-xl
              font-semibold
              transition-all
              ${
                photo
                  ? `
                    bg-gradient-to-r
                    from-fuchsia-500
                    via-purple-500
                    to-cyan-400
                    text-white
                    hover:scale-[1.02]
                    cursor-pointer
                    shadow-lg
                    shadow-purple-500/20
                  `
                  : `
                    bg-gray-700/70
                    text-gray-400
                    cursor-not-allowed
                  `
              }
            `}
          >
            {photo ? "Continue →" : "Upload a photo to continue"}
          </button>

        </div>

      </main>
    </div>
  );
}

export default Upload;