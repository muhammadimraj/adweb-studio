import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
const badgeData = [
  {
    imgUrl: '/images/badge/clutch.png',
    alt: 'Clutch',
  },
  {
    imgUrl: '/images/badge/designrush.png',
    alt: 'DesignRush',
  },
  {
    imgUrl: '/images/badge/facebook-meta-business-partner.jpg',
    alt: 'Facebook Meta Business Partner',
  },
  {
    imgUrl: '/images/badge/goodfirms.png',
    alt: 'GoodFirms',
  },
  {
    imgUrl: '/images/badge/google-partner.jpg',
    alt: 'Google Partner',
  },
  {
    imgUrl: '/images/badge/provenexpert.png',
    alt: 'ProvenExpert',
  },
  {
    imgUrl: '/images/badge/superbcompanies.png',
    alt: 'Superb Companies',
  },
  {
    imgUrl: '/images/badge/techbehemoths.png',
    alt: 'TechBehemoths',
  },
  {
    imgUrl: '/images/badge/trustpilot.png',
    alt: 'Trustpilot',
  },
];

export default function TimelineSlider() {
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style3">
      {badgeData.map((item, index) => (
        <Div key={index} className="cs-slide_item">
          <Div 
            className="cs-badge_wrapper" 
            style={{ 
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '160px'
            }}
          >
            <img 
              src={item.imgUrl} 
              alt={item.alt} 
              style={{ 
                maxWidth: '100%', 
                height: 'auto',
                maxHeight: '120px',
                objectFit: 'contain'
              }} 
            />
          </Div>
        </Div>
      ))}
    </Slider>
  );
}
