import { CheckCircle2, Circle } from "lucide-react";

function StatusList({ current }) {

    const steps = [
        "Detecting Face",
        "Auto Cropping & Color Alignment",
        "Generating Builder Title",
        "Designing Builder Card",
        "Preparing Download",
    ];

    return (
        <div className="space-y-4">

        {steps.map((step, index) => (

            <div
            key={step}
            className="flex items-center gap-3"
            >

            {index < current ? (
                <CheckCircle2
                className="text-green-400"
                size={20}
                />
            ) : (
                <Circle
                className="text-gray-500"
                size={20}
                />
            )}

            <p
                className={`${
                index < current
                    ? "text-white"
                    : "text-gray-500"
                }`}
            >
                {step}
            </p>

            </div>

        ))}

        </div>
    );
}

export default StatusList;