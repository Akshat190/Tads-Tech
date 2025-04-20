function Services() {
  return (
    <div>
      {/* Services Section Start */}
      <section className="services">
        <div className="container">
          <header className="section-header">
            <h3>Services</h3>
            <p>
            Discover how we can help you make a splash online. Whether you need a custom website, a killer digital strategy, or something in between, we have got you covered.
            Lets work together to create a digital presence thats as unique as your business.
            </p>
          </header>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="single-service">
                <img className="icons" src="img/web-design.png" />
                <h4>
                  <a href>Web Development</a>
                </h4>
                <p>
                Need a website thats not just pretty, but also works hard for your business? We are the web development experts who can create a site thats both visually stunning and super effective.
                 Lets build something amazing together.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="single-service">
                <img className="icons" src="img/freelancer.png" />
                <h4>
                  <a href>Freelancing</a>
                </h4>
                <p>
                Need a freelancer who can get the job done without breaking a sweat? We offer flexible and professional freelancing services that deliver top-notch results, no matter what your project is. Lets team up and make it happen!
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="single-service">
                <img className="icons" src="img/audio.png" />
                <h4>
                  <a href>Web Design</a>
                </h4>
                <p>
                Want a website thats as eye-catching as it is effective? Our creative web design services can help you create a digital masterpiece that leaves a lasting impression.
                 Lets make your brand shine online.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="single-service">
                <img className="icons" src="img/editing.jpg" />
                <h4>
                  <a href>Video Editing</a>
                </h4>
                <p>
                Turn your moments into a cinematic experience with our expert video editing.
                We enhance every emotion and story, ensuring your footage shines with clarity and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}
    </div>
  );
}

export default Services;
