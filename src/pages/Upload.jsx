import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import UploadBox from "../components/UploadBox/UploadBox";
import PreviewCard from "../components/PreviewCard/PreviewCard";
import ContinueButton from "../components/ContinueButton/ContinueButton";

function Upload() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-600/20 blur-[170px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 pt-32">

        <ProgressBar 
        step={1}
        title="Upload Headshot" />

        <div className="max-w-3xl mx-auto mt-10 px-6">

          <UploadBox />

          <PreviewCard />

          <ContinueButton />

        </div>

      </div>

    </div>
  );
}

export default Upload;