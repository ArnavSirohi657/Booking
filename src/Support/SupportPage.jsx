import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Heading from "./Heading";
import FAQ from "./FAQ";

export default function SupportPage() {
  return (
    <div
      className="min-vh-100"
      style={{
        background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        color: "white",
        minHeight: "100vh",
      }}
    >
      
      <Heading />
      <FAQ />
      <br />
      <hr />
      <br />
      <Footer />
    </div>
  );
}
