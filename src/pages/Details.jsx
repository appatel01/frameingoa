import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Details() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#050816] flex justify-center items-center px-6">

      <div className="w-full max-w-lg bg-[#111827] rounded-3xl p-8 border border-gray-700">

        <h1 className="text-3xl text-white font-bold text-center">
          Builder Details
        </h1>

        <p className="text-gray-400 text-center mt-2 mb-8">
          Tell us about yourself.
        </p>

        {/* Name */}

        <input
          type="text"
          placeholder="Full Name"
          value={user.fullName}
          onChange={(e) =>
            setUser({
              ...user,
              fullName: e.target.value,
            })
          }
          className="w-full mb-5 p-4 rounded-xl bg-[#1F2937] text-white outline-none"
        />

        {/* Role */}

        <input
          type="text"
          placeholder="Role / Stack"
          value={user.role}
          onChange={(e) =>
            setUser({
              ...user,
              role: e.target.value,
            })
          }
          className="w-full mb-5 p-4 rounded-xl bg-[#1F2937] text-white outline-none"
        />

        {/* College */}

        <input
          type="text"
          placeholder="College"
          value={user.college}
          onChange={(e) =>
            setUser({
              ...user,
              college: e.target.value,
            })
          }
          className="w-full mb-5 p-4 rounded-xl bg-[#1F2937] text-white outline-none"
        />

        {/* Github */}

        <input
          type="text"
          placeholder="GitHub Username"
          value={user.github}
          onChange={(e) =>
            setUser({
              ...user,
              github: e.target.value,
            })
          }
          className="w-full mb-5 p-4 rounded-xl bg-[#1F2937] text-white outline-none"
        />

        {/* Twitter */}

        <input
          type="text"
          placeholder="X Username"
          value={user.twitter}
          onChange={(e) =>
            setUser({
              ...user,
              twitter: e.target.value,
            })
          }
          className="w-full mb-8 p-4 rounded-xl bg-[#1F2937] text-white outline-none"
        />

        <button
          onClick={() => navigate("/processing")}
          className="w-full p-4 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-500 text-white font-semibold"
        >
          Generate Identity →
        </button>

      </div>

    </div>
  );
}

export default Details;