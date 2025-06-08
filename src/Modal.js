// Modal.js
import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '90%',
          width: '320px',
          textAlign: 'center',
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
