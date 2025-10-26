'use client'
import PageHeading from "@/app/components/common/ui/PageHeading";
import AboutContent from "@/app/components/common/ui/AboutContent";
import CoreValues from "@/app/components/common/ui/CoreValues";
import WhyChooseUs from "@/app/components/pages/why-choose-us";

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
        showAboutHero={true}
      />
      {/* End Page Heading Section */}

      {/* Start About Content Section */}
      <AboutContent />
      {/* End About Content Section */}

      {/* Start Core Values Section */}
      <CoreValues />
      {/* End Core Values Section */}

      {/* Start why choose us section */}
      <WhyChooseUs />
      <div class="cs-height_150 cs-height_lg_50"></div>
      {/* End why choose us section */}
    </>
  );
}
