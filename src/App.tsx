import { useState, useEffect } from 'react';
import '@styles/App.scss';
import SplashScreen from '@components/SplashScreen';
import GetStarted from '@components/GetStarted';
import OnBoard from '@components/OnBoard';
import SignIn from '@components/SignIn';

function App() {
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
          <GetStarted />
        </div>
      )}
    </div>
  );
}

export default App;
