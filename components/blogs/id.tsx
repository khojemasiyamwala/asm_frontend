"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getDocumentById } from "../../services/firebase";
import ReactOwlCarousel from "react-owl-carousel";

const BlogDetails = () => {
  const parms = useParams();
  const [formData, setFormData] = useState<any>();
  console.log("🚀 ~ BlogDetails ~ formData:", formData);
  useEffect(() => {
    (async () => {
      const doc: any = await getDocumentById("blogs", parms.id);
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
            <div className="col-lg-12">
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
                <br />
                <div
                  dangerouslySetInnerHTML={{
                    __html: formData.paraAfterMainImage,
                  }}
                />
                <ReactOwlCarousel
                  className="owl-theme"
                  items={
                    formData.subImages.filter((img: any) => img != "").length >=
                    3
                      ? 3
                      : formData.subImages.filter((img: any) => img != "")
                          .length
                  }
                  autoplay={true}
                  autoplayTimeout={2000}
                  autoplaySpeed={1000}
                  autoplayHoverPause={true}
                  loop={false}
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
    <>loading...</>
  );
};

export default BlogDetails;
