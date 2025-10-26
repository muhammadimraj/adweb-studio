"use client";
import React from "react";
import Image from "next/image";
import Div from "../Div";

const servicesData = [
  { number: "01.", title: "Responsive Web Development" },
  { number: "02.", title: "SEO Optimization" },
  { number: "03.", title: "Creativity UX/UI Design" },
  { number: "04.", title: "Social Media Marketing" }
];

const statsData = [
  { label: "Projects", number: "120" },
  { label: "Team Members", number: "45" },
  { label: "Years", number: "12" }
];

export default function ServiceHero() {
  return (
    <Div className="cs-service_hero">
      <Div className="container">
        <Div className="row align-items-center">
          {/* Left Side - Image */}
          <Div className="col-lg-6">
            <Div className="cs-service_hero_img">
              <Image
                src="/images/service-hero.jpg"
                alt="Service"
                width={600}
                height={700}
                className="cs-radius_15"
              />
            </Div>
          </Div>

          {/* Right Side - Content */}
          <Div className="col-lg-6">
            <Div className="cs-service_hero_content">
              <p className="cs-service_hero_label">OUR SERVICES</p>
              <h2 className="cs-service_hero_title">
                Grow Your Business With Our<br />
                Best Services
              </h2>
              
              <p className="cs-service_hero_text">
                We appreciate your trust greatly! Our clients choose us and our products 
                because they know we're the best.
              </p>

              {/* Services List */}
              <Div className="cs-service_hero_list">
                {servicesData.map((service, index) => (
                  <Div key={index} className="cs-service_hero_item">
                    <span className="cs-service_number">{service.number}</span>
                    <span className="cs-service_title">{service.title}</span>
                  </Div>
                ))}
              </Div>

              {/* Stats */}
              <Div className="cs-service_hero_stats">
                {statsData.map((stat, index) => (
                  <Div key={index} className="cs-service_hero_stat">
                    <h3 className="cs-stat_number">{stat.number}</h3>
                    <h4 className="cs-stat_label">{stat.label}</h4>
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

