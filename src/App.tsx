import { useState, useEffect } from 'react';
import Navigator from '@routes/index';
import SplashScreen from '@components/SplashScreen';
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
    <div className="wrapper">
      <Navigator />
    </div>
  );
};

export default App;
