"use client";
import Div from "@/app/components/common/ui/Div";
import Spacing from "@/app/components/common/ui/Spacing";
import ServiceDetailContent from "@/app/components/common/ui/ServiceDetailContent";
import ContactForm from "@/app/components/common/ui/ContactForm";
import Link from "next/link";

export default function DigitalMarketingPage() {
  const serviceData = {
    title: "Digital Marketing",
    imageSrc: "/images/d-market.jpg",
    subheading: "Digital Marketing Dubai – Your Trusted Partner for Exceptional Digital Marketing Services",
    introText:
      "At ADWEB STUDIO, we understand the power of digital marketing in today's fast-paced business world. With the internet becoming the epicenter of commerce and communication, having a robust online presence is crucial for success. We are here to elevate your brand, drive traffic, and boost your revenue through our comprehensive digital marketing solutions.",
    services: [
      {
        title: "",
        description:
          "By leveraging our expertise and innovative solutions, we help you navigate the digital landscape, outshine your competitors, and achieve sustainable growth. Let us transform your online presence and drive exceptional results for your business.",
      },
    ],
    servicesTitle: "Why Choose Us?",
    whyChooseUs: null,
    industriesWeServe: {
      title: "Our Services",
      industries: [
        "Search Engine Optimization (SEO): Enhance your online visibility and organic traffic with our SEO services. Our experts optimize your website, conduct keyword research, and implement on-page and off-page SEO strategies to improve your search engine rankings.",
        "Pay-Per-Click (PPC) Advertising: Drive instant traffic to your website with our PPC advertising services. We create targeted ad campaigns, optimize keywords, and monitor performance to maximize your ROI and increase conversions.",
        "Social Media Marketing: Engage your audience and build a strong brand presence on social media platforms. Our social media experts develop creative content, manage your social accounts, and run effective ad campaigns to boost your ROI.",
        "Content Marketing: Captivate your audience with compelling content. Our content marketing services include blog posts, articles, videos, infographics, and more. We create high-quality, shareable content that establishes your authority in your industry and attracts new customers.",
        "Email Marketing: Nurture leads and drive conversions through targeted email marketing campaigns. We design visually appealing emails, segment your audience, and craft personalized messages that resonate with your subscribers.",
      ],
    },
    letsTurnSection: {
      title: "",
      text: "As Dubai Digital Marketing Company, we are dedicated to helping businesses thrive in the digital landscape. Partner with us to unlock the full potential of digital marketing and take your business to new heights. Let's work together to create a strong online presence and drive exceptional results together.",
    },
    additionalImages: [
      {
        src: "/images/d-market-2.jpg",
        alt: "Digital Marketing Strategy",
      },
    ],
    servicesImages: [
      {
        src: "/images/d-market-3.jpg",
        alt: "Digital Marketing Services",
      },
      {
        src: "/images/d-market-4.jpg",
        alt: "Digital Marketing Solutions",
      },
    ],
    closingText: "Contact us today to discuss your digital marketing needs and take the first step toward online success!",
  };

  return (
    <>
      {/* Breadcrumb and Title Section */}
      <Spacing lg="120" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-12">
            <Div className="cs-service_detail_header">
              <Div className="cs-breadcrumb">
                <Link href="/">HOME</Link>
                <span className="cs-breadcrumb_separator">|</span>
                <span className="cs-breadcrumb_current">
                  {serviceData.title.toUpperCase()}
                </span>
              </Div>
              <h1 className="cs-service_page_title">{serviceData.title}</h1>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="60" md="40" />

      <Div className="container">
        <Div className="row">
          {/* Left Side - Service Content */}
          <Div className="col-lg-7">
            <ServiceDetailContent
              imageSrc={serviceData.imageSrc}
              subheading={serviceData.subheading}
              introText={serviceData.introText}
              services={serviceData.services}
              servicesTitle={serviceData.servicesTitle}
              whyChooseUs={serviceData.whyChooseUs}
              industriesWeServe={serviceData.industriesWeServe}
              letsTurnSection={serviceData.letsTurnSection}
              additionalImages={serviceData.additionalImages}
              closingText={serviceData.closingText}
              singleImageLayout={true}
              servicesImages={serviceData.servicesImages}
            />
          </Div>

          {/* Right Side - Contact Form (Sticky) */}
          <Div className="col-lg-5">
            <ContactForm />
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />
    </>
  );
}

