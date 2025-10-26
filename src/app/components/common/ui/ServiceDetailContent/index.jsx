"use client";
import React from "react";
import Image from "next/image";
import Div from "../Div";

export default function ServiceDetailContent({ 
  imageSrc, 
  subheading,
  introText, 
  services,
  servicesTitle = "Our Services",
  whyChooseUs,
  industriesWeServe,
  letsTurnSection,
  additionalImages,
  closingText,
  singleImageLayout = false,
  servicesImages
}) {
  return (
    <Div className="cs-service_detail_content">
      <Div className="cs-service_detail_image">
        <Image
          src={imageSrc}
          alt="Service"
          width={800}
          height={500}
          className="cs-radius_15"
        />
      </Div>

      {subheading && (
        <Div className="cs-service_detail_subheading">
          <h3 className="cs-subheading_title">{subheading}</h3>
        </Div>
      )}

      <Div className="cs-service_detail_intro">
        <p className="cs-intro_text">{introText}</p>
      </Div>

      <Div className="cs-service_detail_section">
        {servicesTitle && <h2 className="cs-section_title">{servicesTitle}</h2>}
        <ul className="cs-services_list">
          {services.map((service, index) => (
            <li key={index} className="cs-service_list_item">
              <strong>{service.title}:</strong> {service.description}
            </li>
          ))}
        </ul>
      </Div>

      {/* Two Column Images after services OR Single Image */}
      {!singleImageLayout && additionalImages && additionalImages.length >= 2 && (
        <Div className="row cs-two_column_images">
          <Div className="col-md-6">
            <Div className="cs-service_detail_image column-left-img">
              <Image
                src={additionalImages[0].src}
                alt={additionalImages[0].alt || "Service Image"}
                width={400}
                height={300}
                className="cs-radius_15"
              />
            </Div>
          </Div>
          <Div className="col-md-6">
            <Div className="cs-service_detail_image column-left-img">
              <Image
                src={additionalImages[1].src}
                alt={additionalImages[1].alt || "Service Image"}
                width={400}
                height={300}
                className="cs-radius_15"
              />
            </Div>
          </Div>
        </Div>
      )}

      {/* Single Full Width Image after services */}
      {singleImageLayout && additionalImages && additionalImages.length >= 1 && (
        <Div className="cs-service_detail_image">
          <Image
            src={additionalImages[0].src}
            alt={additionalImages[0].alt || "Service Image"}
            width={800}
            height={500}
            className="cs-radius_15"
          />
        </Div>
      )}

      {/* Why Choose Us Section */}
      {whyChooseUs && (
        <Div className="cs-service_detail_section cs-why_choose_section">
          <h2 className="cs-section_title">{whyChooseUs.title}</h2>
          <ul className="cs-services_list">
            {whyChooseUs.points.map((point, index) => (
              <li key={index} className="cs-service_list_item">
                <strong>{point.title}:</strong> {point.description}
              </li>
            ))}
          </ul>
        </Div>
      )}

      {/* Second Image Full Width After Why Choose Us */}
      {singleImageLayout && additionalImages && additionalImages.length >= 2 && (
        <Div className="cs-service_detail_image">
          <Image
            src={additionalImages[1].src}
            alt={additionalImages[1].alt || "Service Image"}
            width={800}
            height={500}
            className="cs-radius_15"
          />
        </Div>
      )}

      {/* Industries We Serve Section */}
      {industriesWeServe && (
        <Div className="cs-service_detail_section cs-industries_section">
          <h2 className="cs-section_title">{industriesWeServe.title}</h2>
          <ul className="cs-industries_list">
            {industriesWeServe.industries.map((industry, index) => (
              <li key={index} className="cs-industry_item">
                {industry}
              </li>
            ))}
          </ul>
        </Div>
      )}

      {/* Two Images After Services Section */}
      {servicesImages && servicesImages.length >= 2 && (
        <Div className="row cs-two_column_images">
          <Div className="col-md-6">
            <Div className="cs-service_detail_image">
              <Image
                src={servicesImages[0].src}
                alt={servicesImages[0].alt || "Service Image"}
                width={400}
                height={300}
                className="cs-radius_15"
              />
            </Div>
          </Div>
          <Div className="col-md-6">
            <Div className="cs-service_detail_image">
              <Image
                src={servicesImages[1].src}
                alt={servicesImages[1].alt || "Service Image"}
                width={400}
                height={300}
                className="cs-radius_15"
              />
            </Div>
          </Div>
        </Div>
      )}

      {/* Third Image Full Width */}
      {additionalImages && additionalImages.length >= 3 && (
        <Div className="cs-service_detail_image">
          <Image
            src={additionalImages[2].src}
            alt={additionalImages[2].alt || "Service Image"}
            width={800}
            height={500}
            className="cs-radius_15"
          />
        </Div>
      )}

      {/* Let's Turn Section */}
      {letsTurnSection && (
        <Div className="cs-service_detail_section cs-lets_turn_section">
          <h2 className="cs-section_title">{letsTurnSection.title}</h2>
          <p className="cs-lets_turn_text">{letsTurnSection.text}</p>
        </Div>
      )}

      {/* Closing Text */}
      {closingText && (
        <Div className="cs-service_detail_closing">
          <p className="cs-closing_text">{closingText}</p>
        </Div>
      )}
    </Div>
  );
}

