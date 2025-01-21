"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function WorkedWith() {
  return (
    <div className="brand-carousel-wrapper">
      <div className="container">
        <div className="brand-carousel-one  ">
          <ReactOwlCarousel
            className="owl-theme"
            items={5}
            autoplay={true}
            autoplayTimeout={2000} // Interval between slides (in ms)
            autoplaySpeed={1000} // Speed of the slide transition
            autoplayHoverPause={true}
            loop
            margin={10}
            dots={false}
          >
            <div className="item">
              <img src="/images/brand-1-1.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-2.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-3.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-4.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-5.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-1.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-2.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-3.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-4.jpg" alt="Awesome Image" />
            </div>
            <div className="item">
              <img src="/images/brand-1-5.jpg" alt="Awesome Image" />
            </div>
          </ReactOwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default WorkedWith;
