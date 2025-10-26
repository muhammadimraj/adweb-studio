"use client";
import SectionHeading from "@/app/components/common/ui/SectionHeading";
import TestimonialSliderStyle4 from "@/app/components/common/ui/Slider/TestimonialSliderStyle4";

export default function PersonalPortfolioHome() {
  return (
    <>
      {/* Start Testimonial Section */}
      <section>
        <div className="container">
          <SectionHeading
            title="What clients say <br>about our services"
            subtitle="Testimonials"
          />
          <div className="cs-height_90 cs-height_lg_45" />
          <TestimonialSliderStyle4 />
        </div>
      </section>
      {/* End Testimonial Section */}
    </>
  );
}
