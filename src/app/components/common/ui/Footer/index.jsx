import React from "react";
import Div from "../Div";
import { Icon } from "@iconify/react";

const officeData = [
  {
    city: "DUBAI",
    address: "8th Floor, Building 2, Bay Square, Business Bay, Dubai, UAE",
    phone: "+971 55 3486 284",
    image: "/images/dubai.png",
  },
  {
    city: "ABU DHABI",
    address:
      "19th Floor - 606 Hamdan Bin Mohammed St - Al Danah - E3-02 - Abu Dhabi, UAE",
    phone: "+971 55 3486 284",
    image: "/images/dubai.png",
  },
  {
    city: "SAUDI ARABIA",
    address:
      "Prince Sultan Bin Abdulaziz Rd, Al Mathar Ash Shamali, Riyadh, Saudi Arabia",
    phone: "+971 55 3486 284",
    image: "/images/ksa.png",
  },
  {
    city: "NEW YORK",
    address: "45 Rockefeller Plaza 20th Fl, New York, NY 10111, United States",
    phone: "+1 908 392 8892",
    image: "/images/usa.png",
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-footer_inner">
        <Div className="cs-fooer_main">
          <Div className="container">
            <Div className="cs-footer_global_offices pb-lg-0">
              <h2 className="cs-footer_title text-center">Global Offices</h2>
              <Div className="row">
                {officeData.map((office, index) => (
                  <Div key={index} className="col-lg-3 col-md-6 col-sm-12">
                    <Div className="cs-office_card">
                      <Div className="cs-office_image">
                        <img src={office.image} alt={office.city} />
                      </Div>
                      <h3 className="cs-office_city">{office.city}</h3>
                      <p className="cs-office_address">{office.address}</p>
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="cs-office_phone"
                      >
                        {office.phone}
                      </a>
                    </Div>
                  </Div>
                ))}
              </Div>
              <Div className="cs-footer_contact_info text-center">
                <p className="cs-contact_text">
                  Please send us your project requirements at{" "}
                  <a
                    href="mailto:saad@adwebstudio.com"
                    className="cs-email_link"
                  >
                    saad@adwebstudio.com
                  </a>
                </p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="cs-bottom_footer">
        <Div className="container">
          <Div className="cs-bottom_footer_in">
            <Div className="cs-copyright">
              ©ADWEBSTUDIO. All rights reserved.
            </Div>
            <Div className="cs-footer_social">
              <a
                href="https://www.facebook.com/adwebstudiodubai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="fa:facebook" />
              </a>
              <a
                href="https://www.instagram.com/adwebstudiouae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="fa:instagram" />
              </a>
              <a
                href="https://x.com/ADWEB_Studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="fa:twitter" />
              </a>
              <a
                href="https://www.youtube.com/user/dubaiadwebstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="fa:youtube" />
              </a>
            </Div>
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
