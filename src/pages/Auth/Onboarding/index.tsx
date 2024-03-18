import { useState } from 'react';
import GetStarted from './GetStarted';
import FirstToKnow from './FirstToKnow';

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
