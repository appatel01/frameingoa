import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import BuilderCard from "../components/BuilderCard/BuilderCard";

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

    // Wait for React rendering
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
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    console.log("Generating Builder Card PNG...");

    const dataUrl = await domToPng(card, {
      scale: 2,
      backgroundColor: "#101321",
      debug: true,
    });

    console.log("PNG generated successfully.");

    const link = document.createElement("a");

    link.download = "frameingoa-builder-card.png";
    link.href = dataUrl;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Builder Card downloaded successfully!");
  } catch (error) {
    console.error(
      "BUILDER CARD DOWNLOAD ERROR:",
      error
    );

    alert(
      "Unable to download the Builder Card. Please check the browser console."
    );
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

    try {
      const canvas = document.createElement("canvas");

      const size = 1000;

      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        throw new Error("Canvas is not supported.");
      }

      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, size, size);

      const photoUrl =
        typeof photo === "string"
          ? photo
          : URL.createObjectURL(photo);

      const image = new Image();

      image.crossOrigin = "anonymous";

      image.onload = () => {
        const center = size / 2;
        const radius = 360;

        // Circular photo
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
        const imageRatio = image.width / image.height;

        let drawWidth;
        let drawHeight;
        let offsetX;
        let offsetY;

        if (imageRatio > 1) {
          drawHeight = radius * 2;
          drawWidth = drawHeight * imageRatio;

          offsetX = center - drawWidth / 2;
          offsetY = center - drawHeight / 2;
        } else {
          drawWidth = radius * 2;
          drawHeight = drawWidth / imageRatio;

          offsetX = center - drawWidth / 2;
          offsetY = center - drawHeight / 2;
        }

        ctx.drawImage(
          image,
          offsetX,
          offsetY,
          drawWidth,
          drawHeight
        );

        ctx.restore();

        // Cyan frame
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

        // Purple frame
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

        // Text
        ctx.font = "bold 55px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "#FFFFFF";

        ctx.fillText(
          "FrameInGoa",
          center,
          900
        );

        // Download
        canvas.toBlob((blob) => {
          if (!blob) {
            alert("Could not create PFP frame.");
            return;
          }

          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");

          link.href = url;
          link.download = "frameingoa-pfp-frame.png";

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setTimeout(() => {
            URL.revokeObjectURL(url);
          }, 1000);
        }, "image/png");

        // Cleanup temporary File URL
        if (typeof photo !== "string") {
          URL.revokeObjectURL(photoUrl);
        }
      };

      image.onerror = () => {
        alert("Could not load profile image.");

        if (typeof photo !== "string") {
          URL.revokeObjectURL(photoUrl);
        }
      };

      image.src = photoUrl;
    } catch (error) {
      console.error(
        "PFP Frame download failed:",
        error
      );

      alert("Unable to download the PFP Frame.");
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
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          w-[450px]
          h-[450px]
          bg-purple-600/20
          blur-[170px]
          rounded-full
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          w-[450px]
          h-[450px]
          bg-cyan-500/20
          blur-[170px]
          rounded-full
        "
      />

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <main
        className="
          relative
          z-10
          pt-32
          pb-20
        "
      >

        {/* Progress */}

        <ProgressBar
          step={4}
          title="Your Identity"
        />

        {/* Builder Card */}

        <div
          className="
            max-w-3xl
            mx-auto
            mt-12
            px-6
          "
        >

          <BuilderCard />

          {/* Action Buttons */}

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

            {/* Download Builder Card */}

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

            {/* Download PFP Frame */}

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

          {/* Share */}

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

          {/* Finish */}

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