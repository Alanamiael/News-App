import { useState } from 'react';
import FirstToKnow from '@components/FirstToKnow';
import GetStarted from '@components/GetStarted';

const Onboarding = () => {
  const [showGetStarted, setShowGetStarted] = useState(false);

  const goNext = () => {
    setShowGetStarted(true);
  };

  return showGetStarted ? (
    <GetStarted />
  ) : (
    <FirstToKnow onButtonClick={goNext} />
  );
};

export default Onboarding;
