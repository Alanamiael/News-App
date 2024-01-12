import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import { CustomAvatarProps } from '@ts/interfaces';

export const CustomAvatar: FC<CustomAvatarProps> = ({ avatarImg, small }) => {
  return (
    <Avatar
      alt="avatar"
      src={avatarImg}
      sx={{ width: small ? 48 : 72, height: small ? 48 : 72 }}
    />
  );
};
