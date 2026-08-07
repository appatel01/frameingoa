function SocialInput({
    label,
    name,
    placeholder,
    value,
    onChange
}) {

    return (

        <div className="flex-1">

            <label className="block text-sm text-gray-300 mb-2">

                {label}

            </label>

            <input
                name={name}
                value={value}

                onChange={onChange}

                placeholder={placeholder}

                className="
                w-full
                rounded-xl
                bg-[#111827]
                border
                border-gray-700
                px-4
                py-3
                text-white
                outline-none
                focus:border-cyan-500
                "

            />

        </div>

    );

}

export default SocialInput;