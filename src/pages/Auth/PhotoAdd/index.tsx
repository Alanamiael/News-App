import { FC, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, styled } from '@mui/material';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

import { Titles, ButtonTitles, AuthRoutes } from '@enums/enums';
import CustomButton from '@shared/Button';
import { MainTitle, RegularText } from '@shared/Typography';
import { storage, auth } from '@config/firebase';
import defaultAvatar from '@assets/avatars/avatar.svg';
import addAvatar from '@assets/avatars/addAvatar.svg';
import cl from './PhotoAdd.module.scss';
import { updateProfile } from 'firebase/auth';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: '50px',
  height: '50px',
});
const PhotoAdd: FC = () => {
  const navigate = useNavigate();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState('');

  const user = JSON.parse(localStorage.getItem('user') || JSON.stringify(''));

  const selectFile = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageRef = storageRef(storage, 'images/' + e.target.files[0].name);
      uploadBytes(imageRef, e.target.files[0])
        .then(() => {
          getDownloadURL(imageRef)
            .then((url) => {
              setImageURL(url);
              if (auth.currentUser) {
                // Додано перевірку на null
                updateProfile(auth.currentUser, {
                  photoURL: url,
                })
                  .then(() => {
                    if (user && user.providerData && user.providerData[0]) {
                      localStorage.setItem(
                        'user',
                        JSON.stringify({
                          ...user,
                          providerData: [
                            { ...user.providerData[0], photoURL: url },
                          ],
                        })
                      );
                    }
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            })
            .catch((error) => {
              console.log('error in url:', error.message);
            });
          setFile(null);
        })
        .catch((error) => {
          console.log('error :', error.message);
        });
    }
  };

  const getImage = () => {
    navigate(AuthRoutes.Categories);
  };

  return (
    <div className={cl.container}>
      <MainTitle className={cl.addPhotoTitle}>{Titles.AddYourPhoto}</MainTitle>

      <div className={cl.imgContainer}>
        <img
          src={imageURL || user.providerData[0].photoURL || defaultAvatar}
          className={cl.uploadedImg}
        />
        <IconButton className={cl.plusIcon} onClick={selectFile}>
          <img src={addAvatar} />
          <VisuallyHiddenInput
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
          />
        </IconButton>
      </div>

      <div className={cl.buttonsContainer}>
        <Link to={AuthRoutes.Categories} className={cl.noUnderline}>
          <RegularText className={cl.skipTitle}>
            {ButtonTitles.Skip}
          </RegularText>
        </Link>
        <CustomButton text={ButtonTitles.NextStep} onClick={getImage} />
      </div>
    </div>
  );
};

export default PhotoAdd;
