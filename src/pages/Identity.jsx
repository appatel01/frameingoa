import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import BuilderCard from "../components/BuilderCard/BuilderCard";
import * as htmlToImage from "html-to-image";

function Identity() {
  const downloadBuilderCard = async () => {
  const card = document.getElementById("builder-card");

  if (!card) return;

  const dataUrl = await htmlToImage.toPng(card);

  const link = document.createElement("a");
  link.download = "builder-card.png";
  link.href = dataUrl;
  link.click();
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

        <ProgressBar
          step={4}
          title="Your Identity"
        />

        {/* Builder Card */}
        <div className="max-w-3xl mx-auto mt-12 px-6">

          <BuilderCard />

          {/* Action Buttons */}

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

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

            <button
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

          <div className="flex justify-center mt-5">

            <button
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

        </div>

      </div>

    </div>
  );
}

export default Identity;