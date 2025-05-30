"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { testimonials } from "../../constants";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
function Testimonial() {
  return testimonials ? (
    <section className="testimonials-style-three gray-bg sec-pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex">
            <div className="title-block my-auto">
              <div className="sec-title">
                <span className="tag-line">testimonials</span>
                <h2>
                  Experience the Saif Al Mufaddal Difference. See why our
                  customers choose us.
                </h2>
              </div>
              <Link href="/contact-us" className="thm-btn">
                Contact Us
              </Link>
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
                  {testimonials?.map((item, index) => {
                    return (
                      <div className="single-testimonial-style-three">
                        <i className="facdori-icon-icon"></i>
                        <p>{item.review}</p>
                        <div className="client-block">
                          {/* <div className="image-block">
                            <img
                              src="images/testi-1-2.jpg"
                              alt="Awesome Image"
                            />
                          </div> */}
                          <div className="text-block">
                            <h3>{item.name}</h3>
                            <span>{item.our}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ReactOwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default Testimonial;
