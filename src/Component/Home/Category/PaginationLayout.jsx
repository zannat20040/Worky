import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../../../assets/all css/pagination.css'

// import required modules
import { Pagination } from "swiper/modules";
import JobCategoryLayout from "./JobCategoryLayout";

const PaginationLayout = ({ cardData }) => {
  const cardsPerPage = 4;
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' custom-page-number">' + (index + 1) + "</span>";
    },
  };

  const totalSlides = Math.ceil(cardData.length / cardsPerPage);

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(totalSlides)].map(( _ , index) => (
          <SwiperSlide key={index} className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                  {cardData
                    .slice(index * cardsPerPage, (index + 1) * cardsPerPage)
                    .map((item) => (
                      <JobCategoryLayout
                        item={item}
                        key={item._id}
                      ></JobCategoryLayout>
                    ))}
                </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default PaginationLayout;
