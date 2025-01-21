"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function OurServices() {
  return (
    <section className="sec-pad gray-bg">
      <div className="container">
        <div className="sec-title text-center">
          <span className="tag-line">Our Services</span>
          <h2>Industries Served</h2>
        </div>
        <div className="service-style-one-carousel">
          <ReactOwlCarousel
            className="owl-theme"
            items={3}
            loop
            autoplay={true}
            autoplayTimeout={2000} // Interval between slides (in ms)
            autoplaySpeed={100} // Speed of the slide transition
            autoplayHoverPause={true}
            margin={10}
            dots={true}
            nav={false}
          >
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-1 box-icon"></i>
                    <h3>
                      <Link href="#">Petroleum and Gas</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-1.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-3 box-icon"></i>
                    <h3>
                      <Link href="#">Industrial Construction</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-2.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-2 box-icon"></i>
                    <h3>
                      <Link href="#">Chemical Research</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-3.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-1 box-icon"></i>
                    <h3>
                      <Link href="#">Petroleum and Gas</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-1.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-3 box-icon"></i>
                    <h3>
                      <Link href="#">Industrial Construction</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-2.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-2 box-icon"></i>
                    <h3>
                      <Link href="#">Chemical Research</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-3.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-1 box-icon"></i>
                    <h3>
                      <Link href="#">Petroleum and Gas</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-1.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-3 box-icon"></i>
                    <h3>
                      <Link href="#">Industrial Construction</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-2.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-service-style-one">
                <div className="top-box text-center">
                  <div className="inner-content">
                    <i className="facdori-icon-factory-2 box-icon"></i>
                    <h3>
                      <Link href="#">Chemical Research</Link>
                    </h3>
                  </div>
                </div>

                <div className="image-block">
                  <img src="images/services-1-3.jpg" alt="Awesome Image" />
                  <div className="overlay">
                    <div className="box">
                      <div className="content">
                        <div className="dotted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
