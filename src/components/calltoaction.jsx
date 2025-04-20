import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div>
      {/* Call To Action Start */}
      <section className="call-to-action">
        <div className="container text-center">
          <header className="section-header">
            <h3>Call to Action</h3>
            <p>
            Want to make a big splash online? Get in touch with us today and lets talk about how our creative team can help you turn your digital dreams into reality.
            Together, we can achieve amazing things.
            So what are you waiting for? Lets start building your success story!
            </p>
          </header>
          <Link className="cta-btn" to="/contact">
            Call To Action
          </Link>
        </div>
      </section>
      {/* Call To Action End */}
    </div>
  );
}

export default CallToAction;
