"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import { addDocument, db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  console.log("🚀 ~ path:", path);
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
    <html
      lang="en"
      style={{
        overflowX: "hidden",
      }}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="/css/magnific-popup.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/font-awesome.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/hover-min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/plugins/facdori-icon/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/plugins/bands-icon/style.css"
        />
        {/* <link rel="stylesheet" type="text/css" href="/css/owl.carousel.css" /> */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="/css/owl.theme.default.min.css"
        /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/bootstrap-select.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/plugins/flag-icon-css/css/flag-icon.min.css"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css"></link>
      </head>
      <body>
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
        <header className="site-header header-four">
          <div className="lower-bar">
            <div className="container clearfix">
              <div className="logo-box">
                <Link href="/">
                  <img
                    style={{
                      height: "150px",
                    }}
                    src="/images/logo/logo.png"
                    alt="Awesome Image"
                  />
                </Link>
              </div>
              <div className="left-content float-left">
                <div className="single-header-contact-info">
                  <i className="facdori-icon-clock"></i>
                  <h3>Mon to Sat 9:00am to 9:00pm</h3>
                  <p>Working hours</p>
                </div>
                <div className="single-header-contact-info">
                  <i className="facdori-icon-message"></i>
                  <h3>services.saifmufaddal@gmail.com</h3>
                  <p>Email address</p>
                </div>
              </div>
              <div className="right-content float-right">
                <div className="single-header-contact-info">
                  <i className="facdori-icon-phone-call-1"></i>
                  <h3> +91 77788 55752</h3>
                  <p>Phone line</p>
                </div>
                <div className="single-header-contact-info">
                  <i className="facdori-icon-placeholder-2"></i>
                  <h3>306 A, Zamarud, Khatriwad, Surat, 395003</h3>
                  <p>Visit us</p>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
            <div className="container clearfix">
              <div className="logo-box clearfix">
                <button className="menu-toggler" data-target="#main-nav-bar">
                  <span className="fa fa-bars"></span>
                </button>
              </div>

              <div className="main-navigation" id="main-nav-bar">
                <ul className=" navigation-box">
                  <li className={`${path === "/" ? "current" : ""}`}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={`${path === "/about-us" ? "current" : ""}`}>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link href="/crane">Crane</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link href="/service.html">Services 01</Link>
                      </li>
                      <li>
                        <Link href="/service2.html">Services 02</Link>
                      </li>
                      <li>
                        <Link href="/service3.html">Services 03</Link>
                      </li>
                      <li>
                        <Link href="/service-details.html">
                          Service Details
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link href="/service">Services</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link href="/project.html">Projects 01</Link>
                      </li>
                      <li>
                        <Link href="/project2.html">Project 02</Link>
                      </li>
                      <li>
                        <Link href="/project-details.html">
                          Project Details
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link href="/spare-parts">Spare Parts</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="main-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget about-widget">
                    <div className="widget-title">
                      <h3>About Us</h3>
                    </div>
                    <p>
                      We are the leaders in the building industries and
                      factories. We’re wordl wide. We never give up on the
                      challenges.
                    </p>
                    <img src="/images/footer-map-1-1.jpg" alt="Awesome Image" />
                    <Link href="/#" className="find-us-link">
                      <i className="fa fa-map-marker"></i>Find us on Map
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Links</h3>
                    </div>
                    <div className="link-wrapper clearfix">
                      <ul className="link-lists">
                        <li>
                          <Link href="/#">Home</Link>
                        </li>
                        <li>
                          <Link href="/#">About Us</Link>
                        </li>
                        <li>
                          <Link href="/#">Crane</Link>
                        </li>
                        <li>
                          <Link href="/#">Services</Link>
                        </li>
                        <li>
                          <Link href="/#">Spare parts</Link>
                        </li>
                      </ul>
                      <ul className="link-lists">
                        <li>
                          <Link href="/#">Blogs</Link>
                        </li>
                        <li>
                          <Link href="/#">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                  <div className="footer-widget service-links-widget">
                    <div className="widget-title">
                      <h3>Services</h3>
                    </div>
                    <ul className="link-lists">
                      <li>
                        <Link href="/#">Petroleum and Gas</Link>
                      </li>
                      <li>
                        <Link href="/#">Industrial Construction</Link>
                      </li>
                      <li>
                        <Link href="/#">Chemical Research</Link>
                      </li>
                      <li>
                        <Link href="/#">Mechanical Engineering</Link>
                      </li>
                      <li>
                        <Link href="/#">Power Energies</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget contact-widget">
                    <ul className="contact-infos">
                      <li>
                        <i className="facdori-icon-placeholder-2"></i>
                        306 A, Zamarud Residency <br /> Indarpura Khatriwad,
                        <br /> Surat, 395003
                      </li>
                      <li>
                        <a href="mailto:services.saifmufaddal@gmail.com">
                          <i className="facdori-icon-message"></i>
                          services.saifmufaddal@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:7778855752">
                          <i className="facdori-icon-phone-call-1"></i>
                          +91 77788 55752
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Script src="/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/isotope.js" strategy="lazyOnload" />
        <Script src="/js/waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/bootstrap-select.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.validate.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/theme.js" strategy="lazyOnload" />
        <Script src="/js/gmaps.js" strategy="lazyOnload" />
        <Script src="/js/map-helper.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
