export default function Useful() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 small">
        <div className="col">
          <h6 className="text-light fw-bold mb-2">Useful Links</h6>
          <ul className="list-unstyled">
            <li>
              <a href="#" className="text-secondary text-decoration-none">Myntra</a>
            </li>
            {/* Add more if needed */}
            {/* <li><a href="#" className="text-secondary text-decoration-none">Amazon</a></li> */}
            {/* <li><a href="#" className="text-secondary text-decoration-none">Flipkart</a></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
