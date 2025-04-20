import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('https://sheetdb.io/api/v1/0i5i0g41onau5', {
        data: {
          subs: email
        }
      });
      setMessage('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Subscription failed.');
    }
  };

  return (
    <div>
      {/* Footer Start */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <h3>Tads Technologies</h3>
                <p>
                  At Tads Technologies, we are not just building websites;
                  we are crafting digital masterpieces. Our team of experts combines cutting-edge technology with artistic flair to create online experiences that captivate and convert.
                  Lets elevate your brand together.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>About Us</h4>
                <ul>
                  <li><i className="ion-md-arrow-dropright" /> <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                  <li><i className="ion-md-arrow-dropright" /> <Link to="/about">About us</Link></li>
                  <li><i className="ion-md-arrow-dropright" /> <Link to="/services">Our services</Link></li>
                  <li><i className="ion-md-arrow-dropright" /> <Link to="#">Terms &amp; condition</Link></li>
                  <li><i className="ion-md-arrow-dropright" /> <Link to="#">Privacy policy</Link></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <strong>Phone:</strong> +123-456-7890<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links">
                  <a href="#"><i className="ion-logo-twitter" /></a>
                  <a href="#"><i className="ion-logo-facebook" /></a>
                  <a href="#"><i className="ion-logo-linkedin" /></a>
                  <a href="#"><i className="ion-logo-instagram" /></a>
                  <a href="#"><i className="ion-logo-youtube" /></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Subscription</h4>
                <p>
                  Subscribe to stay updated with our latest news, tips, and exclusive offers.
                  Join our community to receive insights that keep you ahead in the digital world.
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="subs"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input type="submit" value="Subscribe" />
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            © Copyright  Tads Technologies. All Rights Reserved<br />
            Template By Tads Technologies
          </div>
        </div>
      </footer>
      {/* Footer End */}
      <a href="#" className="back-to-top">
        <i className="ion-md-arrow-dropup" />
      </a>
    </div>
  );
}

export default Footer;
