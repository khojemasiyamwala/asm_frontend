"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  console.log("🚀 ~ path:", path);
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
        <header className="site-header header-four">
          <div className="lower-bar">
            <div className="container clearfix">
              <div className="logo-box">
                <Link href="/index-2.html">
                  <img src="/images/logo-2-1.png" alt="Awesome Image" />
                </Link>
              </div>
              <div className="left-content float-left">
                <div className="single-header-contact-info">
                  <i className="facdori-icon-clock"></i>
                  <h3>Mon to Fri 9:00am to 6:00pm</h3>
                  <p>Working hours</p>
                </div>
                <div className="single-header-contact-info">
                  <i className="facdori-icon-phone-call-1"></i>
                  <h3>666 888 0000</h3>
                  <p>Phone line</p>
                </div>
              </div>
              <div className="right-content float-right">
                <div className="single-header-contact-info">
                  <i className="facdori-icon-message"></i>
                  <h3>needhelp@facdori.com</h3>
                  <p>Email address</p>
                </div>
                <div className="single-header-contact-info">
                  <i className="facdori-icon-placeholder-2"></i>
                  <h3>66 Broklyn Street USA</h3>
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
                          <Link href="/#">Why Choose</Link>
                        </li>
                        <li>
                          <Link href="/#">About Us</Link>
                        </li>
                        <li>
                          <Link href="/#">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/#">Our Services</Link>
                        </li>
                        <li>
                          <Link href="/#">Sitemap</Link>
                        </li>
                      </ul>
                      <ul className="link-lists">
                        <li>
                          <Link href="/#">Price Guide</Link>
                        </li>
                        <li>
                          <Link href="/#">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="/#">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/#">Terms of Use</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
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
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-widget contact-widget">
                    <ul className="contact-infos">
                      <li>
                        <i className="facdori-icon-placeholder-2"></i>
                        66 Road Broklyn Street, 600 <br /> New York, USA
                      </li>
                      <li>
                        <i className="facdori-icon-message"></i>
                        needhelp@facdori.com
                      </li>
                      <li>
                        <i className="facdori-icon-phone-call-1"></i>
                        666 888 0000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer">
            <div className="container ">
              <div className="container-inner clearfix">
                <div className="left-content float-left">
                  <p>&copy; Copyright 2019 by TemplatePath.net</p>
                </div>
                <div className="right-content float-right">
                  <div className="social">
                    <Link href="/#">
                      <i className="fa fa-facebook-f"></i>
                    </Link>
                    <Link href="/#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link href="/#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                    <Link href="/#">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
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
