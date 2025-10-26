"use client";
import React, { useState } from "react";
import Div from "../Div";
import { Icon } from "@iconify/react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <Div className="cs-contact_form_sticky">
      <Div className="cs-contact_form_card">
        <h3 className="cs-contact_form_title">Get in Touch</h3>
        
        <form onSubmit={handleSubmit} className="cs-contact_form">
          <Div className="cs-form_field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Div>

          <Div className="cs-form_field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Div>

          <Div className="cs-form_field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              required
            />
          </Div>

          <button type="submit" className="cs-contact_form_btn">
            <Icon icon="mdi:send" />
            <span>Get in Touch</span>
          </button>
        </form>

        <Div className="cs-contact_info_section">
          <h4 className="cs-contact_info_title">Contact Info</h4>
          
          <Div className="cs-contact_info_item">
            <Icon icon="mdi:map-marker" />
            <span>8th Floor, Building 2, Bay Square, Business Bay, Dubai, UAE</span>
          </Div>

          <Div className="cs-contact_info_item">
            <Icon icon="mdi:email" />
            <span>saad@adwebstudio.com</span>
          </Div>

          <Div className="cs-contact_info_item">
            <Icon icon="mdi:phone" />
            <span>+971 55 3486 284</span>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

