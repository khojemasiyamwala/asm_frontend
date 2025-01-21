import React from "react";
import Testimonial from "../../../components/home/testimonial";
import WorkedWith from "../../../components/home/WorkedWith";

const Page = () => {
  return (
    <>
      <div className="inner-banner text-center">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
          <h1>About Us</h1>
        </div>
      </div>

      <section className="cta-style-three about-page-two sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src="images/about-4-1.jpg" alt="Awesome Image" />
            </div>
            <div className="col-lg-4">
              <img src="images/about-4-2.jpg" alt="Awesome Image" />
            </div>
            <div className="col-lg-4">
              <img src="images/about-4-3.jpg" alt="Awesome Image" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3>
                Provide you the Highest Quality Work <br /> that Meets your
                Expectation.
              </h3>
              <p>Need a High Quality Constructor for your Project?</p>
              <a href="#" className="thm-btn">
                Contact with us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-style-one dark-bg">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 clearfix">
              <div className="featured-style-one-image-block float-right">
                <img src="images/feature-2-1.jpg" alt="Awesome Image" />
                <div
                  className="bubbled-text-block wow fadeIn"
                  data-wow-duration="400"
                >
                  <div className="inner-box">
                    <span>Trusted by</span>
                    <h3 className="counter">4890</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block">
                <div className="sec-title m-0">
                  <span className="tag-line light">Company Started</span>
                  <h2 className="light">
                    Running a Successful <br /> Business Since 1987
                  </h2>
                </div>
                <p>
                  There are many variations of passages of lorem ipsum
                  available, but the majority have suffered alteration in some
                  form by injected humour or randomised words which don't look
                  even slightly believable. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-featured-content-one text-center">
                      <i className="facdori-icon-smile"></i>
                      <h3 className="counter">8800</h3>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-featured-content-one text-center">
                      <i className="facdori-icon-industry"></i>
                      <h3 className="counter">4770</h3>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-process sec-pad">
        <div className="container">
          <div className="sec-title text-center">
            <span className="tag-line">How we work</span>
            <h2>Working Progress</h2>
          </div>
          <div className="row-outer">
            <div className="row no-gutters">
              <div className="col-lg-4">
                <div className="single-work-process text-center">
                  <a href="#" className="more-link">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                  <span className="count ">
                    01 <span className="text-name">Step</span>
                  </span>
                  <h3>Request a Meeting</h3>
                  <p>
                    Lorem Ipsum is simply free dumy text of the printing and
                    amet consecte simple piscing.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-work-process text-center">
                  <a href="#" className="more-link">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                  <span className="count ">
                    02 <span className="text-name">Step</span>
                  </span>
                  <h3>Recieve Custom Plan</h3>
                  <p>
                    Lorem Ipsum is simply free dumy text of the printing and
                    amet consecte simple piscing.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-work-process text-center">
                  <a href="#" className="more-link">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                  <span className="count ">
                    03 <span className="text-name">Step</span>
                  </span>
                  <h3>Let’s Make it Happen</h3>
                  <p>
                    Lorem Ipsum is simply free dumy text of the printing and
                    amet consecte simple piscing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="block-text text-center">
            Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas.
            Sapien nunc amet ultrices, dolores sit <br /> ipsum velit purus
            aliquet, massa fringilla leo orci ipsum dolor sit amet elit magnis.
          </p>
        </div>
      </section>

      <Testimonial />

      <WorkedWith />
    </>
  );
};

export default Page;
