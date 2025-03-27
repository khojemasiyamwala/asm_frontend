"use client";
import { useWindowWidth } from "@react-hook/window-size";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ item, url }: any) => {
  const router = useRouter();
  const onlyWidth = useWindowWidth();

  return (
    <>
      <div
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
              <h3>{item?.cardTitle}</h3>
            </div>
          </div>

          <div
            className="image-block"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              style={{
                height: "370px",
                width: onlyWidth > 1024 ? "370px" : "100%",
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
