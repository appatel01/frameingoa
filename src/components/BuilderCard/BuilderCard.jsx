import {
    Zap,
    PawPrint,
    Trophy,
    Palmtree,
} from "lucide-react";

function BuilderCard({
    cardRef,
    photoUrl,
    fullName,
    role,
    college,
}) {
    return (
        <section
            id="builder-card"
            ref={cardRef}
            className="retro-builder-card"
        >

            {/* =================================
                CARD TOP
            ================================= */}

            <div className="retro-card-header">

                <div>

                    <p className="retro-eyebrow">
                        HACKER HOUSE GOA
                    </p>

                    <h2>
                        BUILDER CARD
                    </h2>

                </div>


                {/* STAMP */}

                <div className="retro-stamp">

                    <Palmtree size={32} />

                    <strong>
                        #FrameInGoa
                    </strong>

                </div>

            </div>


            {/* =================================
                SUNSET DECORATION
            ================================= */}

            <div className="retro-sunset">

                <div className="retro-sun" />

                <div className="retro-hills">

                    🌴

                    <span>
                        🌴
                    </span>

                    🌴

                </div>

            </div>


            {/* =================================
                PROFILE PHOTO
            ================================= */}

            <div className="retro-profile-section">

                <div className="retro-photo-ring">

                    {photoUrl ? (

                        <img
                            src={photoUrl}
                            alt={fullName || "Builder"}
                            crossOrigin="anonymous"
                        />

                    ) : (

                        <div className="retro-photo-placeholder">

                            <div className="placeholder-sunset">

                                <span />
                                <span />

                            </div>

                        </div>

                    )}

                </div>

            </div>


            {/* =================================
                IDENTITY
            ================================= */}

            <div className="retro-identity-text">

                <div className="retro-name-decoration">

                    <span>
                        ✦
                    </span>

                    <div />

                    <span>
                        ✦
                    </span>

                </div>


                <h3>
                    {fullName || "YOUR NAME"}
                </h3>


                <div className="retro-role">

                    <span>
                        〰
                    </span>

                    <strong>
                        {role || "Your Role / Stack"}
                    </strong>

                    <span>
                        〰
                    </span>

                </div>


                <p className="retro-college">
                    {college || "Your College"}
                </p>

            </div>


            {/* =================================
                STAT CARDS
            ================================= */}

            <div className="retro-stats">


                {/* SCORE */}

                <div className="retro-stat">

                    <Zap size={34} />

                    <span>
                        BUILDER SCORE
                    </span>

                    <strong>
                        93
                    </strong>

                </div>


                {/* SPIRIT */}

                <div className="retro-stat">

                    <PawPrint size={34} />

                    <span>
                        SPIRIT ANIMAL
                    </span>

                    <strong>
                        Fox
                    </strong>

                </div>


                {/* TITLE */}

                <div className="retro-stat">

                    <Trophy size={34} />

                    <span>
                        BUILDER TITLE
                    </span>

                    <strong>
                        Prompt Wizard
                    </strong>

                </div>

            </div>


            {/* =================================
                CARD FOOTER
            ================================= */}

            <div className="retro-card-footer">

                <span>

                    🌴 Built with{" "}

                    <b>
                        ♥
                    </b>{" "}

                    at Hacker House Goa

                </span>


                <strong>
                    #FrameInGoa
                </strong>

            </div>

        </section>
    );
}

export default BuilderCard;