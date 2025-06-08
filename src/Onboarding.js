import { useState } from 'react';

function Onboarding({ onComplete }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://formspree.io/f/meokezdk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '2rem',
        justifyContent: 'center',
      }}
    >
      {/* Logo and tagline container */}
      <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  }}
>
  <img
    src="/listo_logo_white_bg_blue_text.jpg"
    alt="Listo Logo"
    style={{ maxWidth: '180px', marginBottom: '-0.2rem' }}
  />
  <p
    style={{
      color: '#2563eb',
      fontWeight: '500',
      fontSize: '1rem',
      marginTop: '-0.8rem',
      marginBottom: '0.2rem',
    }}
  >
    Swipe. Match. Move.
  </p>
</div>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Join the Waitlist
      </h2>

      <p style={{ marginBottom: '1rem', color: '#4b5563' }}>
        Enter your email to be the first to access Listo.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '320px',
          }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid #d1d5db',
              fontSize: '1rem',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Join Now
          </button>
        </form>
      ) : (
        <p
          style={{
            color: '#10b981',
            fontWeight: '600',
            marginTop: '1rem',
            fontSize: '1.1rem',
          }}
        >
          🎉 You've been added to the waitlist!
        </p>
      )}
    </div>
  );
}

export default Onboarding;