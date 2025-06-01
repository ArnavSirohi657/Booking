import Hero from "./Hero";

import Banks from "./Banks";
import PopularDestination from "./PopularDestination";
import About from "./About";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Hero />
      <Banks />
      <div className="my-5">
        <PopularDestination />
      </div>
      <div className="my-5">
        <About />
      </div>
      <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <Footer />
    </div>
  );
}
