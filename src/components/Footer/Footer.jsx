function Footer() {
    return (
        <footer className="goa-footer">

            {/* Coconut trees */}
            <img
                src="/coconut-trees.png"
                alt=""
                className="footer-coconut-trees"
            />

            {/* Footer content */}
            <div className="goa-footer-content">

                <h2 className="footer-brand">
                    FRAME<span>IN</span>गोवा
                </h2>

                <p className="mt-3 text-sm font-semibold tracking-[0.3em] text-[#FFD900]">
                    BUILD • BEACH • CREATE
                </p>

                <p className="mt-8 text-xs text-[#FFF7D6]/70">
                    गोवा, INDIA • 2026
                </p>

            </div>

        </footer>
    );
}

export default Footer;