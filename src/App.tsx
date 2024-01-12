import { useState, useEffect } from 'react';
import '@styles/App.scss';
import SplashScreen from '@components/SplashScreen';

import SignUp from '@components/SignUp';
import OnBoard from '@components/OnBoard';

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
          <OnBoard />
        </div>
      )}
    </div>
  );
};

export default App;
