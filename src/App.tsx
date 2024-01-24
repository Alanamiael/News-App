import '@styles/App.scss';

import Navigator from '@routes/index';
import { BrowserRouter } from 'react-router-dom';
import SplashScreen from '@components/SplashScreen';
import { useState, useEffect } from 'react';

import './styles/App.scss';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="splashscreen_wrapper">
        <SplashScreen />{' '}
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigator />
      </div>
    </BrowserRouter>
  );
};

export default App;
