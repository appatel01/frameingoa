function TabSwitcher({ activeTab, setActiveTab }) {
    return (
        <div className="flex justify-center mb-8">

        <div className="flex bg-[#1A2032] rounded-xl p-1 border border-[#2B3147]">

            <button
            onClick={() => setActiveTab("card")}
            className={`px-6 py-2 rounded-lg transition-all duration-300 font-medium
            ${
                activeTab === "card"
                ? "bg-[#2D3448] text-white"
                : "text-gray-400"
            }`}
            >
            Builder Card
            </button>

            <button
            onClick={() => setActiveTab("pfp")}
            className={`px-6 py-2 rounded-lg transition-all duration-300 font-medium
            ${
                activeTab === "pfp"
                ? "bg-[#2D3448] text-white"
                : "text-gray-400"
            }`}
            >
            PFP Frame
            </button>

        </div>

        </div>
    );
}

export default TabSwitcher;