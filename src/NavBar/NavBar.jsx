
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary "
            >
            <div className="container-fluid">
               

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse pe-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto me-3 gap-5">
                        
                        <Link className="nav-link text-dark" to="/business">Buisness</Link>
                        
                        <Link className="nav-link text-dark" to="/support">Support</Link>
                        <Link className="nav-link text-dark" to="/">Home</Link>
                        
                        
                    </div>
                </div>
            </div>
        </nav>

        </div>
    )
}