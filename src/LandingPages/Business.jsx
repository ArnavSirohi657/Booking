import BusinessPage from "../Business/BusinessPage";
import Footer from "../Footer/Footer";

export default function Business() {
    return (
        <div
            style={{
                background: "linear-gradient(to right, #1e3c72, #2a5298)", // Deep elegant blue
                minHeight: "100vh",
                paddingTop: "3rem",
                paddingBottom: "3rem",
                borderRadius: "0", // Full-width section; remove rounding if it's outer
            }}
        >
            <div
                className="container py-5 px-4"
                style={{
                    background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", // subtle glass effect
                    borderRadius: "16px",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    color: "white",
                }}
            >
                <BusinessPage />
                <br /> <br />
                <hr style={{ borderColor: "rgba(255, 255, 255, 0.2)" }} />
                <br /> <br />
                <Footer />
            </div>
        </div>
    );
}
