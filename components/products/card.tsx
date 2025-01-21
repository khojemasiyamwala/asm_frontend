"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ item, url }: any) => {
  console.log("🚀 ~ Card ~ item:", item);
  const router = useRouter();
  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-6"
        style={{ ...(item.isDetailPage ? { cursor: "pointer" } : {}) }}
        onClick={() => {
          if (item.isDetailPage) {
            router.push(`${url}/${item._id}`);
          }
        }}
      >
        <div className="single-service-style-one">
          <div className="top-box text-center">
            <div className="inner-content">
              {/* <i className="facdori-icon-factory-1 box-icon"></i> */}
              <h3>
                <Link href={`${url}/${item._id}`}>{item?.cardTitle}</Link>
              </h3>
            </div>
          </div>

          <div className="image-block">
            <img
              style={{
                height: "370px",
                width: "370px",
              }}
              src={item.mainImage}
              alt="Awesome Image"
            />
            <div className="overlay">
              <div className="box">
                <div
                  className="content"
                  style={{
                    color: "white",
                    fontSize: "20px",
                  }}
                >
                  {" "}
                  {item.cardShortDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
