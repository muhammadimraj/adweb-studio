'use client';
import React from 'react';
import Image from 'next/image';
import Div from '../Div';

export default function GoogleReviews({ 
  rating = '4.9/5', 
  reviewCount = '500+', 
  variant = '',
  showLogo = true 
}) {
  // Generate stars array
  const stars = Array(5).fill(0);

  return (
    <Div className={`cs-google_reviews ${variant}`}>
      <Div className="cs-google_reviews_container">
        {showLogo && (
          <Div className="cs-google_logo">
            <svg width="90" height="30" viewBox="0 0 90 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="22" fontFamily="Product Sans, Arial, sans-serif" fontSize="24" fontWeight="700">
                <tspan fill="#4285F4">G</tspan>
                <tspan fill="#EA4335">o</tspan>
                <tspan fill="#FBBC04">o</tspan>
                <tspan fill="#4285F4">g</tspan>
                <tspan fill="#34A853">l</tspan>
                <tspan fill="#EA4335">e</tspan>
              </text>
            </svg>
          </Div>
        )}
        <Div className="cs-google_reviews_content">
          <Div className="cs-rating_text">{rating} Rating</Div>
          <Div className="cs-stars">
            {stars.map((_, index) => (
              <span key={index} className="cs-star">⭐</span>
            ))}
          </Div>
          <Div className="cs-review_count">{reviewCount} Reviews</Div>
        </Div>
      </Div>
    </Div>
  );
}

