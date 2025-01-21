"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
function Testimonial() {
  return (
    <section className="testimonials-style-three gray-bg sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="title-block my-auto">
              <div className="sec-title">
                <span className="tag-line">testimonials</span>
                <h2>
                  You are in Very Good <br /> Hands, Check What <br /> our
                  Customers are <br /> Talking About
                </h2>
              </div>
              <a href="#" className="thm-btn">
                View All testimonials
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dark-bg testimonials-style-three-carousel-wrapper">
              <div className="testimonials-style-three-carousel">
                <ReactOwlCarousel
                  className="owl-theme"
                  autoPlay={true}
                  autoplaySpeed={1000}
                  autoplayHoverPause={true}
                  autoplayTimeout={2000}
                  items={1}
                  loop
                  margin={10}
                >
                  <div className="single-testimonial-style-three">
                    <i className="facdori-icon-icon"></i>
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch.
                    </p>
                    <div className="client-block">
                      <div className="image-block">
                        <img src="images/testi-1-1.jpg" alt="Awesome Image" />
                      </div>
                      <div className="text-block">
                        <h3>Cliff Mun</h3>
                        <span>Our Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-style-three">
                    <i className="facdori-icon-icon"></i>
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch.
                    </p>
                    <div className="client-block">
                      <div className="image-block">
                        <img src="images/testi-1-2.jpg" alt="Awesome Image" />
                      </div>
                      <div className="text-block">
                        <h3>Kaycee Thyfault</h3>
                        <span>Our Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial-style-three">
                    <i className="facdori-icon-icon"></i>
                    <p>
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch.
                    </p>
                    <div className="client-block">
                      <div className="image-block">
                        <img src="images/testi-1-3.jpg" alt="Awesome Image" />
                      </div>
                      <div className="text-block">
                        <h3>Yajaira Tarbet</h3>
                        <span>Our Customer</span>
                      </div>
                    </div>
                  </div>
                </ReactOwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
