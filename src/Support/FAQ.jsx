export default function FAQ() {
  return (
    <div className="container my-5">
      <h2 className="text-primary fw-bold mb-4">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {/* Flight Cancellation */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How do I cancel my flight?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can cancel your flight from the “My Trips” section by entering your Trip ID and registered email/phone number. Cancellation charges may apply based on the airline's policy.
            </div>
          </div>
        </div>

        {/* Flight Reschedule */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I reschedule my flight?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              You can reschedule your flight through the “Manage Booking” section. Select the new date and pay the fare difference (if applicable).
            </div>
          </div>
        </div>

        {/* Hotel FAQs */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I modify or cancel a hotel booking?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Hotel bookings can be managed through the “My Trips” section. Policies vary by hotel, so check cancellation rules before proceeding.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
