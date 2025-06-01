
import Info from "./Info";
import Saving from "./Saving";

export default function Hero() {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <h1>So, where to?</h1>
                <p>Plan your trip with us</p>
            </div>

            <div className="d-flex flex-wrap gap-4 justify-content-center mb-5">
                <Info name={"Flights"} image={"/AeroPlane.jpg"} content={"Discover the easiest way to book domestic and international flights at the best prices. Whether you're planning a quick getaway, a business trip, or a long vacation"} />
                <Info name={"Hotels"}  image={"/HotelMain.jpeg"} content={"Whether you're traveling for business or leisure, we help you find the right place to stay—at the right price. Explore thousands of hotels across India and around the world"}/>
                <Info  name={"Buses"}  image={"/BusMain.jpeg"} content={"Looking for a comfortable and budget-friendly way to travel? Discover seamless bus booking options across India"}/>
                <Info name={"Trains"}  image={"/TrainMain.jpeg"} content={"Travel across India’s vast rail network with a smooth and reliable booking experience. Enjoy:"}/>
                <Info  name={"Packages"}  image={"/TripDetail.png"} content={"Make your travel dreams come true with thoughtfully designed packages for every kind of traveler. Enjoy"} />
            </div>
            <Saving />
        </div>
    );
}
