import React from 'react';
import parse from 'html-react-parser';
import Div from '@/app/components/common/ui/Div';
import Button from '@/app/components/common/ui/Button';
import VerticalLinks from '@/app/components/common/ui/VerticalLinks';
import GoogleReviews from '@/app/components/common/ui/GoogleReviews';
import Spacing from '@/app/components/common/ui/Spacing';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="cs-hero_video_bg"
      >
        <source src="/video/video-4.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay for better text visibility */}
      <Div className="cs-hero_video_overlay" />

      {/* Content Layer */}
      <Div className="cs-hero_content_wrapper ipad-content">
        {/* Start Google Reviews Section */}
        <Spacing lg="100" md="60" />
        <Div className="container">
          <Div className="text-center">
            <GoogleReviews 
              rating="4.9/5" 
              reviewCount="500+" 
              variant="cs-center"
            />
          </Div>
        </Div>
        {/* End Google Reviews Section */}
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="cs-shape_1" />
        <Div className="container">
          <Div className="cs-hero_text">
            <h1 className="cs-hero_title">{parse(title)}</h1>
            <Div className="cs-hero_info">
              <Div>
                <Button btnLink={btnLink} btnText={btnText} />
              </Div>
              <Div>
                <Div className="cs-hero_subtitle">{subtitle}</Div>
              </Div>
            </Div>
          </Div>
        </Div>
        <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
        <a href={scrollDownId} className="cs-down_btn">
          .
        </a>
      </Div>
    </Div>
  );
}