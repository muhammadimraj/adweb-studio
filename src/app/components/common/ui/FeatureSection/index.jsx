import React from 'react';
import Div from '../Div';
import Spacing from '../Spacing';

export default function FeatureSection() {
  return (
    <>
      <Spacing lg="80" md="80" />
      <Div className="container">
        {/* Customisation Options Section */}
        <Div className="cs-feature_section">
          <Div className="row align-items-center">
            <Div className="col-lg-6">
              <Div className="cs-feature_image">
                <img 
                  src="/images/web-design.jpg" 
                  alt="Customisation Options"
                  className="cs-radius_15"
                />
              </Div>
            </Div>
            <Div className="col-lg-6">
              <Div className="cs-feature_content">
                <h2 className="cs-feature_title">Customisation Options</h2>
                <Div className="cs-feature_text">
                  <p>
                    Each company possesses its individual objectives and identity. That's why ADWEB STUDIO provides fully 
                    customised website development services tailored to each client. We do not agree with generic templates. 
                    Rather, we develop websites that portray your brand personality, core values, and customer expectations.
                  </p>
                  <p>
                    We work with you to understand your specific needs. Everything is customized around your business, whether 
                    branded layouts, features, or third-party integrations. Whether you need a customized e-commerce platform, a 
                    professional WordPress site, or a corporate portal, our solutions are flexible and scalable.
                  </p>
                  <p>
                    By choosing ADWEB STUDIO, you're not just getting a website. You're getting a customised digital solution that 
                    supports your long-term growth.
                  </p>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
        
        <Spacing lg="100" md="60" />
        
        {/* SEO & Marketing Integration Section */}
        <Div className="cs-feature_section">
          <Div className="row align-items-center">
            <Div className="col-lg-6 order-lg-2">
              <Div className="cs-feature_image">
                <img 
                  src="/images/d-market.jpg" 
                  alt="SEO & Marketing Integration"
                  className="cs-radius_15"
                />
              </Div>
            </Div>
            <Div className="col-lg-6 order-lg-1">
              <Div className="cs-feature_content">
                <h2 className="cs-feature_title">SEO & Marketing Integration</h2>
                <Div className="cs-feature_text">
                  <p>
                    A site that is not visible is not successful. This is why we create each site with SEO and digital marketing in mind. 
                    Our websites are user and search engine-friendly, courtesy of clean coding practices and quick loading times.
                  </p>
                  <p>
                    We incorporate on-page SEO, such as meta tags, headings, and mobile responsiveness. This will ensure that your 
                    site is ranked higher in the search and that you are reaching the right audience.
                  </p>
                  <p>
                    In addition, our marketing specialists align design with strategy. The content layouts will be created to direct 
                    users towards conversion. We build platforms that drive measurable results by combining professional web 
                    development with SEO-ready structures.
                  </p>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}

