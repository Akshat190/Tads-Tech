import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Carousell() {
  return (
    <div>
      {/* Slider Section Start*/}
      <section className="slider">
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/slider-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Web Development</h2>
              <p>
              Ready to turn your ideas into a stunning website? Our expert team can create a responsive, user-friendly site that not only looks great but also helps you connect with your audience and achieve your goals.
              Lets build something amazing together!
              </p>
              <Link to="/portfolio" className="btn-get-started">
                Get Started
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/slider-2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2>Web Design</h2>
              <p>
              Make a statement with our custom web design.
              Well create a visually stunning, user-friendly website that captures your brands unique personality and helps you connect with your audience.
              Lets bring your digital vision to life together.


              </p>
              <Link to="/portfolio" className="btn-get-started">
                Get Started
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="img/slider-3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>Freelancing</h2>
              <p>
              Ready to take your project to the next level? As a dedicated freelancer, I specialize in creating innovative web design and development solutions that perfectly fit your unique needs.
               Lets work together to build something truly exceptional.
              </p>
              <Link to="/portfolio" className="btn-get-started">
                Get Started
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Slider Section End*/}
    </div>
  );
}

export default Carousell;
