import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeBanner = () => {

    const banner = useSelector(state => state.banners.banner)

    return (
        <Div>
            <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            >
            {
                banner.length === 0 ? <SwiperSlide className='Loading-banner'><h5>درحال دریافت اطلاعات....</h5></SwiperSlide> : 
                banner.map((item, index)=>
                    <SwiperSlide className='swiper-banner' key={index}><img className='banner-image' src={item.image} alt="" /></SwiperSlide>
                )
            }
        </Swiper>
        </Div>
    );
};

const Div = styled.div`
    margin: 1rem auto;
    width: 93%;
    height: 50%;
    box-shadow: 0px 5px 10px rgba(0,0,0,.4);
    object-fit: cover;
    border-radius: .3rem;
    overflow: hidden;
    .swiper-banner {
        height: 100%;
        width: 100%;
        .banner-image {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    .Loading-banner {
        height: 100%;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
`;

export default HomeBanner;