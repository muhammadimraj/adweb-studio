import React from 'react';
import Div from '../Div';

export default function TestimonialStyle2({
  avatarImgUrl,
  testimonialText,
  avatarName,
  avatarDesignation,
  ratings,
}) {
  // Get the first letter of the name
  const firstLetter = avatarName ? avatarName.charAt(0).toUpperCase() : 'A';
  
  return (
    <Div className="cs-testimonial cs-style3">
      <Div className="cs-client_info">
        <Div className="cs-client_img">
          {avatarImgUrl ? (
            <img src={avatarImgUrl} alt="Avatar" />
          ) : (
            <Div 
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF4A17',
                color: '#fff',
                fontSize: '28px',
                fontWeight: '700',
                borderRadius: '50%',
              }}
            >
              {firstLetter}
            </Div>
          )}
        </Div>
        <Div className="cs-client_meta">
          <h4 className="cs-client_name">{avatarName}</h4>
          <p className="cs-client_designation mb-0">{avatarDesignation}</p>
        </Div>
      </Div>
      <p className="cs-client_review">{testimonialText}</p>
      <Div className="cs-rating">
        <Div
          className="cs-rating_bg"
          style={{ backgroundImage: 'url(/images/rating.svg)' }}
        />
        <Div
          className="cs-rating_percentage"
          style={{
            backgroundImage: 'url(/images/rating.svg)',
            width: `${ratings * 20}%`,
          }}
        />
      </Div>
    </Div>
  );
}
