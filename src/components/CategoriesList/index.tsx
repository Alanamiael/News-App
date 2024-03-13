import { FC } from 'react';
import { RegularText } from '@shared/Typography';
import { CategoriesListProps } from '@ts/interfaces';
import { categoriesData } from './helpers';
import cl from './CategoriesList.module.scss';

const CategoriesList: FC<CategoriesListProps> = ({
  activeStates,
  handleImageClick,
}) => {
  return (
    <div className={cl.container}>
      {categoriesData.map(({ img, name }) => (
        <div
          className={cl.category}
          key={name}
          onClick={() => handleImageClick(name)}
        >
          <div className={cl.imageWrapper}>
            <img src={img} alt={name} />
          </div>
          <RegularText bold className={cl.categoryName}>
            {name}
          </RegularText>
          <div className={activeStates.includes(name) ? cl.overlay : ''}></div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
