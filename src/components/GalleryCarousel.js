import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GalleryCarousel({ images = [] }) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Overlay Icons */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#0f172a',
          borderRadius: '12px',
          padding: '6px 10px'
        }}
      >
        <img src="/icon-floorplan.png" alt="Floorplan" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
        <span style={{ color: 'white' }}>|</span>
        <img src="/icon-video-new.png" alt="Video" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
        <span style={{ color: 'white' }}>|</span>
        <img src="/icon-photo-new.png" alt="Photos" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
        <span style={{ color: 'white', fontSize: '0.75rem', marginLeft: '4px' }}>
          1/{images.length}
        </span>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={false}
        spaceBetween={10}
        style={{
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default GalleryCarousel;
