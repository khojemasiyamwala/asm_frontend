"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { addDocument, getDocumentById } from "../../services/firebase";
import ReactOwlCarousel from "react-owl-carousel";

const ProductDeatil = () => {
  const parms = useParams();
  const [formData, setFormData] = useState<any>();
  useEffect(() => {
    (async () => {
      const doc: any = await getDocumentById("products", parms.id);
      setFormData(doc);
    })();
  }, []);
  const [formData1, setFormData1] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res: any = await addDocument("contact-us", formData1);
    if (res.id) {
      setFormData1({
        name: "",
        email: "",
        message: "",
      });
      alert("submitted sucessfully");
    }
  };
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
                    Need a lifting solution? Call us. Our experts are ready to
                    engineer the perfect crane for your needs.
                  </p>
                  <div className="phone-box">
                    <i className="facdori-icon-phone-call-1"></i>
                    <span> +91 77788 55752</span>
                  </div>
                </div>
              </div>
              <div className="single-service-widget">
                <div className="contact-form-widget">
                  <h3>Get a Free Quote</h3>
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form-validated"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData1.name}
                      onChange={(e) => {
                        setFormData1({
                          ...formData1,
                          name: e.target.value,
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      value={formData1.email}
                      onChange={(e) => {
                        setFormData1({
                          ...formData1,
                          email: e.target.value,
                        });
                      }}
                    />
                    <textarea
                      placeholder="Write Message"
                      name="message"
                      value={formData1.message}
                      onChange={(e) => {
                        setFormData1({
                          ...formData1,
                          message: e.target.value,
                        });
                      }}
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
                    __html: formData.paraAfterMainImage,
                  }}
                  className="dangerousImportdiv"
                />
                <br />
                <ReactOwlCarousel
                  className="owl-theme"
                  items={
                    formData.subImages.filter((img: any) => {
                      return img != "";
                    }).length >= 3
                      ? 3
                      : formData.subImages.filter((img: any) => {
                          return img != "";
                        }).length
                  }
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
                    __html: formData.paraAfterSubImages,
                  }}
                  className="dangerousImportdiv"
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
