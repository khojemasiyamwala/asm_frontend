"use client";
import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
const ReactOwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import Card from "../products/card";
import { useWindowWidth } from "@react-hook/window-size";
function OurServices() {
  const [d, setD] = useState([]);
  useEffect(() => {
    (async () => {
      const q = query(collection(db, "products"));

      const docSnap = await getDocs(q);

      const data: any = [];
      docSnap.forEach((element) => {
        const a: any = element.data();
        a._id = element.id;
        data.push(a);
      });

      setD(data);
    })();
  }, []);
  const onlyWidth = useWindowWidth();

  return d.length ? (
    <section className="sec-pad gray-bg">
      <div className="container">
        <div className="sec-title text-center">
          <span className="tag-line">Our Products</span>
          <h2>Our Products</h2>
        </div>
        <div className="service-style-one-carousel">
          <ReactOwlCarousel
            className="owl-theme"
            items={onlyWidth > 1024 ? 3 : 1}
            loop
            autoplay={true}
            autoplayTimeout={2000} // Interval between slides (in ms)
            autoplaySpeed={100} // Speed of the slide transition
            autoplayHoverPause={true}
            margin={10}
            dots={true}
            nav={false}
          >
            {d?.map((item: any, index: number) => {
              let url;
              switch (item.category) {
                case "Crane":
                  url = "crane";
                  break;
                case "SpareParts":
                  url = "spare-parts";
                  break;
                case "Services":
                  url = "service";
                  break;

                default:
                  break;
              }
              return <Card item={item} url={url} />;
            })}
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}

export default OurServices;
