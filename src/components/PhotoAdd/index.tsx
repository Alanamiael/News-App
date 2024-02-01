import { Link, useNavigate } from 'react-router-dom';
import { ButtonTitles, Titles } from '@enums/enums';
import CustomButton from '@shared/Button';
import { MainTitle, RegularText } from '@shared/Typography';
import defaultAvatar from '@assets/avatars/avatar.svg';
import addAvatar from '@assets/avatars/addAvatar.svg';
import cl from './PhotoAdd.module.scss';

function PhotoAdd() {
  const navigate = useNavigate();

  const goToCategories = () => {
    navigate('/categaries-auth');
  };
  return (
    <div className={cl.container}>
      <MainTitle className={cl.addPhotoTitle}>{Titles.AddYourPhoto}</MainTitle>

      <div className={cl.imgContainer}>
        <img src={defaultAvatar} />
        <img src={addAvatar} className={cl.plusIcon} />
      </div>

      <div className={cl.buttonsContainer}>
        <Link to={'/categories-auth'} className={cl.noUnderline}>
          <RegularText className={cl.skipTitle}>
            {ButtonTitles.Skip}
          </RegularText>
        </Link>
        <CustomButton text={ButtonTitles.NextStep} onClick={goToCategories} />
      </div>
    </div>
  );
}

export default PhotoAdd;
