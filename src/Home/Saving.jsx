import { FaCoins, FaTags, FaUserShield, FaGift } from "react-icons/fa";

export default function Saving() {
    return (
        <div className="container p-4 border rounded bg-white shadow-sm">
            <h5 className="fw-bold mb-4 text-dark">Never miss a saving</h5>

            <div className="row gy-3">
                <div className="col-12 d-flex align-items-start">
                    <FaCoins className="me-3 text-warning fs-4" />
                    <p className="mb-0 text-dark">Discounts up to ₹1000 with SuperCoins</p>
                </div>

                <div className="col-12 d-flex align-items-start">
                    <FaTags className="me-3 text-danger fs-4" />
                    <p className="mb-0 text-dark">Up to 10% extra discount as Cleartrip loyalty benefit</p>
                </div>

                <div className="col-12 d-flex align-items-start">
                    <FaUserShield className="me-3 text-primary fs-4" />
                    <p className="mb-0 text-dark">Up to 10% extra discount for Flipkart & Myntra shoppers</p>
                </div>

                <div className="col-12 d-flex align-items-start">
                    <FaGift className="me-3 text-success fs-4" />
                    <p className="mb-0 text-dark">Exclusive sign-in coupons</p>
                </div>
            </div>

            <button className="btn btn-dark w-100 mt-4 fw-semibold">Log in now</button>
        </div>
    );
}
