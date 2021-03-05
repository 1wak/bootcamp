import React from "react";

const CTA = () => {
  return (
    <section className="row mt-4">
      <div>
        <div className="col-12">
          <h3>Request Offer</h3>
          <input type="email" className="p-2" placeholder="Email address" />
        </div>
        <div className="col-12 mt-1">
          <button className="p-1">Submit</button>
          <small className="d-block">Don't worry we'll not spam.</small>
        </div>
      </div>
    </section>
  );
};

export default CTA;
