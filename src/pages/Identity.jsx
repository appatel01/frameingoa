import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Identity() {

  const { photo, user } = useContext(AppContext);

  return (

    <div className="min-h-screen bg-[#050816] flex justify-center items-center">

      <div className="bg-[#111827] rounded-3xl p-8 w-[400px]">

        <div className="flex justify-center">

          <img
            src={photo}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-fuchsia-500"
          />

        </div>

        <h1 className="text-white text-3xl font-bold text-center mt-6">
          {user.fullName}
        </h1>

        <p className="text-cyan-400 text-center mt-2">
          {user.role}
        </p>

        <p className="text-gray-400 text-center mt-2">
          {user.college}
        </p>

        <div className="mt-8 space-y-2">

          <p className="text-white">
            GitHub: {user.github}
          </p>

          <p className="text-white">
            X: {user.twitter}
          </p>

        </div>

      </div>

    </div>

  );
}

export default Identity;