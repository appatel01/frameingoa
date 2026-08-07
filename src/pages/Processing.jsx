import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/identity");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#050816] flex flex-col justify-center items-center">

      {/* Spinner */}
      <div className="w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-white text-3xl font-bold mt-8">
        AI is creating your Builder Identity...
      </h1>

      <div className="mt-8 space-y-3 text-gray-300">

        <p>✅ Detecting Face</p>
        <p>✅ Auto Cropping</p>
        <p>⏳ Generating Builder Title</p>
        <p>⏳ Creating Builder Card</p>

      </div>

    </div>
  );
}

export default Processing;