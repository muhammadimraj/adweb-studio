"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const countries = [
  { code: "+93", name: "Afghanistan", flagCode: "af", native: "(افغانستان)" },
  { code: "+355", name: "Albania", flagCode: "al", native: "(Shqipëri)" },
  { code: "+213", name: "Algeria", flagCode: "dz", native: "(الجزائر)" },
  { code: "+1", name: "American Samoa", flagCode: "as", native: "" },
  { code: "+376", name: "Andorra", flagCode: "ad", native: "" },
  { code: "+244", name: "Angola", flagCode: "ao", native: "" },
  { code: "+1", name: "Anguilla", flagCode: "ai", native: "" },
  { code: "+54", name: "Argentina", flagCode: "ar", native: "" },
  { code: "+374", name: "Armenia", flagCode: "am", native: "" },
  { code: "+297", name: "Aruba", flagCode: "aw", native: "" },
  { code: "+61", name: "Australia", flagCode: "au", native: "" },
  { code: "+43", name: "Austria", flagCode: "at", native: "" },
  { code: "+994", name: "Azerbaijan", flagCode: "az", native: "" },
  { code: "+973", name: "Bahrain", flagCode: "bh", native: "" },
  { code: "+880", name: "Bangladesh", flagCode: "bd", native: "" },
  { code: "+375", name: "Belarus", flagCode: "by", native: "" },
  { code: "+32", name: "Belgium", flagCode: "be", native: "" },
  { code: "+55", name: "Brazil", flagCode: "br", native: "" },
  { code: "+86", name: "China", flagCode: "cn", native: "" },
  { code: "+20", name: "Egypt", flagCode: "eg", native: "" },
  { code: "+33", name: "France", flagCode: "fr", native: "" },
  { code: "+49", name: "Germany", flagCode: "de", native: "" },
  { code: "+91", name: "India", flagCode: "in", native: "" },
  { code: "+39", name: "Italy", flagCode: "it", native: "" },
  { code: "+81", name: "Japan", flagCode: "jp", native: "" },
  { code: "+92", name: "Pakistan", flagCode: "pk", native: "" },
  { code: "+7", name: "Russia", flagCode: "ru", native: "" },
  { code: "+966", name: "Saudi Arabia", flagCode: "sa", native: "" },
  { code: "+34", name: "Spain", flagCode: "es", native: "" },
  { code: "+41", name: "Switzerland", flagCode: "ch", native: "" },
  { code: "+90", name: "Turkey", flagCode: "tr", native: "" },
  { code: "+971", name: "United Arab Emirates", flagCode: "ae", native: "" },
  { code: "+44", name: "United Kingdom", flagCode: "gb", native: "" },
  { code: "+1", name: "United States", flagCode: "us", native: "" },
];

export default function CallRequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    countryCode: "+92"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showCountryDropdown && !e.target.closest('.cs-country_code') && !e.target.closest('.cs-country_dropdown')) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCountryDropdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (code) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: code
    }));
    setShowCountryDropdown(false);
    setCountrySearch("");
  };

  const selectedCountry = countries.find(c => c.code === formData.countryCode) || countries[25]; // Default to Pakistan

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.code.includes(countrySearch)
  );

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if form is valid
  const isFormValid = () => {
    const hasName = formData.name.trim() !== "";
    const hasValidEmail = isValidEmail(formData.email);
    const hasNumber = formData.number.trim() !== "";
    return hasName && hasValidEmail && hasNumber;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you! We will reach you shortly.");
      setIsSubmitting(false);
      
      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          number: "",
          countryCode: "+92"
        });
        setSubmitMessage("");
        onClose();
      }, 2000);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="cs-modal_overlay" onClick={onClose}>
      <div className="cs-modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="cs-modal_close" onClick={onClose} aria-label="Close modal">
          <Icon icon="mdi:close" />
        </button>
        
        <div className="cs-modal_header">
          <h2>Request a call now</h2>
          <p>Our team will reach you within a minute</p>
        </div>

        <form onSubmit={handleSubmit} className="cs-modal_form">
          <div className="cs-form_group">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="cs-form_group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="cs-form_group">
            <label htmlFor="number">Number*</label>
            <div className="cs-phone_input_wrapper position-relative">
              <div className="cs-phone_input">
                <div className="cs-country_code" onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                  <img 
                    src={`https://flagcdn.com/w40/${selectedCountry.flagCode}.png`}
                    srcSet={`https://flagcdn.com/w80/${selectedCountry.flagCode}.png 2x`}
                    alt={selectedCountry.name}
                    className="cs-flag"
                  />
                  <span className="cs-arrow">
                    <Icon icon={showCountryDropdown ? "mdi:chevron-up" : "mdi:chevron-down"} />
                  </span>
                  <span className="cs-code">{selectedCountry.code}</span>
                </div>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Enter your number"
                  className="cs-phone_number"
                />
              </div>
              <button 
                type="submit" 
                className={`cs-call_submit_btn ${isFormValid() ? 'active' : ''}`}
                disabled={isSubmitting || !isFormValid()}
              >
                {isSubmitting ? "Calling..." : "Call me"}
              </button>
            

            {showCountryDropdown && (
              <div className="cs-country_dropdown">
                <div className="cs-country_search">
                  <Icon icon="mdi:magnify" />
                  <input
                    type="text"
                    placeholder="Search country..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div className="cs-country_list">
                  {filteredCountries.map((country, index) => (
                    <div
                      key={index}
                      className={`cs-country_item ${country.code === formData.countryCode ? 'active' : ''}`}
                      onClick={() => handleCountrySelect(country.code)}
                    >
                      <img 
                        src={`https://flagcdn.com/w40/${country.flagCode}.png`}
                        srcSet={`https://flagcdn.com/w80/${country.flagCode}.png 2x`}
                        alt={country.name}
                        className="cs-country_flag"
                      />
                      <span className="cs-country_name">
                        {country.name} {country.native && <span className="cs-native">{country.native}</span>}
                      </span>
                      <span className="cs-country_code_text">{country.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            </div>
          </div>

          {submitMessage && (
            <div className="cs-submit_message">{submitMessage}</div>
          )}

          <p className="cs-form_note">
            Note: This form is not for career enquiries.
          </p>
        </form>
      </div>
    </div>
  );
}

