import { motion } from "framer-motion";

function FeatureCard({
    icon,
    number,
    title,
    description,
    background,
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
            }}
            whileHover={{
                y: -6,
            }}
            className="goa-feature-card"
        >

            <img
                src={background}
                alt={title}
                className="goa-feature-card-image"
            />

            <div className="goa-feature-card-overlay" />

            <div className="goa-feature-number">
                {number}
            </div>

            <div className="goa-feature-icon">
                {icon}
            </div>

            <div className="goa-feature-content">

                <h3>
                    {title}
                </h3>

                <p>
                    {description}
                </p>

            </div>

        </motion.div>
    );
}

export default FeatureCard;