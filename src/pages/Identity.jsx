import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import BuilderCard from "../components/BuilderCard/BuilderCard";
import TropicalBackground from "../components/TropicalBackground/TropicalBackground";

import { domToPng } from "modern-screenshot";

function Identity() {
  const { photo, user } = useContext(AppContext);
  const navigate = useNavigate();

  // ==========================================
  // DOWNLOAD BUILDER CARD
  // ==========================================

  const downloadBuilderCard = async () => {
    const card = document.getElementById("builder-card");

    if (!card) {
      alert("Builder Card not found.");
      return;
    }

    try {
      console.log("Preparing Builder Card...");

      // Wait for rendering
      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      // Wait for images
      const images = card.querySelectorAll("img");

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

      // Small delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      console.log("Generating Builder Card PNG...");

      const dataUrl = await domToPng(card, {
        scale: 2,
        backgroundColor: "#101321",
      });

      const link = document.createElement("a");

      link.download = "frameingoa-builder-card.png";
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Builder Card downloaded successfully!");
    } catch (error) {
      console.error("BUILDER CARD DOWNLOAD ERROR:", error);

      alert("Unable to download the Builder Card. Please try again.");
    }
  };

  // ==========================================
  // DOWNLOAD PFP FRAME
  // ==========================================

  const downloadPFPFrame = async () => {
    if (!photo) {
      alert("Please upload a photo first.");
      return;
    }

    let photoUrl = null;

    try {
      const canvas = document.createElement("canvas");

      const size = 1000;

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Canvas is not supported.");
      }

      // Background
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, size, size);

      // Photo URL
      photoUrl =
        typeof photo === "string"
          ? photo
          : URL.createObjectURL(photo);

      const image = new Image();

      image.onload = () => {
        const center = size / 2;
        const radius = 360;

        // ==================================
        // CIRCULAR PHOTO
        // ==================================

        ctx.save();

        ctx.beginPath();

        ctx.arc(
          center,
          center,
          radius,
          0,
          Math.PI * 2
        );

        ctx.closePath();
        ctx.clip();

        // Cover image
        const imageRatio =
          image.width / image.height;

        let drawWidth;
        let drawHeight;
        let offsetX;
        let offsetY;

        if (imageRatio > 1) {
          drawHeight = radius * 2;
          drawWidth = drawHeight * imageRatio;

          offsetX =
            center - drawWidth / 2;

          offsetY =
            center - drawHeight / 2;
        } else {
          drawWidth = radius * 2;
          drawHeight = drawWidth / imageRatio;

          offsetX =
            center - drawWidth / 2;

          offsetY =
            center - drawHeight / 2;
        }

        ctx.drawImage(
          image,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight
        );

        ctx.restore();

        // ==================================
        // CYAN FRAME
        // ==================================

        ctx.beginPath();

        ctx.arc(
          center,
          center,
          radius + 15,
          0,
          Math.PI * 2
        );

        ctx.lineWidth = 30;
        ctx.strokeStyle = "#22D3EE";
        ctx.stroke();

        // ==================================
        // PURPLE FRAME
        // ==================================

        ctx.beginPath();

        ctx.arc(
          center,
          center,
          radius + 32,
          0,
          Math.PI * 2
        );

        ctx.lineWidth = 8;
        ctx.strokeStyle = "#A855F7";
        ctx.stroke();

        // ==================================
        // FRAMEINGOA TEXT
        // ==================================

        ctx.font = "bold 55px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#FFFFFF";

        ctx.fillText(
          "FrameInGoa",
          center,
          900
        );

        // ==================================
        // DOWNLOAD
        // ==================================

        canvas.toBlob((blob) => {
          if (!blob) {
            alert("Could not create PFP frame.");
            return;
          }

          const url =
            URL.createObjectURL(blob);

          const link =
            document.createElement("a");

          link.href = url;
          link.download =
            "frameingoa-pfp-frame.png";

          document.body.appendChild(link);

          link.click();

          document.body.removeChild(link);

          setTimeout(() => {
            URL.revokeObjectURL(url);
          }, 1000);
        }, "image/png");
      };

      image.onerror = () => {
        alert("Could not load profile image.");
      };

      image.src = photoUrl;

    } catch (error) {
      console.error(
        "PFP Frame download failed:",
        error
      );

      alert(
        "Unable to download the PFP Frame."
      );
    }
  };

  // ==========================================
  // SHARE ON X
  // ==========================================

  const shareOnX = () => {
    const text = encodeURIComponent(
      `Just created my FrameInGoa Builder Card! 🚀

I'm ${user?.fullName || "a builder"} — ${
        user?.role || "building cool things"
      }.

#FrameInGoa #HackerHouseGoa`
    );

    const url = encodeURIComponent(
      window.location.origin
    );

    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07140f]">

      {/* ======================================
          TROPICAL BACKGROUND
      ====================================== */}

      <TropicalBackground />

      {/* ======================================
          NAVBAR
      ====================================== */}

      <Navbar />

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <main
        className="
          relative
          z-10
          pt-32
          pb-20
        "
      >

        {/* ==================================
            PROGRESS
        ================================== */}

        <ProgressBar
          step={4}
          title="Your Identity"
        />

        {/* ==================================
            BUILDER CARD
        ================================== */}

        <div
          className="
            max-w-3xl
            mx-auto
            mt-12
            px-6
          "
        >

          <BuilderCard />

          {/* ==================================
              ACTION BUTTONS
          ================================== */}

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-3
              mt-8
            "
          >

            {/* DOWNLOAD BUILDER CARD */}

            <button
              type="button"
              onClick={downloadBuilderCard}
              className="
                flex-1
                h-12
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-white
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              ↓ Download Builder Card
            </button>

            {/* DOWNLOAD PFP FRAME */}

            <button
              type="button"
              onClick={downloadPFPFrame}
              className="
                flex-1
                h-12
                rounded-xl
                bg-gradient-to-r
                from-fuchsia-500
                to-purple-600
                text-white
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              ✦ Download PFP Frame
            </button>

          </div>

          {/* ==================================
              SHARE
          ================================== */}

          <button
            type="button"
            onClick={shareOnX}
            className="
              w-full
              mt-3
              h-12
              rounded-xl
              border
              border-cyan-400/60
              text-cyan-300
              font-semibold
              hover:bg-cyan-400/10
              transition
            "
          >
            ↗ Share on X
          </button>

          {/* ==================================
              FINISH
          ================================== */}

          <div className="flex justify-center mt-4">

            <button
              type="button"
              onClick={() => navigate("/success")}
              className="
                px-8
                h-12
                rounded-xl
                bg-gradient-to-r
                from-fuchsia-500
                via-purple-500
                to-cyan-500
                text-white
                font-semibold
                hover:scale-[1.03]
                transition
              "
            >
              Finish & Continue →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Identity;