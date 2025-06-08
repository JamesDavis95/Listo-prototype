// Home.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUndoAlt, FaTimes, FaStar, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './App.css';

const properties = [
  {
    id: 1,
    image: '/demo1.jpg',
    price: '£950,000',
    type: '3 Bed Terraced House',
    agentLogo: '/grantjbates-logo.jpg',
    justListed: true,
    photosCount: '1/8',
  },
  {
    id: 2,
    image: '/demo2.jpg',
    price: '£675,000',
    type: '2 Bed Flat',
    agentLogo: '/grantjbates-logo.jpg',
    justListed: false,
    photosCount: '1/10',
  },
  {
    id: 3,
    image: '/demo3.jpg',
    price: '£1,200,000',
    type: '4 Bed Semi-Detached',
    agentLogo: '/grantjbates-logo.jpg',
    justListed: true,
    photosCount: '1/12',
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem('likedProperties');
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  const handleSwipe = (direction) => {
    if (direction === 'rewind' && history.length > 0) {
      const lastIndex = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setIndex(lastIndex);
    } else {
      setHistory([...history, index]);
      setIndex((prev) => (prev + 1) % properties.length);
    }
  };

  const handleLike = () => {
    const newLiked = [...liked, properties[index]];
    setLiked(newLiked);
    localStorage.setItem('likedProperties', JSON.stringify(newLiked));
    handleSwipe('right');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '2rem' }}>
      <img
        src="/listo_logo_white_bg_blue_text.jpg"
        alt="Listo Logo"
        style={{ maxWidth: '180px', marginBottom: '1rem', cursor: 'pointer' }}
        onClick={() => navigate('/liked')}
      />

      <div style={{ position: 'relative', width: '320px', height: '560px' }}>
        <AnimatePresence>
          <motion.div
            key={properties[index].id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) handleSwipe('left');
              else if (info.offset.x > 100) handleSwipe('right');
            }}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative' }}>
              <img
  src={properties[index].image}
  alt="property"
  onClick={() => navigate('/property-details', { state: { property: properties[index] } })}
  style={{ width: '100%', height: '240px', objectFit: 'cover', cursor: 'pointer' }}
/>


              <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#0f172a', borderRadius: '12px', padding: '6px 10px' }}>
                <img src="icon-floorplan.png" alt="Floorplan" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
                <span style={{ color: 'white' }}>|</span>
                <img src="icon-video-new.png" alt="Video" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
                <span style={{ color: 'white' }}>|</span>
                <img src="icon-photo-new.png" alt="Photos" width={16} height={16} style={{ filter: 'brightness(0) invert(1)' }} />
                <span style={{ color: 'white', fontSize: '0.75rem', marginLeft: '4px' }}>{properties[index].photosCount}</span>
              </div>
            </div>

            <div style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{ fontWeight: 600, fontSize: '1rem', flex: 1 }}>{properties[index].type}</p>
                <img src={properties[index].agentLogo} alt="Agent Logo" style={{ height: '48px', maxWidth: '120px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <p style={{ fontWeight: '700', fontSize: '1.2rem', color: '#2563eb', marginTop: '0.5rem' }}>{properties[index].price}</p>
              {properties[index].justListed && <span style={{ backgroundColor: '#facc15', padding: '0.2rem 0.5rem', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 'bold', display: 'inline-block', marginTop: '0.5rem' }}>Just Listed</span>}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', fontSize: '0.9rem', color: '#111827' }}>
                <div><p style={{ fontWeight: 'bold', margin: 0 }}>Property Type</p><p>End of Terrace</p></div>
                <div><p style={{ fontWeight: 'bold', margin: 0 }}>Bedrooms</p><p>3</p></div>
                <div><p style={{ fontWeight: 'bold', margin: 0 }}>Bathrooms</p><p>1</p></div>
                <div><p style={{ fontWeight: 'bold', margin: 0 }}>Size</p><p>Ask agent</p></div>
                <div style={{ gridColumn: 'span 2' }}><p style={{ fontWeight: 'bold', margin: 0 }}>Tenure</p><p>Freehold</p></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
        <button onClick={() => handleSwipe('rewind')} style={iconButton('#8b5cf6')}><FaUndoAlt /></button>
        <button onClick={() => handleSwipe('left')} style={iconButton('#ef4444')}><FaTimes /></button>
        <button onClick={handleLike} style={iconButton('#facc15')}><FaStar /></button>
        <button onClick={() => handleSwipe('right')} style={iconButton('#2563eb')}><FaHeart /></button>
      </div>
    </div>
  );
}

const iconButton = (bgColor) => ({
  backgroundColor: bgColor,
  color: 'white',
  fontSize: '1rem',
  padding: '0.75rem',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
});

export default Home;