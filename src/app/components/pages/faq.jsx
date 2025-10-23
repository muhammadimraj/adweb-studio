'use client'
import Accordion from "@/app/components/common/ui/Accordion";
import Div from "@/app/components/common/ui/Div";
import Spacing from "@/app/components/common/ui/Spacing";
import SectionHeading from "@/app/components/common/ui/SectionHeading";

export default function FaqPage() {
  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="FAQ"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="50" />
        <Div className="row">
          <Div className="col-lg-4">
            <img 
              src="/images/faq.jpg" 
              alt="FAQ" 
              className="cs-radius_15 w-100"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </Div>
          <Div className="col-lg-7 offset-lg-1">
            <Spacing lg="0" md="40" />
            <Accordion />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
