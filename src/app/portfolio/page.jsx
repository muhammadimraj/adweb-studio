'use client'
import Cta from "@/app/components/common/ui/Cta";
import Div from "@/app/components/common/ui/Div";
import PageHeading from "@/app/components/common/ui/PageHeading";
import SectionHeading from "@/app/components/common/ui/SectionHeading";
import Spacing from "@/app/components/common/ui/Spacing";
import PortfolioSection from "@/app/components/pages/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="80" md="80" />
      <Div className="container">
        <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
      </Div>
      <Spacing lg="90" md="45" />
      <PortfolioSection />
      <Spacing lg="80" md="80" />
    </>
  );
}
