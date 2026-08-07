import Navbar from "../components/Navbar/Navbar";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import DetailsForm from "../components/DetailsForm/DetailsForm";

function Details() {

    return (

        <div className="relative min-h-screen bg-[#050816] overflow-hidden">

            <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-purple-600/20 blur-[170px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[170px] rounded-full"></div>

            <Navbar />

            <div className="relative z-10 pt-32">

                <ProgressBar 
                step={2}
                title="Builder Information"/>

                <div className="w-full max-w-[650px] mx-auto mt-10 px-6">

                    <DetailsForm />

                </div>

            </div>

        </div>

    );

}

export default Details;