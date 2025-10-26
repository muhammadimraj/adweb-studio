"use client";

import Div from "@/app/components/common/ui/Div";
import Hero from "@/app/components/pages/hero";
import WhyChooseUs from "@/app/components/pages/why-choose-us";
import Services from "@/app/components/pages/service";
import AboutUs from "@/app/components/pages/about-us";
import Portfolio from "@/app/components/pages/portfolio";
import FunFact from "@/app/components/pages/funfact";
import Review from "@/app/components/pages/review";
import MeetingBanner from "@/app/components/pages/meeting-banner";
import ContactUs from "@/app/components/pages/contact-us";
import Faq from "@/app/components/pages/faq";
import Awards from "@/app/components/pages/award";
import Spacing from "@/app/components/common/ui/Spacing";
import FeatureSection from "@/app/components/common/ui/FeatureSection";

// FunFact Data
const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "40K",
  },
  {
    title: "Project Completed",
    factNumber: "50K",
  },
  {
    title: "Team Members",
    factNumber: "245",
  },
  {
    title: "Digital products",
    factNumber: "550",
  },
];

// Awards Badge Data
const badgeData = [
  {
    imgUrl: '/images/badge/clutch.png',
    alt: 'Clutch',
  },
  {
    imgUrl: '/images/badge/designrush.png',
    alt: 'DesignRush',
  },
  {
    imgUrl: '/images/badge/facebook-meta-business-partner.jpg',
    alt: 'Facebook Meta Business Partner',
  },
  {
    imgUrl: '/images/badge/goodfirms.png',
    alt: 'GoodFirms',
  },
  {
    imgUrl: '/images/badge/google-partner.png',
    alt: 'Google Partner',
  },
  {
    imgUrl: '/images/badge/provenexpert.png',
    alt: 'ProvenExpert',
  },
  {
    imgUrl: '/images/badge/superbcompanies.png',
    alt: 'Superb Companies',
  },
  {
    imgUrl: '/images/badge/techbehemoths.png',
    alt: 'TechBehemoths',
  },
  {
    imgUrl: '/images/badge/trustpilot.png',
    alt: 'Trustpilot',
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Outstanding Web <br/>Design Company in <br/> Dubai"
        subtitle="At ADWEB STUDIO, we go beyond traditional design. We design digital experiences that engage, convert, and bond. We are a reputed Web Design Company Dubai specializing in creating responsive, user-friendly websites that spearhead quantifiable outcomes. We are registered, licensed, and ranked as one of Dubai's best web development companies, serving enterprises, startups, and international brands. Our mission is simple: to deliver websites that look professional and perform as powerful growth engines for your business. No matter whether you are a small retailer or a large corporation, our site development can be created to suit all your brand, goals, and target market."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start Why Choose Us Section */}
      <WhyChooseUs />
      {/* End Why Choose Us Section */}

      {/* Start Service Section */}
      <Services />
      {/* Start Service Section */}

      {/* Start AboutUs Section */}
      <AboutUs />
      {/* End AboutUs Section */}

      {/* Start Portfolio Section */}
      <Portfolio />
      {/* End Portfolio Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}
      
      {/* Start Testimonial Section */}
      <Review />
      {/* End Testimonial Section */}

      {/* Start Feature Section */}
      <FeatureSection />
      {/* End Feature Section */}

      {/* Start Awards Section */}
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <Awards
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="row">
                {badgeData.map((item, index) => (
                  <Div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <Div 
                      className="cs-badge_wrapper" 
                      style={{ 
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '160px',
                        backgroundColor: '#f8f9fa',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <img 
                        src={item.imgUrl} 
                        alt={item.alt} 
                        style={{ 
                          maxWidth: '100%', 
                          height: 'auto',
                          maxHeight: '120px',
                          objectFit: 'contain'
                        }} 
                      />
                    </Div>
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Faq Section */}
      <Faq />
      {/* End Faq Section */}

      {/* Start MeetingBanner Section */}\
      <Div className="container">
        <MeetingBanner
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End MeetingBanner Section */}

      {/* Start ContactUs Section */}
      <ContactUs />
      {/* End ContactUs Section */}
    </>
  );
}
