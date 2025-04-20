import { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    const filterButtons = document.querySelectorAll('#portfolio-flters li');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('filter-active'));
        button.classList.add('filter-active');

        portfolioItems.forEach(item => {
          if (filter === '*' || item.classList.contains(filter.substring(1))) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }, []);
  return (
    <div>
      {/* Portfolio Section Start */}
      <section className="portfolio">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Our Portfolio</h3>
            <p>
              Explore our portfolio to see how we’ve transformed ideas into stunning digital experiences.
              From dynamic websites to engaging applications, our work showcases our commitment to quality and innovation.
              Discover the projects that highlight our expertise and creativity.
            </p>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                {/* <li data-filter=".web-des">Web Design</li> */}
                <li data-filter=".web-dev">Web Development</li>
                {/* <li data-filter=".app-des">Graphic Design</li>
                <li data-filter=".app-dev">FreeLancing</li>
                <li data-filter=".logo-des">Logo Making</li> */}
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-1.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-1.jpg"
                    data-lightbox="portfolio"
                    data-title="Pet care Palace"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://petpalacecare.netlify.app/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>Pet Care </h4>
                  <p>Web Developement</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-2.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-2.jpg"
                    data-lightbox="portfolio"
                    data-title="Tesla Webpage"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://intialtesla.netlify.app/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>Tesla Webpage</h4>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-3.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-3.jpg"
                    data-lightbox="portfolio"
                    data-title="Novel Website"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://novelnexus.netlify.app/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>Novel Nexus</h4>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-4.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-4.jpg"
                    data-lightbox="portfolio"
                    data-title="Clothing Brand"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://akshat190.github.io/Ecommerce-website/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>Clothing Store</h4>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-5.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-5.jpg"
                    data-lightbox="portfolio"
                    data-title="Motel Palace"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://motelpalace.netlify.app/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>Hotel Booking</h4>
                  <p>Web Developement</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-6.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-6.jpg"
                    data-lightbox="portfolio"
                    data-title="Hotel Booking"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://voyawander-vacation.netlify.app/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>Voyawander Hotel Booking</h4>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item web-dev">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="img/portfolio-7.jpg"
                    className="img-fluid"
                    alt="Portfolio"
                  />
                  <a
                    href="img/portfolio-7.jpg"
                    data-lightbox="portfolio"
                    data-title="Wonted Novel"
                    className="link-preview"
                    title="Preview"
                  >
                    <i className="ion-md-eye" />
                  </a>
                  <a href="https://wonted-novel.netlify.app/" className="link-details" title="More Details" target="_blank">
                    <i className="ion-md-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>WOnted Novel</h4>
                  <p>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Section End */}
    </div>
  );
}

export default Portfolio;
