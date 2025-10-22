"use client";
import Image from "next/image";
import Div from "@/app/components/common/ui/Div";
import SectionHeading from "@/app/components/common/ui/SectionHeading";
import Spacing from "@/app/components/common/ui/Spacing";
import aboutImg from "../../../../public/images/about_img_1.jpeg";

export default function AboutPage() {
  return (
    <>
      {/* Start About Section */}
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-7">
            <SectionHeading
              title="Award Winning Website Design Company Dubai"
              subtitle="About Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                ADWEB STUDIO is recognized as one of the top website development
                companies in Dubai. We are trusted for our creativity, strategy,
                and technical expertise. We are proud to be among the most
                experienced experts in the UAE’s competitive digital landscape.
                Our websites are not only visually appealing but also engineered
                for performance. Every site is designed responsively, making the
                user experience on all devices impeccable. We are always
                interested in developing high-performing digital assets,
                automating processes, maximizing conversions, and enhancing
                customer interactions. With a group of experienced designers and
                web developers, we can make your site look like your brand and
                achieve compound growth. This is why we are taking the lead as
                the preferred partner by businesses in most industries in
                developing websites in Dubai
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-1">
            <Image src={aboutImg} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}
    </>
  );
}
