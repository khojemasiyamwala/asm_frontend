"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { db, getAllDocuments } from "../../services/firebase/index";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
const Product = ({ type, url }: any) => {
  const [d, setD] = useState([]);
  console.log("🚀 ~ Product ~ d:", d);
  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", type)
      );

      const docSnap = await getDocs(q);

      const data: any = [];
      docSnap.forEach((element) => {
        const a: any = element.data();
        a._id = element.id;
        data.push(a);
      });

      setD(data);
    })();
  }, [type]);
  const router = useRouter();
  return (
    <>
      <div className="inner-banner text-center">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <span>{type}</span>
            </li>
          </ul>
          <h1>{type}</h1>
        </div>
      </div>
      <section className="sec-pad-with-content-margin-30 gray-bg service-page-one">
        <div className="container">
          <div className="row">
            {d.length ? (
              d?.map((item: any, index: number) => (
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <Card item={item} url={url} />
                </div>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center !important",
                  alignItems: "center !important",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <h1>No {type} Found </h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
