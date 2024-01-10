import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import { ImageAvatarsProps } from '@ts/interfaces';
export const ImageAvatarMedium: FC<ImageAvatarsProps> = ({ avatarImg }) => {
  return <Avatar alt="avatar" src={avatarImg} sx={{ width: 48, height: 48 }} />;
};
export const ImageAvatarBig: FC<ImageAvatarsProps> = ({ avatarImg }) => {
  return <Avatar alt="avatar" src={avatarImg} sx={{ width: 72, height: 72 }} />;
};
