import { useState } from 'react';
import FirstToKnow from '@components/FirstToKnow';
import GetStarted from '@components/GetStarted';

const Onboarding = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);
  const goNext = () => {
    setShowGetStarted(true);
  };

  return (
    <div>
      {showGetStarted ? <GetStarted /> : <FirstToKnow onButtonClick={goNext} />}
    </div>
  );
};

export default Onboarding;
