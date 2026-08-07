import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import UploadBox from "../components/UploadBox/UploadBox";

function Upload() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070A16] via-[#0B1020] to-[#03060F]">

      <Navbar />

      <div className="flex justify-center items-center min-h-[85vh] px-6">

        <div className="w-full max-w-5xl">

          <ProgressBar />

          <div className="flex justify-center">

            <UploadBox />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Upload;