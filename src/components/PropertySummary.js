// src/components/PropertySummary.js
import React from 'react';
import { FaHome, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

function PropertySummary({ property }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        marginTop: '2rem',
      }}
    >
      <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        {property.price}
      </h2>
      <p style={{ marginBottom: '0.25rem', color: '#6b7280' }}>Guide price</p>
      <p style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{property.address || 'The Avenue, Bengeo'}</p>
      <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>Reduced on 05/06/2025</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>PROPERTY TYPE</p>
          <p><FaHome style={{ marginRight: '6px' }} /> {property.type?.split(' ').slice(-1).join(' ')}</p>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>BEDROOMS</p>
          <p><FaBed style={{ marginRight: '6px' }} /> 4</p>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>BATHROOMS</p>
          <p><FaBath style={{ marginRight: '6px' }} /> 1</p>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>SIZE</p>
          <p><FaRulerCombined style={{ marginRight: '6px' }} /> Ask agent</p>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>TENURE</p>
          <p>Freehold</p>
        </div>
      </div>
    </div>
  );
}

export default PropertySummary;

