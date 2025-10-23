import React from 'react';
import { useState } from 'react';
import Div from '../../ui/Div';
const accordionData = [
  {
    question: 'How long does it take to design and develop a website?',
    answer:
      'The timeline for website design and development varies depending on the project complexity and requirements. A simple website typically takes 2-4 weeks, while a more complex website with custom features can take 6-12 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the entire process.',
  },
  {
    question: 'Do you provide website maintenance and support after launch?',
    answer:
      'Yes, we offer comprehensive website maintenance and support services to ensure your website runs smoothly. Our maintenance packages include regular updates, security monitoring, bug fixes, content updates, and technical support. We offer flexible monthly and annual maintenance plans tailored to your specific needs.',
  },
  {
    question: 'Will my website be mobile-friendly and SEO optimized?',
    answer:
      'Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. We also implement SEO best practices from the ground up, including proper meta tags, fast loading speeds, clean code structure, and search engine-friendly URLs to help your website rank better in search results.',
  },
  {
    question: 'What is the cost of developing a website?',
    answer:
      'The cost of website development depends on various factors including design complexity, features, functionality, and number of pages. A basic website typically starts from AED 5,000, while more advanced websites with custom features can range from AED 10,000 to AED 50,000+. We offer transparent pricing and provide detailed quotes after understanding your specific requirements during our free consultation.',
  },
  {
    question: 'Can you help with website content and copywriting?',
    answer:
      'Yes, we offer professional content creation and copywriting services as part of our web design packages. Our experienced content writers can create engaging, SEO-optimized content that resonates with your target audience and effectively communicates your brand message. We also provide content strategy, blog writing, and ongoing content management services.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
