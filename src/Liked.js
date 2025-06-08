// Liked.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Liked() {
  const [likedProperties, setLikedProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('likedProperties');
    if (saved) {
      setLikedProperties(JSON.parse(saved));
    }
  }, []);

  const handleClear = () => {
    const confirmed = window.confirm('Are you sure you want to clear all liked properties?');
    if (confirmed) {
      localStorage.removeItem('likedProperties');
      setLikedProperties([]);
    }
  };

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <h2>Liked Properties</h2>
        <button
          onClick={handleClear}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Clear All
        </button>
      </div>

      {likedProperties.length === 0 ? (
        <p style={{ color: '#6b7280' }}>You haven’t liked any properties yet.</p>
      ) : (
        likedProperties.map((property) => (
          <div
            key={property.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              marginBottom: '1rem',
              overflow: 'hidden'
            }}
          >
            <img
              src={property.image}
              alt={property.type}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <p style={{ fontWeight: '600' }}>{property.type}</p>
              <p style={{ color: '#2563eb', fontWeight: '700' }}>{property.price}</p>
            </div>
          </div>
        ))
      )}

      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '9999px',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
        }}
      >
        ← Back to Browse
      </button>
    </div>
  );
}

export default Liked;

