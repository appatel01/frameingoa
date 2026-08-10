function TropicalBackground() {
    return (
        <>
            <div
                className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[520px]
                    bg-cover
                    bg-center
                    bg-no-repeat
                    pointer-events-none
                "
                style={{
                    backgroundImage: "url('/goa-hero.png')",
                }}
            />

            {/* readability overlay */}
            <div
                className="
                    absolute
                    top-0
                    left-0
                    right-0
                    h-[620px]
                    bg-black/10
                    pointer-events-none
                "
            />

            {/* bottom fade */}
            <div
                className="
                    absolute
                    top-[430px]
                    left-0
                    right-0
                    h-[100px]
                    bg-gradient-to-b
                    from-transparent
                    to-[#075C36]
                    pointer-events-none
                "
            />
        </>
    );
}

export default TropicalBackground;