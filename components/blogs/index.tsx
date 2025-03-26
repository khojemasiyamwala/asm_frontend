"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { db, getAllDocuments } from "../../services/firebase/index";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
const Blogs = () => {
  const [d, setD] = useState([]);
  useEffect(() => {
    (async () => {
      const q = query(collection(db, "blogs"));

      const docSnap = await getDocs(q);

      const data: any = [];
      docSnap.forEach((element) => {
        const Link: any = element.data();
        Link._id = element.id;
        data.push(Link);
      });

      setD(data);
    })();
  }, []);
  return (
    <>
      <div className="inner-banner text-center">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Blogs</span>
            </li>
          </ul>
          <h1>Blogs</h1>
        </div>
      </div>

      <section className="sec-pad blog-page-2-col">
        <div className="container">
          <div className="row">
            {d ? d.map((item) => <Card item={item} />) : <></>}
          </div>
          {/* <div className="blog-post-pagination text-center">
            <Link className="prev" href="#">
              <i className="fa fa-arrow-left"></i>
            </Link>
            <Link className="active" href="#">
              01
            </Link>
            <Link href="#">02</Link>
            <Link href="#">03</Link>
            <Link href="#">04</Link>
            <Link href="#">05</Link>
            <Link className="next" href="#">
              <i className="fa fa-arrow-right"></i>
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blogs;
