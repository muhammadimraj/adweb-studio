"use client";
import Div from "@/app/components/common/ui/Div";
import Spacing from "@/app/components/common/ui/Spacing";
import ServiceDetailContent from "@/app/components/common/ui/ServiceDetailContent";
import ContactForm from "@/app/components/common/ui/ContactForm";
import Link from "next/link";

export default function SEOPage() {
  const serviceData = {
    title: "Search Engine Optimization",
    imageSrc: "/images/search-engine.jpg",
    subheading: "SEO Company Dubai – Your Partner in SEO Excellence",
    introText:
      "Are you looking to skyrocket your online presence, increase website traffic, and boost your sales? Look no further! At ADWEB STUDIO, we specialize in cutting-edge SEO services tailored to your unique business needs. With a team of experienced professionals, we are committed to helping you achieve top rankings in search engine results pages (SERPs) and dominate your competition online.",
    services: [
      {
        title: "Proven Track Record",
        description:
          "With a wealth of experience in the industry, we have successfully helped numerous businesses enhance their online visibility and achieve tangible results. Our track record speaks for itself, showcasing clients' success stories who have witnessed significant growth in their organic traffic and revenue.",
      },
      {
        title: "Tailored Strategies",
        description:
          "We understand that every business is different. That's why we craft personalized SEO strategies designed to address your specific needs and objectives. Whether you're a small local business or a large enterprise, we have the expertise to create a customized plan that works for you.",
      },
      {
        title: "Comprehensive SEO Services",
        description:
          "From keyword research and on-page optimization to off-page SEO and technical audits, we offer a wide range of services covering all search engine optimization aspects. Our team stays ahead of the curve, implementing the latest techniques to ensure your website stays competitive in the ever-evolving digital landscape.",
      },
      {
        title: "Transparent Communication",
        description:
          "We believe in clear, open communication with our clients. Throughout the entire process, you'll be kept informed about the progress of your SEO campaigns. Our team is always available to answer your questions and provide regular updates, ensuring you are confident in the strategies we're implementing.",
      },
    ],
    servicesTitle: "Why Choose Us?",
    whyChooseUs: null,
    industriesWeServe: {
      title: "Our Services:",
      industries: [
        "Keyword Research and Analysis: Identifying keywords is crucial for SEO success. Our experts conduct in-depth research to discover high-value keywords relevant to your business, ensuring your website ranks for the most critical terms.",
        "On-Page Optimization: We optimize your website's structure, content, and HTML elements to make it search engine-friendly. From meta tags and headers to internal linking and mobile responsiveness, we cover every detail to enhance your site's visibility.",
        "Off-Page SEO: Building high-quality backlinks and establishing your online presence beyond your website is essential. Our off-page SEO strategies focus on link building, social media marketing, and other tactics to improve your site's authority and credibility.",
        "Technical SEO Audit: Our experts conduct thorough technical audits to identify and fix any issues that might hinder your website's performance in search engines. We address site speed, mobile-friendliness, and crawl errors to enhance user experience and search engine rankings.",
        "Local SEO: For businesses targeting local customers, our local SEO services help you appear in local searches. We optimize your Google My Business profile, create local citations, and implement location-based strategies to boost your visibility in local search results.",
      ],
    },
    letsTurnSection: {
      title: "Get Started Today!",
      text: "Ready to transform your online presence and take your business to new heights? Contact SEO Dubai to discuss how our expert SEO services can benefit your business. Let's work together to achieve your digital marketing goals and drive unparalleled success for your brand.",
    },
    additionalImages: [
      {
        src: "/images/search-engine-2.jpg",
        alt: "SEO Services",
      },
      {
        src: "/images/search-engine-3.jpg",
        alt: "Search Engine Optimization",
      },
      {
        src: "/images/search-engine-4.jpg",
        alt: "SEO Word Cloud",
      },
    ],
    closingText: "",
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

