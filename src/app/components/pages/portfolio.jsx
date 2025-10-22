'use client'
import Hero7 from "@/app/components/common/ui/Hero/Hero7";

const showcaseData = [
  {
    title: 'Alasema Trading <br />Wordpress',
    imgUrl: '/images/slider-01.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: '360 Pro Spinner <br />Wordpress',
    imgUrl: '/images/slider-02.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'Arrival Gateway <br />Wordpress',
    imgUrl: '/images/slider-03.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'Aheera Decor<br />Wordpress',
    imgUrl: '/images/slider-04.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'Badia Farm <br />Wordpress',
    imgUrl: '/images/slider-05.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'Beauty Salon <br />Wordpress',
    imgUrl: '/images/slider-06.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'Anglo Corp <br />Development',
    imgUrl: '/images/slider-07.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'Global Pro Marine <br />Development',
    imgUrl: '/images/slider-08.jpg',
    href: '/portfolio/portfolio-details',
  },
  {
    title: 'CourtYard <br />Development',
    imgUrl: '/images/slider-09.jpg',
    href: '/portfolio/portfolio-details',
  },
];

export default function CaseStudyShowcaseHome() {

  return (
    <>
      <Hero7
        showcaseData={showcaseData}
      />
    </>
  );
}
