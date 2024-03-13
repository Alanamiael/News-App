import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import SplashScreen from '@pages/Auth/SplashScreen';
import Navigator from '@routes/index';
import { auth } from '@config/firebase';
import { AuthRoutes } from '@enums/enums';
import './styles/App.scss';
const userData = JSON.parse(localStorage.getItem('user') || JSON.stringify(''));
const App = () => {
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate(AuthRoutes.Onboarding);
      }

      if (user && !userData) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    return () => {
      clearTimeout(timer), unsub;
    };
  }, []);

  if (showSplash) {
    return (
      <div className="splashscreen_wrapper">
        <SplashScreen />
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
