import { useState, useEffect } from 'react';
import SplashScreen from '@components/SplashScreen';
import Onboarding from '@components/Onboarding';
import '@styles/App.scss';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showSplash ? (
        <div className="container">
          <SplashScreen />{' '}
        </div>
      ) : (
        <div className="wrapper">
          <Onboarding />
        </div>
      )}
    </div>
  );
};

export default App;
