import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GalleryCarousel from './components/GalleryCarousel';
import PropertySummary from './components/PropertySummary';

function PropertyDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  if (!property) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Property not found.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: '#f9fafb',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        paddingTop: '64px',
      }}
    >
      {/* Fixed Banner */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '1rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
        >
          ←
        </button>
        <h2 style={{ fontSize: '1.2rem', margin: 0 }}>Property details</h2>
      </div>

      <div
        style={{
          padding: '1rem',
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {/* 1. Image Carousel */}
        <GalleryCarousel
          images={[
            property.image,
            '/demo2.jpg',
            '/demo3.jpg',
          ]}
        />

        {/* 2. Gallery + Virtual Tour Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '1rem',
            padding: '1rem',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
          }}
        >
          {/* Gallery */}
          <button
            onClick={() => console.log('TODO: Open Gallery')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img
              src="/gallery.png"
              alt="Gallery"
              width={28}
              height={28}
              style={{ marginBottom: '6px' }}
            />
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#0f172a',
              }}
            >
              Gallery
            </span>
          </button>

          {/* Virtual Tour */}
          <button
            onClick={() => console.log('TODO: Open Virtual Tour')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#0f172a',
                marginTop: '34px', // visually align with gallery icon
              }}
            >
              Virtual Tour
            </span>
          </button>
        </div>

        {/* 3. Summary Section */}
        <PropertySummary property={property} />
      </div>
    </div>
  );
}

export default PropertyDetails;
