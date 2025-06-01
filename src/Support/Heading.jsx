export default function Heading() {
    return (
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Text and Form Column */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Welcome to Trip Support</h2>
            <p className="text-muted mb-4">
              Find answers to all your queries, call us at <strong>+91 9595333333</strong>
            </p>
  
            <div className="p-4 border rounded shadow-sm bg-light">
              <h4 className="mb-3" style={{ fontSize: "20px" }}>
                Want to know about your bookings? Help us find your trips
              </h4>
              <p className="text-muted mb-4">Give us any traveller's Trip ID to check trip details</p>
  
              <form>
                <div className="mb-3">
                  <label htmlFor="tripId" className="form-label">Trip ID</label>
                  <input type="text" className="form-control" id="tripId" placeholder="Enter trip ID" />
                </div>
  
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">6-digit OTP</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="otp" placeholder="Enter OTP received" />
                    <button type="button" className="btn btn-primary">Get OTP</button>
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
  
          {/* Image Column */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img src="/TripDetail.png" alt="Trip Details" className="img-fluid" style={{ maxHeight: "400px" }} />
          </div>
        </div>
      </div>
    );
  }
  