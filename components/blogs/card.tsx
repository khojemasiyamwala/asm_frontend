"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ item }: any) => {
  console.log("🚀 ~ Card ~ item:", item);
  const router = useRouter();
  return (
    <>
      <div
        className="col-lg-6"
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          router.push(`/blogs/${item._id}`);
        }}
      >
        <div className="single-blog-style-three text-center">
          <div className="image-block">
            <img
              style={{
                width: "100%",
                height: "300px",
              }}
              src={item?.mainImage}
              alt="Awesome Image"
            />
            <div className="overlay">
              <div className="box">
                <div className="content">
                  <span
                    style={{
                      width: "100%",
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    {item.cardShortDescription}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-block">
            <h3>
              <Link href={`/blogs/${item._id}`}>{item.cardTitle}</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
