import React from 'react';
import '@styles/ThemeSelector.css';
import Theme from './Theme';

const ThemeSelector = ({closeThemeSelector}) => {
  return (
    <div className="themeSelector-container">
      <div className="themeSelector">
        <div className="themeSelector__title">
          <img
            className="theme__icon"
            src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1681627064/portfolio/assets/icons/home_icon_mx9uuy.svg"
            alt=""
          />
          <p className="font-md">Themes</p>
        </div>
        <div className="themeSelector__themes">
          {themes.map((theme) => (
            <Theme theme={theme} key={theme.name}/>
          ))}
        </div>
      <div className="closeThemeSelector" onClick={closeThemeSelector}>
        <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bx-x_vb0ij7.svg" alt="" />
      </div>
      </div>
    </div>
  );
};

const themes = [
  {
    name: 'Main theme',
    primary: '#76232b',
    secondary: '#26324b',
    background: '#d7d6d4',
    darkPrimary: '#4e0b12',
    darkSecondary: '#0f1120',
    darkBackground: '#6a615f'
  },
  {
    name: 'Dark theme',
    primary: '#4e0b12',
    secondary: '#0f1120',
    background: '#6a615f',
    darkPrimary: '#76232b',
    darkSecondary: '#26324b',
    darkBackground: '#d7d6d4'
  },
  {
    name: 'Sky Theme',
    primary: '#BFEFFF',
    secondary: '#7EC0EE ',
    background: '#4682B4',
    darkPrimary: '#4169E1',
    darkSecondary: '#1C1C1C ',
    darkBackground: '#FFC0CB '
  },
  {
    name: 'Earth theme',
    primary: '#34BA3A',
    secondary: '#B29B81',
    background: '#00C2FF',
    darkPrimary: '#0B4E0E',
    darkSecondary: '#534833',
    darkBackground: '#0007AA'
  }
];

export default ThemeSelector;
