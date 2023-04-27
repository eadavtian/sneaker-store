import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.column}>
            <h5>Contact Us</h5>
            <ul className={styles.list}>
              <li>
                <i className="fas fa-envelope mr-2"></i>info@example.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i>(123) 456-7890
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>123 Main St, New
                York, NY 10001
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h5>Follow Us</h5>
            <ul className={styles.list}>
              <li>
                <a href="#" className={styles.link}>
                  <FontAwesomeIcon icon={faFacebook} />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  <FontAwesomeIcon icon={faTwitter} />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className={styles.link}>
                  <FontAwesomeIcon icon={faInstagram} />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p className="text-success">&copy; 2023 My Online Shop</p>
      </div>
    </footer>
  );
};

export default Footer;
