"use client";
import React, { useState } from "react";
import { addDocument } from "../../../services/firebase";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res: any = await addDocument("contact-us", formData);
    if (res.id) {
      alert("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <>
      <div className="inner-banner text-center">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
          <h1>Contact Us</h1>
        </div>
      </div>

      <section className="contact-form-wrapper sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="sec-title ">
                <span className="tag-line">Get in touch with us</span>
                <h2>
                  You’ve any Question? <br /> Feel Free to Contact <br /> With
                  us
                </h2>
              </div>
              <div className="single-contact-infos">
                <h3>Call us for imiditate support on this number</h3>
                <p> +91 77788 55752</p>
              </div>
              <div className="single-contact-infos">
                <h3>Send us email for any kind of inquiry</h3>
                <p>services.saifalmufaddal@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                // onSubmit={(e) => {
                //   handleSubmit(e);
                // }}
                className="contact-form-validated contact-form"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email Address"
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  value={formData.email}
                />
                <textarea
                  name="message"
                  placeholder="Write Message"
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  value={formData.message}
                ></textarea>
                <button
                  onClick={(e: any) => {
                    handleSubmit(e);
                  }}
                  className="thm-btn"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
