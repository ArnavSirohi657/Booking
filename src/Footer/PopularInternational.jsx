export default function PopularInternational() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 small">
        <div className="col">
          <h6 className="text-light fw-bold mb-3">Popular International Routes</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Singapore</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Bangkok</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Mumbai to Dubai</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Dubai</a></li>
          </ul>
        </div>

        <div className="col">
          <h6 className="fw-bold mb-3" style={{ visibility: "hidden" }}>Popular International Routes</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to London</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Toronto</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to New York</a></li>
          </ul>
        </div>

        <div className="col">
          <h6 className="fw-bold mb-3" style={{ visibility: "hidden" }}>Popular International Routes</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Bangalore to Singapore</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Delhi to Paris</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
