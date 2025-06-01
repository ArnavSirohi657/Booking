export default function OtherLink() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 small">
        <div className="col">
          <h6 className="text-light fw-bold mb-3">Other Popular Links</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Cheap air tickets</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Flights tickets</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">India Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Cheap domestic air tickets</a></li>
          </ul>
        </div>

        <div className="col">
          <h6 className="text-light fw-bold mb-3" style={{ visibility: "hidden" }}>Other Popular Links</h6> {/* Keeps alignment but hides visually */}
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Domestic Airlines in India</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Mumbai Bangalore flights</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">International Airlines</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Holiday Package</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
