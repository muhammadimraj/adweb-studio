"use client";
import Div from "@/app/components/common/ui/Div";
import Spacing from "@/app/components/common/ui/Spacing";
import ServiceDetailContent from "@/app/components/common/ui/ServiceDetailContent";
import ContactForm from "@/app/components/common/ui/ContactForm";
import Link from "next/link";

export default function AppDevelopmentPage() {
  const serviceData = {
    title: "Mobile App Development",
    imageSrc: "/images/mobile-app-development.jpg",
    subheading: "Your Best Mobile App Development Partner in Dubai",
    introText:
      "At ADWEB STUDIO, we craft innovative and user-friendly mobile applications that empower businesses and individuals to thrive in the digital landscape. With a passion for technology and a commitment to excellence, we deliver cutting-edge mobile app development solutions tailored to your unique needs.",
    services: [
      {
        title: "Expertise that Drives Results",
        description:
          "Our team of seasoned mobile app developers possesses deep expertise in various technologies and platforms, ensuring that we can bring your app idea to life, regardless of the complexity.",
      },
      {
        title: "Custom Solutions, Tailored for You",
        description:
          "We understand that every business is unique. That's why we offer fully customized mobile app development services that align perfectly with your goals and objectives. Whether you need a sleek consumer app or a robust enterprise solution, we have you covered.",
      },
      {
        title: "Great UX/UI Design",
        description:
          "User experience is at the heart of everything we do. Our skilled designers create intuitive and visually appealing interfaces, guaranteeing your app users a seamless and delightful experience.",
      },
      {
        title: "Agile Development Methodology",
        description:
          "We follow agile development practices, allowing us to adapt to changing requirements swiftly. This ensures your app is developed efficiently, meeting deadlines and exceeding expectations.",
      },
      {
        title: "End-to-end Services",
        description:
          "From conceptualization and design to development, testing, and deployment, we offer comprehensive end-to-end mobile app development services. We are with you every step of the way, ensuring a hassle-free experience and a successful app launch.",
      },
      {
        title: "Quality Assurance",
        description:
          "Quality is our top priority. Our rigorous testing processes guarantee that your app functions flawlessly, providing a reliable and secure user experience.",
      },
      {
        title: "Post-Launch Support",
        description:
          "Our commitment to your success doesn't end at launch. We provide ongoing support and maintenance services, promptly addressing issues and keeping your app up-to-date with the latest technologies and trends.",
      },
    ],
    whyChooseUs: null,
    industriesWeServe: {
      title: "Industries We Serve",
      industries: [
        "Retail and E-commerce",
        "Healthcare",
        "Finance and Banking",
        "Education",
        "Travel and Hospitality",
        "Entertainment",
        "And Many More!",
      ],
    },
    letsTurnSection: {
      title: "Let's Turn Your App Idea into Reality",
      text: "Are you ready to transform your app idea into a powerful digital solution? Partner with Mobile App Development Company Dubai and experience the difference of working with a dedicated and innovative mobile app development team.",
    },
    additionalImages: [
      {
        src: "/images/mobile-app-development-2.jpg",
        alt: "Mobile App Development Industries",
      },
      {
        src: "/images/mobile-app-development-3.jpg",
        alt: "App Development Process",
      },
      {
        src: "/images/mobile-app-development-4.jpg",
        alt: "Mobile App Solutions",
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
              servicesTitle="Why Choose Mobile App Development Services Dubai?"
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

