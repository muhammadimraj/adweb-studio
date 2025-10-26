"use client";
import { useState } from "react";
import Div from "@/app/components/common/ui/Div";
import PageHeading from "@/app/components/common/ui/PageHeading";
import Spacing from "@/app/components/common/ui/Spacing";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="cs-contact_page_wrapper">
          <Div className="row align-items-start">
            {/* Left Side - Contact Info */}
            <Div className="col-lg-5">
              <Div className="cs-contact_info_wrap">
                <Div className="cs-contact_page_heading">
                  <p className="cs-contact_us_label">CONTACT US</p>
                  <h2 className="cs-contact_main_title">
                    Have a Question?
                    <br />
                    Get in Touch!
                  </h2>
                </Div>

                <Spacing lg="60" md="40" />

                <Div className="cs-contact_details">
                  <Div className="cs-contact_detail_item">
                    <Div className="cs-contact_icon">
                      <Icon icon="carbon:location" />
                    </Div>
                    <Div className="cs-contact_text">
                      <p>8th Floor, Building 2,</p>
                      <p>Bay Square, Business Bay,</p>
                      <p>Dubai, UAE.</p>
                    </Div>
                  </Div>

                  <Spacing lg="35" md="25" />

                  <Div className="cs-contact_detail_item">
                    <Div className="cs-contact_icon">
                      <Icon icon="carbon:phone" />
                    </Div>
                    <Div className="cs-contact_text">
                      <p>+971 55 3486 284</p>
                    </Div>
                  </Div>

                  <Spacing lg="35" md="25" />

                  <Div className="cs-contact_detail_item">
                    <Div className="cs-contact_icon">
                      <Icon icon="carbon:email" />
                    </Div>
                    <Div className="cs-contact_text">
                      <p>saad@adwebstudio.com</p>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>

            {/* Right Side - Contact Form */}
            <Div className="col-lg-7">
              <Div className="cs-contact_form_wrapper">
                <form onSubmit={handleSubmit} className="cs-contact_page_form">
                  <Div className="row">
                    <Div className="col-md-6">
                      <Div className="cs-form_field_wrapper">
                        <Icon icon="carbon:user" className="cs-input_icon" />
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                          className="cs-form_field_input"
                          required
                        />
                      </Div>
                      <Spacing lg="25" md="20" />
                    </Div>
                    <Div className="col-md-6">
                      <Div className="cs-form_field_wrapper">
                        <Icon icon="carbon:email" className="cs-input_icon" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleChange}
                          className="cs-form_field_input"
                          required
                        />
                      </Div>
                      <Spacing lg="25" md="20" />
                    </Div>
                    <Div className="col-md-6">
                      <Div className="cs-form_field_wrapper">
                        <Icon icon="carbon:phone" className="cs-input_icon" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="cs-form_field_input"
                          required
                        />
                      </Div>
                      <Spacing lg="25" md="20" />
                    </Div>
                    <Div className="col-md-6">
                      <Div className="cs-form_field_wrapper">
                        <Icon
                          icon="carbon:information"
                          className="cs-input_icon"
                        />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="cs-form_field_input"
                          required
                        />
                      </Div>
                      <Spacing lg="25" md="20" />
                    </Div>
                    <Div className="col-12">
                      <Div className="cs-form_field_wrapper">
                        <Icon
                          icon="carbon:edit"
                          className="cs-input_icon cs-textarea_icon"
                        />
                        <textarea
                          name="message"
                          placeholder="How can we help you? Feel free to get in touch!"
                          value={formData.message}
                          onChange={handleChange}
                          className="cs-form_field_input cs-textarea"
                          rows="5"
                          required
                        />
                      </Div>
                      <Spacing lg="30" md="25" />
                    </Div>
                    <Div className="col-12">
                      <button
                        type="submit"
                        className="cs-btn cs-style1 cs-btn_lg"
                      >
                        <Icon icon="carbon:send-alt" />
                        <span>Get in Touch</span>
                      </button>
                    </Div>
                  </Div>
                </form>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />

      {/* Google Map Section */}
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.521274927947!2d55.2769437739478!3d25.185637532171537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67658fffffff%3A0x1029aa17408e4623!2sADWEB%20STUDIO!5e0!3m2!1sen!2sus!4v1761461085012!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ADWEB STUDIO Location - Building 2 - 821, 8th Floor - Dubai - United Arab Emirates"
          style={{ border: 0, width: "100%", height: "650px" }}
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}
