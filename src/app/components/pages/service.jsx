'use client'
import Div from "@/app/components/common/ui/Div";
import SectionHeading from "@/app/components/common/ui/SectionHeading";
import ServiceList from "@/app/components/common/ui/ServiceList";
import Spacing from "@/app/components/common/ui/Spacing";


export default function MarketingAgencyHome() {
  return (
    <>

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
        <Spacing lg="70" md="45" />
      </Div>
      {/* End Services Section */}
    </>
  );
}
