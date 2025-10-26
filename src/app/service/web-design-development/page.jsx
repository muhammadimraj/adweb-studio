import Div from "@/app/components/common/ui/Div";
import Spacing from "@/app/components/common/ui/Spacing";
import ServiceDetailContent from "@/app/components/common/ui/ServiceDetailContent";
import ContactForm from "@/app/components/common/ui/ContactForm";
import Link from "next/link";

export default function WebDesignDevelopmentPage() {
  const serviceData = {
    title: "Web Design & Development",
    imageSrc: "/images/website-development.jpg",
    introText:
      "At ADWEB STUDIO, we understand the power of a captivating online presence. In today's digital age, your website is often the first interaction potential customers have with your business. It's not just a virtual storefront but a reflection of your brand, values, and professionalism. That's why we are here—to transform your online presence and help you make a lasting impression on the web.",
    services: [
      {
        title: "Custom Web Design",
        description:
          "Our expert designers craft visually appealing websites tailored to your brand identity. Every detail, from color schemes to user interfaces, is meticulously designed to engage your audience.",
      },
      {
        title: "Responsive Web Development",
        description:
          "Having a responsive website is crucial in a world where people browse on various devices. Our developers ensure your website looks and functions flawlessly on desktops, tablets, and smartphones. Your website will adapt seamlessly to different screen sizes, providing an optimal user experience for all visitors.",
      },
      {
        title: "E-commerce Website Solutions",
        description:
          "Ready to sell your products or services online? We specialize in developing secure and user-friendly e-commerce websites. From inventory management to payment gateways, we provide end-to-end solutions that empower your online business.",
      },
      {
        title: "Content Management Systems (CMS)",
        description:
          "Take control of your website's content with easy-to-use CMS platforms like WordPress, Drupal, or Joomla. We create intuitive and efficient CMS solutions tailored to your specific needs, enabling you to update your website effortlessly.",
      },
      {
        title: "SEO Optimization",
        description:
          "A stunning website is essential, but it's equally important to be visible to your target audience. Our SEO experts optimize your website for search engines, ensuring higher rankings and increased organic traffic. We employ ethical strategies that deliver sustainable results.",
      },
      {
        title: "Maintenance and Support",
        description:
          "Your website needs continuous care to perform at its best. We offer reliable maintenance and support services, ensuring your website remains secure, up-to-date, and functional. From bug fixes to content updates, we've got you covered.",
      },
    ],
    servicesTitle: "Our Services",
    whyChooseUs: {
      title: "Why Choose Us?",
      points: [
        {
          title: "Expertise",
          description:
            "Our team comprises highly skilled professionals with years of experience in web design and development. We stay updated with industry trends and technologies to deliver cutting-edge solutions.",
        },
        {
          title: "Customization",
          description:
            "We understand that every business is unique. That's why we offer fully customized solutions to meet your specific requirements.",
        },
        {
          title: "Client-Centric Approach",
          description:
            "Your satisfaction is our priority. We believe in transparent communication, regular updates, and collaboration. We listen to your ideas, understand your goals, and work together to achieve outstanding results.",
        },
        {
          title: "Affordability",
          description:
            "Quality web design and development shouldn't break the bank. We offer modest pricing without bargaining on the quality of our services. You'll get exceptional value for your investment.",
        },
        {
          title: "Support and Maintenance",
          description:
            "Our commitment doesn't end after completing the project. We provide excellent support services to ensure your website performs seamlessly.",
        },
      ],
    },
    additionalImages: [
      {
        src: "/images/website-development-2.jpg",
        alt: "Web Development Process",
      },
      {
        src: "/images/website-development-3.jpg",
        alt: "Web Design Services",
      },
    ],
    closingText:
      "Contact Web Design Company Dubai today, and let's embark on a journey to create a website that meets your goals and exceeds your expectations.",
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
              introText={serviceData.introText}
              services={serviceData.services}
              servicesTitle={serviceData.servicesTitle}
              whyChooseUs={serviceData.whyChooseUs}
              additionalImages={serviceData.additionalImages}
              closingText={serviceData.closingText}
              singleImageLayout={true}
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

