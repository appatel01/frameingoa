import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import BuilderCard from "../components/BuilderCard/BuilderCard";

import * as htmlToImage from "html-to-image";

function Identity() {
  const { photo, user } = useContext(AppContext);
  const navigate = useNavigate();

  console.log("PHOTO =", photo);
  console.log("USER =", user);

  // ==============================
  // Download Builder Card
  // ==============================
  const downloadBuilderCard = async () => {
    const card = document.getElementById("builder-card");

    if (!card) {
      console.error("Builder card not found");
      return;
    }

    try {
      const dataUrl = await htmlToImage.toPng(card, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const link = document.createElement("a");

      link.download = "frameingoa-builder-card.png";
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error("Builder Card download failed:", error);
      alert("Unable to download the Builder Card.");
    }
  };

  // ==============================
  // Download PFP Frame
  // ==============================
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

    // Background
    ctx.fillStyle = "#050816";
    ctx.fillRect(0, 0, size, size);

    // Load uploaded photo
    const image = new Image();

    image.crossOrigin = "anonymous";

    image.onload = () => {
      // Circular photo area
      const center = size / 2;
      const radius = 360;

      ctx.save();

      ctx.beginPath();
      ctx.arc(center, center, radius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      // Cover image inside circle
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

      // Cyan outer frame
      ctx.beginPath();
      ctx.arc(center, center, radius + 15, 0, Math.PI * 2);

      ctx.lineWidth = 30;
      ctx.strokeStyle = "#22D3EE";
      ctx.stroke();

      // Purple outer glow
      ctx.beginPath();
      ctx.arc(center, center, radius + 32, 0, Math.PI * 2);

      ctx.lineWidth = 8;
      ctx.strokeStyle = "#A855F7";
      ctx.stroke();

      // FrameInGoa text
      ctx.font = "bold 55px Arial";
      ctx.textAlign = "center";
      ctx.fillStyle = "#FFFFFF";

      ctx.fillText("FrameInGoa", center, 900);

      // Download
      canvas.toBlob((blob) => {
        if (!blob) {
          throw new Error("Could not create PFP frame.");
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
    };

    image.onerror = () => {
      throw new Error("Could not load profile image.");
    };

    image.src = photo;

  } catch (error) {
    console.error("PFP Frame download failed:", error);
    alert("Unable to download the PFP Frame.");
  }
};

  const shareOnX = () => {
      const text = `🚀 I just created my Builder Card on FrameInGoa!

    👤 ${user.fullName}
    💻 ${user.role}
    🎓 ${user.college}

    #FrameInGoa #HackerHouseGoa`;

      const shareUrl =
        "https://x.com/intent/post?text=" + encodeURIComponent(text);

      window.open(
        shareUrl,
        "_blank",
        "width=600,height=500"
      );
    };

  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-600/20 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-32">

        {/* Progress */}
        <ProgressBar
          step={4}
          title="Your Identity"
        />

        {/* Builder Card */}
        <div className="max-w-3xl mx-auto mt-12 px-6">

          <BuilderCard />

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

            {/* Download Builder Card */}
            <button
              onClick={downloadBuilderCard}
              className="
                px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              Download Builder Card
            </button>

            {/* Download PFP Frame */}
            <button
              onClick={downloadPFPFrame}
              className="
                px-6
                py-3
                rounded-xl
                bg-gradient-to-r
                from-fuchsia-600
                to-purple-600
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              Download PFP Frame
            </button>

          </div>

          {/* Share */}
          <div className="flex justify-center mt-5">

            <button
              onClick={() => {
                const text = encodeURIComponent(
                  `Just created my FrameInGoa Builder Card! 🚀\n\nI'm ${user.fullName || "a builder"} — ${user.role || "building cool things"}.\n\n#FrameInGoa #HackerHouseGoa`
                );

                const url = encodeURIComponent(window.location.origin);

                window.open(
                  `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="
                px-8
                py-3
                rounded-xl
                border
                border-cyan-400
                text-cyan-400
                hover:bg-cyan-400
                hover:text-black
                transition
              "
            >
              Share on X
            </button>
          </div>

          <div className="flex justify-center mt-5">

  <button
    onClick={() => navigate("/success")}
        className="
          px-8
          py-3
          rounded-xl
          bg-gradient-to-r
          from-fuchsia-600
          to-cyan-500
          text-white
          font-semibold
          hover:scale-105
          transition
        "
      >
        Finish & Continue →
      </button>
    </div>
        </div>

      </div>

    </div>
  );
}

export default Identity;