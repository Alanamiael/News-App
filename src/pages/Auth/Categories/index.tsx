import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Titles, SubTitles, ButtonTitles, MainRoutes } from '@enums/enums';
import CustomButton from '@shared/Button';
import { MainTitle, RegularText } from '@shared/Typography';
import CategoriesList from '@components/CategoriesList';
import { ref, set } from 'firebase/database';
import { database } from '@config/firebase';
import cl from './Categories.module.scss';

const Categories: FC = () => {
  const navigate = useNavigate();
  const [activeStates, setActiveStates] = useState<string[]>([]);

  const user = JSON.parse(localStorage.getItem('user') || JSON.stringify(''));

  const handleImageClick = (name: string) => {
    setActiveStates((prev) => {
      if (prev.includes(name)) {
        return prev.filter((item) => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  const handleNextClick = () => {
    const userRef = ref(database, 'usersCategories/' + user?.uid);
    set(userRef, activeStates);
    navigate(MainRoutes.Homepage);
  };

  return (
    <div className={cl.container}>
      <MainTitle>{Titles.SelectTopics}</MainTitle>
      <RegularText className={cl.textMargins}>
        {SubTitles.SelectTopics}
      </RegularText>
      <CategoriesList
        handleImageClick={handleImageClick}
        activeStates={activeStates}
      />
      <CustomButton text={ButtonTitles.Next} onClick={handleNextClick} />
    </div>
  );
};
export default Categories;
