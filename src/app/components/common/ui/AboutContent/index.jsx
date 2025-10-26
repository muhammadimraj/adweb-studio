"use client";
import React from "react";
import Image from "next/image";
import Div from "../Div";
import { Icon } from "@iconify/react";
import SectionHeading from "../SectionHeading";

export default function AboutContent() {
  return (
    <Div className="cs-about_content_section">
      <Div className="container">
        <SectionHeading
          title="Transforming Ideas into Digital Reality"
          subtitle="Who We Are"
        />
        <Div className="cs-height_50 cs-height_lg_40" />
        
        <Div className="row align-items-center">
          {/* Left Side - Content */}
          <Div className="col-lg-6">
            <Div className="cs-about_content">
              {/* Design & Develop Section */}
              <Div className="cs-about_content_item">
                <Div className="cs-about_content_icon">
                  <Icon icon="mdi:check-circle" />
                </Div>
                <Div className="cs-about_content_text">
                  <h3 className="cs-about_content_title">Design & Develop</h3>
                  <p className="cs-about_content_description">
                    At ADWEB STUDIO to empower businesses, startups, and entrepreneurs 
                    with robust digital solutions. We believe every click should lead to 
                    a meaningful interaction, and every pixel on your website should tell 
                    a compelling story. By blending creativity, technology, and strategic 
                    thinking, we strive to create digital experiences that resonate, 
                    inspire, and drive results.
                  </p>
                </Div>
              </Div>

              {/* Our Vision Section */}
              <Div className="cs-about_content_item">
                <Div className="cs-about_content_icon">
                  <Icon icon="mdi:check-circle" />
                </Div>
                <Div className="cs-about_content_text">
                  <h3 className="cs-about_content_title">Our Vision:</h3>
                  <p className="cs-about_content_description">
                    At ADWEB STUDIO, we envision a digital landscape where businesses 
                    thrive through authentic connections. We aim to redefine online 
                    interactions by crafting visually stunning, user-friendly websites 
                    and digital marketing strategies that attract attention and foster 
                    genuine engagement. Our vision is to shape the future of digital 
                    engagement, one innovative project at a time.
                  </p>
                </Div>
              </Div>
            </Div>
          </Div>

          {/* Right Side - Image */}
          <Div className="col-lg-6">
            <Div className="cs-about_content_img">
              <Image
                src="/images/about-content.jpg"
                alt="Dubai Waterfront"
                width={700}
                height={500}
                className="cs-radius_15"
              />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

