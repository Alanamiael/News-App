import { FC } from 'react';
import CustomButton from '@shared/Button';
import Categories from '@components/Categories';
import { ButtonTitles, SubTitles, Titles } from '@enums/enums';
import { MainTitle, RegularText } from '@shared/Typography';
import cl from './CategoriesAuth.module.scss';

const CategoriesAuth: FC = () => {
  return (
    <div className={cl.container}>
      <MainTitle>{Titles.SelectTopics}</MainTitle>
      <RegularText className={cl.textMargins}>
        {SubTitles.SelectTopics}
      </RegularText>
      <Categories />
      <CustomButton text={ButtonTitles.Next} />
    </div>
  );
};
export default CategoriesAuth;
