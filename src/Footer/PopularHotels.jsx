export default function PopularHotels() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 small">
        <div className="col">
          <h6 className="text-light fw-bold mb-3">Popular Hotel Destinations</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Goa Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Mumbai Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Bangalore Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Chennai Hotels</a></li>
          </ul>
        </div>

        <div className="col">
          <h6 className="fw-bold mb-3" style={{ visibility: "hidden" }}>Popular Hotel Destinations</h6>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none">Nainital Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Jaipur Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Manali Hotels</a></li>
            <li><a href="#" className="text-secondary text-decoration-none">Shimla Hotels</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
