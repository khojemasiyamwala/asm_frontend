"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getDocumentById } from "../../services/firebase";
import ReactOwlCarousel from "react-owl-carousel";

const ProductDeatil = () => {
  const parms = useParams();
  const [formData, setFormData] = useState<any>();
  console.log("🚀 ~ ProductDeatil ~ formData:", formData);
  useEffect(() => {
    (async () => {
      const doc: any = await getDocumentById("products", parms.id);
      setFormData(doc);
    })();
  }, []);
  return formData ? (
    <>
      <div className="inner-banner text-center">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <span>{formData?.category}</span>
            </li>
          </ul>
          <h1>{formData?.detailPageTitle}</h1>
        </div>
      </div>

      <section className="sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="single-service-widget">
                <div className="contact-infos-widget">
                  <h3>Need Help?</h3>
                  <p>
                    Speak with a human to filling out a form? call corporate
                    office and we will connect you with a team member who can
                    help.
                  </p>
                  <div className="phone-box">
                    <i className="facdori-icon-phone-call-1"></i>
                    <span>666 888 0000</span>
                  </div>
                </div>
              </div>
              <div className="single-service-widget">
                <div className="contact-form-widget">
                  <h3>Get a Free Quote</h3>
                  <form
                    action="https://ashik.templatepath.net/facdori-main-html/inc/sendemail.php"
                    className="contact-form-validated"
                  >
                    <input type="text" name="name" placeholder="Full Name" />
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                    />
                    <textarea
                      placeholder="Write Message"
                      name="message"
                    ></textarea>
                    <button type="submit" className="thm-btn">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single-service-page-content">
                <ReactOwlCarousel
                  className="owl-theme"
                  items={1}
                  autoplay={true}
                  autoplayTimeout={2000} // Interval between slides (in ms)
                  autoplaySpeed={1000} // Speed of the slide transition
                  autoplayHoverPause={true}
                  loop
                  margin={10}
                  dots={false}
                >
                  {formData.subImages
                    .filter((img: any) => {
                      return img != "";
                    })
                    .map((img: any) => {
                      console.log("🚀 ~ ProductDeatil ~ img:", img);
                      return (
                        <div className="item">
                          <img src={img} alt="Awesome Image" />
                        </div>
                      );
                    })}
                </ReactOwlCarousel>

                <br />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: formData.paraAfterMainImage,
                  }}
                />
                <img
                  style={{
                    height: "450px",
                    width: "100%",
                  }}
                  src={formData.image}
                  alt="Awesome Image"
                />
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: formData.paraAfterSubImages,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : (
    <>Loading...</>
  );
};

export default ProductDeatil;
