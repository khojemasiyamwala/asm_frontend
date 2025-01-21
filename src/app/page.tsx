"use client";
import Testimonial from "../../components/home/testimonial";
import OurServices from "../../components/home/ourServices";
import WorkedWith from "../../components/home/WorkedWith";
export default function Home() {
  return (
    <>
      <div
        id="minimal-bootstrap-carousel"
        className="carousel slide carousel-fade slider-content-style-four slider-home-four"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#minimal-bootstrap-carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#minimal-bootstrap-carousel" data-slide-to="1"></li>
          <li data-target="#minimal-bootstrap-carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div
            className="carousel-item active slide-1"
            style={{
              backgroundImage: "url(images/banner-4-1.jpg)",
              backgroundPosition: "center left",
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="box valign-middle">
                  <div className="content text-center">
                    <h3 data-animation="animated fadeInUp">
                      Lifting Your Potential: Innovative Crane Solutions for
                      Every Need
                    </h3>
                    <a
                      data-animation="animated fadeInDown"
                      href="#"
                      className="thm-btn"
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide-2"
            style={{
              backgroundImage: "url(images/banner-4-2.jpg)",
              backgroundPosition: "top center",
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="box valign-middle">
                  <div className="content text-center">
                    <h3 data-animation="animated fadeInUp">
                      Genuine Quality. Uninterrupted Operation. Genuine Crane
                      Spare Parts.
                    </h3>
                    <a
                      data-animation="animated fadeInDown"
                      href="#"
                      className="thm-btn"
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide-3"
            style={{
              backgroundImage: "url(images/banner-4-2.jpg)",
              backgroundPosition: "top center",
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="box valign-middle">
                  <div className="content text-center">
                    <h3 data-animation="animated fadeInUp">
                      Expert Care for Lifelong Performance: Unmatched Crane
                      Maintenance and Support.
                    </h3>
                    <a
                      data-animation="animated fadeInDown"
                      href="#"
                      className="thm-btn"
                    >
                      Discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev carousel-control-one-prev"
          href="#minimal-bootstrap-carousel"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left"></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next carousel-control-one-next"
          href="#minimal-bootstrap-carousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right"></i>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <section className="about-style-five sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-block text-center">
                <div className="sec-title mb-0">
                  <span className="tag-line">get to know us</span>
                  <h2>
                    Welcome to Our <br /> Industrial Business
                  </h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  lorem ipsum is simply free text available in the martker now
                  you need to be sure there isn't anything embarrassing hidden
                  in the middle of text.{" "}
                </p>
                <div className="phone-block">
                  <div className="icon-block">
                    <i className="facdori-icon-phone-call-1"></i>
                  </div>
                  <p>Let’s Call us to Get a Free Estimate</p>
                  <h3>666 888 0000</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-block">
                <img src="images/about-2-1.jpg" alt="Awesome Image" />
              </div>
              <div className="image-block-text gray-bg">
                <h4>
                  We have 25+ years of experiences for give you better results.
                </h4>
                <p>
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="project-style-one sec-pad-top">
        <div className="container-fluid p-0">
          <div className="sec-title text-center">
            <span className="tag-line">Our Projects</span>
            <h2>Explore Recent Projects</h2>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img src="images/project-1-1.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3>
                            <a href="project-details.html">
                              Welding Processing
                            </a>
                          </h3>
                          <p>
                            There are many new variations of available but
                            majority is simple free text.
                          </p>
                          <a
                            href="project-details.html"
                            className="thm-btn style-two white-hover"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img src="images/project-1-2.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3>
                            <a href="project-details.html">
                              Bridge Construction
                            </a>
                          </h3>
                          <p>
                            There are many new variations of available but
                            majority is simple free text.
                          </p>
                          <a
                            href="project-details.html"
                            className="thm-btn style-two"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img src="images/project-1-3.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3>
                            <a href="project-details.html">
                              Machinery Manufacturing
                            </a>
                          </h3>
                          <p>
                            There are many new variations of available but
                            majority is simple free text.
                          </p>
                          <a
                            href="project-details.html"
                            className="thm-btn style-two"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img src="images/project-1-4.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3>
                            <a href="project-details.html">
                              Oil & Gas Productions
                            </a>
                          </h3>
                          <p>
                            There are many new variations of available but
                            majority is simple free text.
                          </p>
                          <a
                            href="project-details.html"
                            className="thm-btn style-two"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurServices />

      <section className="sec-pad featured-style-two">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="sec-title">
                <span className="tag-line">Why People Choose Us?</span>
                <h2>
                  We’ve 25+ Years of <br /> Experiences for <br /> Give you
                  Better <br /> Results
                </h2>
              </div>
              <a href="#" className="thm-btn style-two">
                Read More
              </a>
            </div>
            <div className="col-lg-7">
              <div className="row featured-style-two-row">
                <div className="col-md-6">
                  <div className="single-featured-content-two">
                    <div className="top-box">
                      <div className="icon-block">
                        <i className="facdori-icon-secure-shield"></i>
                      </div>
                      <div className="text-block">
                        <h3>
                          Safe and <br /> Secure
                        </h3>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit a consetetur simple is pscing elitr
                      sed diam nonumy eirmod simply free text not tempor
                      invidunt.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-featured-content-two">
                    <div className="top-box">
                      <div className="icon-block">
                        <i className="facdori-icon-industrial-robot"></i>
                      </div>
                      <div className="text-block">
                        <h3>
                          Deliver Smart <br /> Work
                        </h3>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit a consetetur simple is pscing elitr
                      sed diam nonumy eirmod simply free text not tempor
                      invidunt.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-featured-content-two">
                    <div className="top-box">
                      <div className="icon-block">
                        <i className="facdori-icon-factory-3"></i>
                      </div>
                      <div className="text-block">
                        <h3>
                          Founded in <br /> 1987
                        </h3>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit a consetetur simple is pscing elitr
                      sed diam nonumy eirmod simply free text not tempor
                      invidunt.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-featured-content-two">
                    <div className="top-box">
                      <div className="icon-block">
                        <i className="facdori-icon-support"></i>
                      </div>
                      <div className="text-block">
                        <h3>
                          24/7 Smart <br /> Support
                        </h3>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit a consetetur simple is pscing elitr
                      sed diam nonumy eirmod simply free text not tempor
                      invidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkedWith />
    </>
  );
}
