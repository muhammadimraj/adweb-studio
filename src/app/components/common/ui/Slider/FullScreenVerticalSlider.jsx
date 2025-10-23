import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import Div from "../../ui/Div";
import Link from "next/link";

export default function FullScreenVerticalSlider({ data }) {
  const swiperRef = useRef(null);
  const isAtEnd = useRef(false);
  const isAtBeginning = useRef(true);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAtEnd.current && e.deltaY > 0) {
        // User is scrolling down at the last slide
        const heroWrap = document.querySelector('.cs-hero_7_wrap');
        if (heroWrap) {
          const nextSection = heroWrap.nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else if (isAtBeginning.current && e.deltaY < 0) {
        // User is scrolling up at the first slide
        const heroWrap = document.querySelector('.cs-hero_7_wrap');
        if (heroWrap) {
          const prevSection = heroWrap.previousElementSibling;
          if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
          } else {
            // Scroll to top of page if no previous section
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    };

    const sliderElement = document.querySelector('.cs-vertical_slider');
    if (sliderElement) {
      sliderElement.addEventListener('wheel', handleWheel, { passive: true });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  const handleSlideChange = (swiper) => {
    isAtEnd.current = swiper.isEnd;
    isAtBeginning.current = swiper.isBeginning;
  };

  return (
    <>
      <Div className="cs-vertical_slider cs-swiper_arrow_style_1">
        <Div className="swiper-button image-swiper-button-next">
          Next <Icon icon="bi:arrow-right" />
        </Div>
        <Div className="swiper-button image-swiper-button-prev">
          <Icon icon="bi:arrow-left" /> Prev
        </Div>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          pagination={{
            clickable: true,
            type: 'bullets',
          }}
          speed={1000}
          loop={false}
          modules={[Mousewheel, Navigation, Pagination]}
          className="mySwiper"
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            isAtEnd.current = swiper.isEnd;
            isAtBeginning.current = swiper.isBeginning;
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Div
                className="cs-hero cs-style5 cs-bg"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                <Div className="cs-hero_text">
                  <h2 className="cs-hero_title">{parse(item.title)}</h2>
                  <Link href={item.href} className="cs-btn cs-style1 cs-type1">
                    <span>View Case Study</span>
                  </Link>
                </Div>
              </Div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Div>
    </>
  );
}
