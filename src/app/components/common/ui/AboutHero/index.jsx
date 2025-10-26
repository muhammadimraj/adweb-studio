"use client";
import React from "react";
import Image from "next/image";
import Div from "../Div";

export default function AboutHero() {
  return (
    <Div className="cs-about_hero">
      <Div className="container">
        <Div className="row align-items-center">
          {/* Left Side - Images */}
          <Div className="col-lg-6">
            <Div className="cs-about_hero_images">
              <Div className="cs-about_hero_img_1">
                <Image
                  src="/images/about_img_1.jpeg"
                  alt="Office Interior"
                  width={450}
                  height={350}
                  className="cs-radius_15"
                />
              </Div>
              <Div className="cs-about_hero_img_2">
                <Image
                  src="/images/about_img_2.jpeg"
                  alt="Dubai Cityscape"
                  width={400}
                  height={300}
                  className="cs-radius_15"
                />
              </Div>
            </Div>
          </Div>

          {/* Right Side - Content */}
          <Div className="col-lg-6">
            <Div className="cs-about_hero_content">
              <h2 className="cs-about_hero_title">
                Develop a Creative<br />
                Digital <span className="cs-accent_color_underline">Future</span>
              </h2>
              
              <p className="cs-about_hero_text">
                At ADWEB STUDIO, we don't just design websites; we craft immersive 
                digital experiences that leave a lasting impression. In the bustling realm 
                of the internet, we stand as architects of innovation, where creativity 
                meets functionality and vision meets reality.
              </p>

              <p className="cs-about_hero_text">
                With a team of passionate designers, developers, and digital strategists, 
                we are dedicated to transforming your online presence into an engaging 
                narrative that captivates your audience.
              </p>

              <Div className="cs-about_hero_stats">
                <Div className="cs-about_hero_stat">
                  <h4 className="cs-stat_label">Years</h4>
                  <h3 className="cs-stat_number">12+</h3>
                </Div>
                <Div className="cs-about_hero_stat">
                  <h4 className="cs-stat_label">People</h4>
                  <h3 className="cs-stat_number">130+</h3>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

