"use client";
import Testimonial from "../../components/home/testimonial";
import OurServices from "../../components/home/ourServices";
import WorkedWith from "../../components/home/WorkedWith";
import { home_page } from "../../constants/index";
import Link from "next/link";

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
              backgroundImage: `url(${home_page.Carousels.Cranes.img})`,
              backgroundPosition: "center left",
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="box valign-middle">
                  <div className="content text-center">
                    <h3 data-animation="animated fadeInUp">
                      {home_page.Carousels.Cranes.description}
                    </h3>
                    <Link
                      data-animation="animated fadeInDown"
                      href="#"
                      className="thm-btn"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide-2"
            style={{
              backgroundImage: `url(${home_page.Carousels.Services.img})`,
              backgroundPosition: "top center",
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="box valign-middle">
                  <div className="content text-center">
                    <h3 data-animation="animated fadeInUp">
                      {home_page.Carousels.Services.description}
                    </h3>
                    <Link
                      data-animation="animated fadeInDown"
                      href="#"
                      className="thm-btn"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="carousel-item slide-3"
            style={{
              backgroundPosition: "top center",
              backgroundImage: `url(${home_page.Carousels.Spare_Parts.img})`,
            }}
          >
            <div className="carousel-caption">
              <div className="container">
                <div className="box valign-middle">
                  <div className="content text-center">
                    <h3 data-animation="animated fadeInUp">
                      {home_page.Carousels.Spare_Parts.description}
                    </h3>
                    <Link
                      data-animation="animated fadeInDown"
                      href="#"
                      className="thm-btn"
                    >
                      Discover more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          className="carousel-control-prev carousel-control-one-prev"
          href="#minimal-bootstrap-carousel"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-arrow-left"></i>
          <span className="sr-only">Previous</span>
        </Link>
        <Link
          className="carousel-control-next carousel-control-one-next "
          href="#minimal-bootstrap-carousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-arrow-right"></i>
          <span className="sr-only">Next</span>
        </Link>
      </div>

      <section className="about-style-five sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="content-block text-center">
                <div className="sec-title mb-0">
                  <span className="tag-line">get to know us</span>
                  <h2>{home_page.Introduction.Title}</h2>
                </div>
                <p>{home_page.Introduction.Paragraph_1}</p>

                <div className="phone-block">
                  <div className="icon-block">
                    <i className="facdori-icon-phone-call-1"></i>
                  </div>
                  <p>Let’s Call us to Get a Free Estimate</p>
                  <h3>+91 77788 55752</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="image-block"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  height: "300px",
                }}
              >
                <img
                  src={home_page.Introduction.img}
                  alt="Awesome Image"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
              <div className="image-block-text gray-bg">
                <p>{home_page.Introduction.Paragraph_2} </p>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#002c42",
                  }}
                >
                  {home_page.Introduction.Paragraph_2_bold}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="project-style-one sec-pad-top">
        <div className="container-fluid p-0">
          <div className="sec-title text-center">
            <span className="tag-line">Our Services</span>
            <h2>Our Service</h2>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img
                    src={home_page.Our_Services.Cranes.img}
                    alt="Awesome Image"
                  />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3
                            style={{
                              color: "white",
                            }}
                          >
                            {home_page.Our_Services.Cranes.title}
                          </h3>
                          <p>{home_page.Our_Services.Cranes.description}</p>
                          <Link
                            href={home_page.Our_Services.Cranes.url}
                            className="thm-btn style-two"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img
                    style={{
                      objectFit: "cover",
                    }}
                    src={home_page.Our_Services.Services.img}
                    alt="Awesome Image"
                  />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3
                            style={{
                              color: "white",
                            }}
                          >
                            {home_page.Our_Services.Services.title}
                          </h3>
                          <p>{home_page.Our_Services.Services.description}</p>
                          <Link
                            href={home_page.Our_Services.Services.url}
                            className="thm-btn style-two"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="single-project-style-one">
                <div className="image-block">
                  <img
                    src={home_page.Our_Services.Spare_Parts.img}
                    alt="Awesome Image"
                  />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="inner-content">
                          <h3
                            style={{
                              color: "white",
                            }}
                          >
                            {home_page.Our_Services.Spare_Parts.title}
                          </h3>
                          <p>
                            {home_page.Our_Services.Spare_Parts.description}
                          </p>
                          <Link
                            href={home_page.Our_Services.Spare_Parts.url}
                            className="thm-btn style-two"
                          >
                            Read More
                          </Link>
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
                <h2>{home_page.choose_us.title_para}</h2>
              </div>
              <Link href="#" className="thm-btn style-two">
                Read More
              </Link>
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
                    <p>{home_page.choose_us.safetyAndSecurity.description}</p>
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
                    <p>{home_page.choose_us.smartSolutions.description}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-featured-content-two">
                    <div className="top-box">
                      <div className="icon-block">
                        <i className="facdori-icon-factory-3"></i>
                      </div>
                      <div className="text-block">
                        <h3>Transparency</h3>
                      </div>
                    </div>
                    <p>{home_page.choose_us.transparency.description}</p>
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
                    <p>{home_page.choose_us.support.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <WorkedWith /> */}
    </>
  );
}
