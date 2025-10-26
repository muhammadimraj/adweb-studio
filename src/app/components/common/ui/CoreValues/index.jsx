"use client";
import React from "react";
import Div from "../Div";
import { Icon } from "@iconify/react";

const coreValuesData = [
  {
    icon: "mdi:trending-up",
    title: "Creativity & Innovation",
    description: "We embrace creativity as the cornerstone of our solutions. By fostering a culture of innovation, we constantly push the boundaries to deliver cutting-edge designs and interactive experiences."
  },
  {
    icon: "mdi:newspaper-variant-outline",
    title: "Integrity & Transparency",
    description: "Integrity is our guiding principle. We are transparent, honest, and ethical in all our dealings, ensuring a partnership built on trust with our clients."
  },
  {
    icon: "mdi:chart-bar",
    title: "Collaboration",
    description: "By working closely with our clients, we combine our expertise with their vision to achieve excellence in every project we undertake."
  },
  {
    icon: "mdi:account-group",
    title: "Client-Centric Method",
    description: "Our clients are at the heart of everything we do. We listen, understand, and prioritize their needs, ensuring their objectives are met and exceeded."
  }
];

export default function CoreValues() {
  return (
    <Div className="cs-core_values_section">
      <Div className="container">
        {/* Section Header */}
        <Div className="cs-core_values_header">
          <p className="cs-core_values_label">CORE VALUES</p>
          <h2 className="cs-core_values_title">
            TOP EXPERTS FOR<br />
            WEB DESIGN AND DEVELOPMENT
          </h2>
        </Div>

        {/* Core Values Grid */}
        <Div className="cs-core_values_grid">
          {coreValuesData.map((value, index) => (
            <Div key={index} className="cs-core_value_item">
              <Div className="cs-core_value_icon">
                <Icon icon={value.icon} />
              </Div>
              <h3 className="cs-core_value_title">{value.title}</h3>
              <p className="cs-core_value_description">{value.description}</p>
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}

