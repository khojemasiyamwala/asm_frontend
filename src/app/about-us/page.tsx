import React from "react";
import Testimonial from "../../../components/home/testimonial";
import WorkedWith from "../../../components/home/WorkedWith";
import { about_page } from "../../../constants";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div
        className="inner-banner text-center"
        style={{
          backgroundImage: `url(${about_page.first_div.img})`,
          objectFit: "cover",
        }}
      >
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
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
            <div
              className="col-lg-4"
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={about_page.connect_with_us.img1}
                alt="Awesome Image"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
            <div
              className="col-lg-4"
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={about_page.connect_with_us.img2}
                alt="Awesome Image"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="col-lg-4"
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={about_page.connect_with_us.img3}
                alt="Awesome Image"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h3>{about_page.first_div.title}</h3>
              <p>{about_page.first_div.description}</p>
              <Link href="/contact-us" className="thm-btn">
                Contact with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-style-one dark-bg">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-6 clearfix">
              <div className="featured-style-one-image-block float-right">
                <img
                  src={about_page.company_started.img3}
                  alt="Awesome Image"
                />
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
                  <h2 className="light">{about_page.company_started.title}</h2>
                </div>
                <p>{about_page.company_started.description}</p>
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
                  <h3>{about_page.working_progress.first_step.title}</h3>
                  <p>{about_page.working_progress.first_step.description}</p>
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
                  <h3>{about_page.working_progress.second_step.title}</h3>
                  <p>{about_page.working_progress.second_step.description}</p>
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
                  <h3>{about_page.working_progress.third_step.title}</h3>
                  <p>{about_page.working_progress.third_step.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <WorkedWith />
    </>
  );
};

export default Page;
