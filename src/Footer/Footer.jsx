import OtherLink from "./OtherLink";
import PopularFlight from "./PopularFlight";
import PopularHotels from "./PopularHotels";
import PopularInternational from "./PopularInternational";
import Useful from "./Useful";

export default function Footer() {
    return (
        <div
            style={{
                backgroundColor: "#1a1a2e", // deep navy/dark violet
                color: "#f1f1f1",           // light text
                padding: "3rem 1rem",
                marginTop: "3rem",
                borderTop: "1px solid rgba(255,255,255,0.1)"
            }}
        >
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col">
                        <h5>About Us</h5>
                    </div>
                    <div className="col">
                        <h5>Careers</h5>
                    </div>
                    <div className="col">
                        <h5>FAQs</h5>
                    </div>
                    <div className="col">
                        <h5>Support</h5>
                    </div>
                    <div className="col">
                        <h5>Collections</h5>
                    </div>
                    <div className="col">
                        <h5>ClearTrip for Business</h5>
                    </div>
                    <div className="col">
                        <h5>Gift Cards</h5>
                    </div>
                </div>

                <div className="row mt-4">
                    <p className="text-center text-secondary small">
                        © 2025 Cleartrip Pvt. Ltd. · Privacy · Security · Terms of Use · Grievance Redressal
                    </p>
                </div>

                <hr style={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />

                <PopularFlight />
                <br /><br />
                <PopularInternational />
                <br /><br />
                <PopularHotels />
                <br /><br />
                <OtherLink />
                <br /><br />
                <Useful />
            </div>
        </div>
    );
}
