export default function PopularFlight() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 small">
        <div className="col">
          <h6 className="text-light fw-bold mb-3">Popular Domestic Routes</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Goa</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Mumbai to Delhi</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Kolkata</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Pune to Delhi</a></li>
          </ul>
        </div>

        <div className="col">
          <h6 className="fw-bold mb-3" style={{ visibility: "hidden" }}>Popular Domestic Routes</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Bangalore to Delhi</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Mumbai to Bangalore</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Chennai to Delhi</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Kolkata to Delhi</a></li>
          </ul>
        </div>

        <div className="col">
          <h6 className="fw-bold mb-3" style={{ visibility: "hidden" }}>Popular Domestic Routes</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Mumbai</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Bangalore</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
