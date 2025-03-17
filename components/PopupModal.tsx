"use client";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { addDocument, db } from "../services/firebase";

function PopupModal() {
  const [modelOpen, setModelOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    ip: "",
  });
  useEffect(() => {
    async function getMyIP() {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();

        console.log("Your IP Address:", data.ip);
        setFormData({
          ...formData,
          ip: data.ip,
        });

        const q = query(
          collection(db, "contact-us"),
          where("ip", "==", data.ip)
        );

        const docSnap = await getDocs(q);

        const data1: any = [];
        docSnap.forEach((element) => {
          const a: any = element.data();
          a._id = element.id;
          data1.push(a);
        });
        if (!data1[0]) {
          setModelOpen(true);
        }
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    }

    getMyIP();
  }, []);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("🚀 ~ handleSubmit ~ res:", formData);
    const res: any = await addDocument("contact-us", formData);
    console.log("🚀 ~ handleSubmit ~ res:", res);
    if (res.id) {
      alert("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
        ip: "",
      });
      setModelOpen(false);
    }
  };
  return (
    <>
      {modelOpen ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "#0000008a",
            zIndex: "10000000",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            <section
              className="contact-form-wrapper"
              style={{
                width: "50vw",
                height: "fit-content",
                background: "#a7a5a5",
                borderRadius: "20px",
              }}
            >
              <form
                style={{
                  padding: "70px",
                }}
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
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    });
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
            </section>
          </>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default PopupModal;
