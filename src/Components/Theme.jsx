import React from 'react'

const Theme = ({theme}) => {
  function handleChangeTheme() {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--background-color', theme.background);
    document.documentElement.style.setProperty('--primary-darkcolor', theme.darkPrimary);
    document.documentElement.style.setProperty('--secondary-darkcolor', theme.darkSecondary);
    document.documentElement.style.setProperty('--background-darkcolor', theme.darkBackground);

  }
  return (
    <div className='theme' onClick={handleChangeTheme}>
      <p className='theme__name'>{theme.name}</p>
      <div className="barColors">
        <div style={{ backgroundColor: theme.primary }} className="barColor barColors__backgroundColor"></div>
        <div style={{ backgroundColor: theme.secondary }} className="barColor barColorbarColors__primaryColor"></div>
        <div style={{ backgroundColor: theme.background }} className="barColor barColors__darkprimaryColor"></div>
        <div style={{ backgroundColor: theme.darkPrimary }} className="barColor barbarColors__secondaryColor"></div>
        <div style={{ backgroundColor: theme.darkSecondary }} className="barColor barColors__darksecondaryColor"></div>
        <div style={{ backgroundColor: theme.darkBackground }} className="barColor barColors__darkbackgroundColor"></div>
      </div>
    </div>
  )
}

export default Theme