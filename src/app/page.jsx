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
import Faq from "@/app/components/pages/faq";
import Awards from "@/app/components/pages/award";
import TimelineSlider from "@/app/components/common/ui/Slider/TimelineSlider";
import Spacing from "@/app/components/common/ui/Spacing";
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
              <TimelineSlider />
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
    </>
  );
}
