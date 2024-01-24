import lock from '@assets/input/lock.svg';
import mail from '@assets/input/mail.svg';
import user from '@assets/input/user.svg';
import { Placeholders } from '@enums/enums';

export const inputFields = [
  {
    placeholder: Placeholders.Username,
    startInputIcon: user,
  },
  {
    placeholder: Placeholders.EmailAdress,
    startInputIcon: mail,
  },
  {
    placeholder: Placeholders.Password,
    type: 'password',
    startInputIcon: lock,
  },
  {
    placeholder: Placeholders.RepeatPassword,
    type: 'password',
    startInputIcon: lock,
  },
];
