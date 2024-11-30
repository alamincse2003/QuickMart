import React from "react";
import { Link } from "react-router-dom";

const title = "About Quick Mart";
const desc =
  "QuickMart  online store for a seamless shopping experience, offering a wide range of quality products at unbeatable prices, with fast and reliable delivery";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  { iconName: "icofont-google-map", text: "Mirpur, Dhaka." },
  { iconName: "icofont-phone", text: "+880 155 555 555" },
  { iconName: "icofont-envelope", text: "quick@mart.com" },
];

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

const ItemList = [
  { text: "All Products", link: "/shop" },
  { text: "Shop", link: "/shop" },
  { text: "Blog", link: "/blog" },
  { text: "About", link: "/about" },
  { text: "Policy", link: "#" },
  { text: "FAQs", link: "#" },
];

const quickList = [
  { text: "Summer Sessions", link: "#" },
  { text: "Events", link: "#" },
  { text: "Gallery", link: "#" },
  { text: "Forums", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Terms of Use", link: "#" },
];

const tweetList = [
  {
    iconName: "icofont-twitter",
    desc: "@QuickMart Greetings! #E-commerce Website !!",
  },
  {
    iconName: "icofont-twitter",
    desc: "@QuickMart Greetings! #E-commerce Website !!",
  },
];
const footerbottomList = [
  { text: "Home", link: "/" },
  { text: "Shop", link: "/shop" },
  { text: "Contact", link: "/contact" },
];
const Footer = () => {
  return (
    <footer className="style-2">
      <div className="footer-top dark-view padding-tb">
        <div className="container">
          <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{title}</h4>
                    </div>
                    <div className="content">
                      <p>{desc}</p>
                      <ul className="lab-ul office-address">
                        {addressList.map((value, index) => (
                          <li key={index}>
                            <i className={value.iconName}></i>
                            <span>{value.text}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="lab-ul social-icons">
                        {socialList.map((value, index) => (
                          <li key={index}>
                            <a href="#" className={value.className}>
                              <i className={value.iconName}>{value.text}</i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{ItemTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {ItemList.map((value, index) => (
                          <li key={index}>
                            <a href="#">{value.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{quickTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {quickList.map((value, index) => (
                          <li key={index}>
                            <a href="#">{value.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="footer-item our-address">
                <div className="footer-inner">
                  <div className="footer-content">
                    <div className="title">
                      <h4>{tweetTitle}</h4>
                    </div>
                    <div className="content">
                      <ul className="lab-ul office-address">
                        {tweetList.map((value, index) => (
                          <li key={index}>
                            <i className={value.iconName}></i>
                            {value.desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
          {/* footer bottom  */}
          <div className="footer-bottom">
              <div className="container">
                  <div className="section-wrapper">
                      <p>&copy; 2024 <Link to="/">Quick Mart</Link>Designed by <a href="/" target="_blank">Al Amin</a></p>
                      <div className="footer-bottom-list">
                          {
                              footerbottomList.map((value, index) => (
                                  <a key={index} href="#">{value.text}</a>
                              ))
                          }
                      </div>
                  </div>
              </div>
          </div>
    </footer>
  );
};

export default Footer;
