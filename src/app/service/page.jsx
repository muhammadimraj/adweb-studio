'use client'
import Cta from "@/app/components/common/ui/Cta";
import Div from "@/app/components/common/ui/Div";
import PageHeading from "@/app/components/common/ui/PageHeading";
import Spacing from "@/app/components/common/ui/Spacing";
import Service from "@/app/components/pages/service";

export default function ServicesPage() {
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Services'
        showServiceHero={true}
      />
      
      {/* Service Component */}
      <Service />
      
      <Spacing lg='150' md='80'/>
      
      <Div className="container">
        <Cta 
          title='The Main Thing For Us <br /> is Your Result!' 
          btnText='Get Started' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg_3.jpeg'
        />
      </Div>

      <Spacing lg='150' md='80'/>
    </>
  )
}
