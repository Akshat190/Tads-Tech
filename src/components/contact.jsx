import { useEffect, useState } from "react";

function Contact() {
  const [showMessage, setShowMessage] = useState(""); // State to control message visibility

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target);

    // Convert form data to JSON format
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"), 
      message: formData.get("message"),
    };

    // Send the data to the SheetDB API
    try {
      const response = await fetch("https://sheetdb.io/api/v1/0i5i0g41onau5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [data],
        }),
      });

      if (response.ok) {
        setShowMessage("Your message has been sent successfully!");
        event.target.reset();
      } else {
        throw new Error("Failed to send the message");
      }
    } catch (error) {
      console.error("Error sending data to SheetDB:", error);
      setShowMessage("Failed to send your message. Please try again.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
  }, []);

  return (
    <div>
      {/* Contact Section Start */}
      <section className="contact">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Contact Us</h3>
            <p>
              If you have any questions or need assistance, we are here to
              help! Please reach out to us at Tads Technologies, or simply fill out
              the form below, and we’ll get back to you as soon as possible.
            </p>
          </div>
          <div className="row contact-info">
            <div className="col-md-4">
              <div className="contact-address">
                <i className="ion-md-pin" />
                <h3>Address</h3>
                <address>Ahmedabad, Gujarat, India</address>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-phone">
                <i className="ion-md-call" />
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:+123-456-789">+91-75750-96359</a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-email">
                <i className="ion-md-mail" />
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@example.com">etheriummercedes@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.15049961975!2d72.5797426!3d23.0202434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1723566015588!5m2!1sen!2sin"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form">
                <form className="contactForm" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text" 
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Message"
                      name="message"
                      required
                    />
                  </div>
                  <div>
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {showMessage && (
            <div className={`alert mt-3 ${showMessage.includes("successfully") ? "alert-success" : "alert-danger"}`} role="alert">
              {showMessage}
            </div>
          )}
        </div>
      </section>
      {/* Contact Section End */}
    </div>
  );
}

export default Contact;
