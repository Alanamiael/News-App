import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '@shared/Button';
import { RegularText } from '@shared/Typography';
import { ButtonTitles, SubTitles } from '@enums/enums';
import handshake from '@assets/getStarted.svg';
import cl from './GetStarted.module.scss';

const GetStarted: FC = () => {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <div className={cl.imgContainer}>
      <img src={handshake} alt="img" />
      <div className={cl.container}>
        <RegularText className={cl.margins}>
          {SubTitles.FirstToKnow}
        </RegularText>
        <CustomButton text={ButtonTitles.GetStarted} onClick={goToSignIn} />
      </div>
    </div>
  );
};
export default GetStarted;
