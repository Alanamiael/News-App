import { useState } from 'react';
import FirstToKnow from '@components/FirstToKnow';
import GetStarted from '@components/GetStarted';

const Onboarding = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const handleButtonClick = () => {
    setShowGetStarted(true);
  };

  return (
    <div>
      {!showGetStarted && <FirstToKnow onButtonClick={handleButtonClick} />}
      {showGetStarted && <GetStarted />}
    </div>
  );
};

export default Onboarding;
