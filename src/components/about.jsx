import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* About Us Section Start*/}
      <section id="abouts" className="about">
        <div className="container">
          <header className="section-header">
            <h3>About Us</h3>
            <p>
              At Tads Technologies, we dont just build websites; we create digital experiences that make a difference.
              Our team of talented experts is passionate about turning your ideas into stunning, results-driven websites.
              Were committed to delivering custom solutions that perfectly capture your vision and help you stand out online.
              Lets work together to build something amazing.
            </p>
          </header>
          <div className="row align-items-center about-row">
            <div className="col-md-6">
              <img src="img/about.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="blue-box">
                <h2 className="title">
                  <a href="#">Welcome to Our Site</a>
                </h2>
              </div>
              <p>
                Hey there! Welcome to Tads Technologies.
                Were so glad youre here. Take a look around and see how our expert web design and development team can turn your digital dreams into reality.
                Got questions or ideas? Dont hesitate to reach out—were just a click away from helping you achieve your online goals!
              </p>
              <div className="read-more">
                <Link to="/about">Read More</Link>
              </div>
            </div>
          </div>
          <div className="row about-cols">
            <div className="col-md-4">
              <div className="about-col">
                <div className="img">
                  <img src="img/about-mission.jpg" alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-disc" />
                  </div>
                </div>
                <h2 className="title">
                  <Link to="about">Our Mission</Link>
                </h2>
                <p>
                  Our goal is simple: to create amazing websites that help our clients thrive online.
                  Were passionate about doing things the right way, combining creativity and technical know-how to build solutions that perfectly fit your needs. 
                  Lets work together to make your presence extraordinary.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col">
                <div className="img">
                  <img src="img/about-vision.jpg" alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-eye" />
                  </div>
                </div>
                <h2 className="title">
                  <Link to='about'>Our Vision</Link>
                </h2>
                <p>
                  We want to create websites that dont just look good; they inspire and captivate.
                  Were always pushing the boundaries of whats possible, using the latest technology and creative thinking to deliver solutions that leave a lasting impression.
                  Lets build something truly exceptional together.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-col">
                <div className="img">
                  <img src="img/about-objective.jpg" alt="" className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-options" />
                  </div>
                </div>
                <h2 className="title">
                  <Link to='about'>Our Objective</Link>
                </h2>
                <p>
                  Were all about creating digital experiences that wow our customers and help your business grow.
                  Our focus is on delivering top-notch, creative solutions that are perfectly aligned with your goals.
                  Lets work together to build a digital presence that sets you apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section End */}
    </div>
  );
}

export default About;
