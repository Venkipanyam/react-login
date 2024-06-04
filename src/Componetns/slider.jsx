import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider(){
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src='images/realmee8.jpg' alt='' style={{width:"100%",}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/realmee.jpg' alt='' style={{width:"100%"}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/realmee7.jpg' alt='' style={{width:"100%"}} /> 
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/realme1.jpg' alt='' style={{width:"100%"}} /> 
      </SwiperSlide>
      <SwiperSlide>
        <img src='images/realmee2.jpg' alt='' style={{width:"100%"}} /> 
      </SwiperSlide>
 
    </Swiper>
  );
}

export default Slider;