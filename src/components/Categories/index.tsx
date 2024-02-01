import { FC, useState } from 'react';
import { RegularText } from '@shared/Typography';
import { categoriesData } from './helpers';
import cl from './Categories.module.scss';

const Categories: FC = () => {
  const [activeStates, setActiveStates] = useState(
    new Array(categoriesData.length).fill(false)
  );

  const handleImageClick = (index: number) => {
    const newActiveStates = [...activeStates];
    newActiveStates[index] = !newActiveStates[index];
    setActiveStates(newActiveStates);
  };

  return (
    <div className={cl.container}>
      {categoriesData.map(({ img, name }, index) => (
        <div className={cl.category} key={index}>
          <div
            className={cl.imageWrapper}
            onClick={() => handleImageClick(index)}
          >
            <img src={img} alt={name} />
          </div>
          <RegularText bold className={cl.categoryName}>
            {name}
          </RegularText>

          <div
            className={`${cl.imageWrapper} ${
              activeStates[index] ? cl.overlay : ''
            }`}
            onClick={() => handleImageClick(index)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
