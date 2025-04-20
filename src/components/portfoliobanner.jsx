import { Link } from 'react-router-dom';

function Banner2() {
  return (
    <div>
      {/* Banner Section Start*/}
      <section className="banner">
        <div className="container">
          <div className="col-lg-12">
            <div className="banner-nav">
              <div className="banner-box">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}
    </div>
  );
}

export default Banner2;
