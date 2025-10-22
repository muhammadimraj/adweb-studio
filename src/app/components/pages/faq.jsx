'use client'
import Accordion from "@/app/components/common/ui/Accordion";
import Div from "@/app/components/common/ui/Div";
import Spacing from "@/app/components/common/ui/Spacing";

export default function FaqPage() {
  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
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
