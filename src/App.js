import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Onboarding from './Onboarding';
import Home from './Home';
import Liked from './Liked';
import PropertyDetails from './PropertyDetails';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(() => {
    return localStorage.getItem('onboardingComplete') !== 'true';
  });

  const handleOnboardingComplete = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setShowOnboarding(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            showOnboarding ? (
              <Onboarding onComplete={handleOnboardingComplete} />
            ) : (
              <Home />
            )
          }
        />
        <Route path="/liked" element={<Liked />} />
        <Route path="/property-details" element={<PropertyDetails />} />

      </Routes>
    </Router>
  );
}

export default App;