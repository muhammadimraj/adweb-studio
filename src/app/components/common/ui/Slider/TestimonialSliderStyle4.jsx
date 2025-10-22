import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import TestimonialStyle2 from '../Testimonial/TestimonialStyle2';
const testimonialData = [
  {
    testimonialText:
      'Excellent services from Adweb Studio! They delivered a sleek, responsive website on time, tailored to my business needs. Their team is creative, efficient, and communicative. Best web design company in Dubai! Highly recommended!',
    avatarName: 'Tahira Haseeb',
    avatarDesignation: 'Client',
    ratings: '5',
  },
  {
    testimonialText:
      "Many thanks to everyone who has contributed to my site. My website has been quite successful for the last eight years that I've been working in this field. I also like to express my gratitude for the superb SEO efforts you have made. I believe you did a great job, especially considering that I had no idea what to do.",
    avatarName: 'Morgan Moss',
    avatarDesignation: 'Client',
    ratings: '5',
  },
  {
    testimonialText:
      'You may rely heavily on their assistance since they are wonderful. The company recommended that I use two of the three complimentary innovations they offered to my company. The helpfulness of the staff is one of the many strengths of this firm.',
    avatarName: 'Prince Das',
    avatarDesignation: 'Client',
    ratings: '5',
  },
  {
    testimonialText:
      'We hired ADWEB STUDIO for our Mobile App Project which is quite bigger market place portal! They have done a amazing job! Designs team were really talented and technology side also they are very strong. Now they are managing our project on yearly basis. GOOD JOB GUYS!',
    avatarName: 'Ayesha Dukhtr',
    avatarDesignation: 'Client',
    ratings: '5',
  },
  {
    testimonialText:
      "I appreciate everyone's hard work on my site. I've been in this industry for almost 8 years, and my website has been quite successful during that time. Not to mention, I really appreciate the excellent SEO work you've done. As I was at a loss as to what to do, I think you did a fantastic job.",
    avatarName: 'Tinnu',
    avatarDesignation: 'Client',
    ratings: '5',
  },
  {
    testimonialText:
      'I look forward to continuing to work with ADWEB STUDIO, since I have enjoyed our past partnership as much as this one. Always impeccable! If you have any queries, the friendly and trustworthy team is here to assist.',
    avatarName: 'Pritam Choudhary',
    avatarDesignation: 'Client',
    ratings: '5',
  },
  {
    testimonialText:
      'They have done a amazing job! Designs team were really talented and technology side also they are very strong. Now they are managing our project on yearly basis. GOOD JOB GUYS!',
    avatarName: 'Kelen Dke',
    avatarDesignation: 'Client',
    ratings: '5',
  },
];

export default function TestimonialSliderStyle4() {
  /** Team Member Data **/

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
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {testimonialData.map((item, index) => (
        <Div key={index}>
          <TestimonialStyle2 {...item} />
        </Div>
      ))}
    </Slider>
  );
}
