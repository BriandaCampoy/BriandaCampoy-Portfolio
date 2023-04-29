import { NavLink, useLocation } from 'react-router-dom';
import NavIcon from './NavIcon';
import '@styles/nav.css';
import ThemeSelector from './ThemeSelector';
import { useEffect, useState } from 'react';

function Nav() {
  const [theme, setTheme] = useState(false);
  const [gridSize, setGridSize] = useState(3);
  function handleOnSizeChange(change){
    const sum = gridSize + parseInt(change);
    setGridSize(sum);
    changeGridSize(sum)    
  }
  function changeGridSize(gridValue) {
    const sliderGrid = document.getElementById('sliderGrid');
    switch (gridValue) {
      case 2:
        sessionStorage.setItem('gridValue', 2);
        sliderGrid.classList.remove('slider');
        sliderGrid.classList.add('slideGrid2xN');
        document.documentElement.style.setProperty('--ElementSizeL', '200px');
        document.documentElement.style.setProperty('--ElementSizeXL', '300px');
        break;
      case 3:
        sessionStorage.setItem('gridValue', 3);
        sliderGrid.classList.remove('slideGrid4xN');
        sliderGrid.classList.remove('slideGrid2xN');
        sliderGrid.classList.add('slider');
        document.documentElement.style.setProperty('--ElementSizeL', '110px');
        document.documentElement.style.setProperty('--ElementSizeXL', '150px');
        break;
      case 4:
        sessionStorage.setItem('gridValue', 4);
        sliderGrid.classList.remove('slider');
        sliderGrid.classList.add('slideGrid4xN');
        document.documentElement.style.setProperty('--ElementSizeL', '80px');
        document.documentElement.style.setProperty('--ElementSizeXL', '110px');
        break;
    }
  }
  useEffect(() => {
    if(pathname.includes('projects') || pathname.includes('courses') ){
      const gridValue = sessionStorage.getItem('gridValue');
      setGridSize(gridValue ? parseInt(gridValue) : 3)
      changeGridSize(gridValue ? parseInt(gridValue) : 3);
    }
  }, []);
  const { pathname } = useLocation();
  const openThemeSelector = () => {
    setTheme(true);
  };
  const closeThemeSelector = () => {
    setTheme(false);
  };
  return (
    <nav>
      <NavIcon
        name="homesettings"
        className="homesettings"
        img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479736/portfolio/assets/icons/home-settings-gray_1_f5apnr.svg"
        handleClick={openThemeSelector}
      />
      <ul className="nav__sections">
        <li>
          <NavIcon
            name="info"
            className="navIcon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479729/portfolio/assets/icons/bxs-info-circle_vv6ooa.svg"
            selected={pathname === '/'}
            destination={'/'}
          />
        </li>
        <li>
          <NavIcon
            name="projects"
            className="navIcon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479736/portfolio/assets/icons/bxs-folder_ovfv43.svg"
            selected={pathname === '/projects'}
            destination={'/projects'}
          />
        </li>
        <li>
          <NavIcon
            name="school"
            className="navIcon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bxs-graduation_imfsgj.svg"
            selected={pathname === '/courses'}
            destination={'/courses'}
          />
        </li>
        <li>
          <NavIcon
            name="contact"
            className="navIcon"
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479727/portfolio/assets/icons/bxs-contact_g0c9vh.svg"
            selected={pathname === '/contact'}
            destination={'/contact'}
          />
        </li>
      </ul>
      <div className="sizing">
        <div className="size">
          {(gridSize === 2 || !(pathname.includes('projects')|| pathname.includes('courses'))) && (
            <NavLink className="disable__sizing__container">
              <div className="disable__sizing__div">
                <img
                  className="disable__sizing"
                  src={
                    'https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479727/portfolio/assets/icons/bxs-checkbox_yypwo2.svg'
                  }
                  alt={'size'}
                />
              </div>
            </NavLink>
          )}
          {(gridSize !== 2 && (pathname.includes('projects')|| pathname.includes('courses'))) && (
            <NavIcon
              handleClick={() => {
                handleOnSizeChange(-1);
              }}
              name="size"
              className={
                'size ' +
                (pathname === '/contact' || pathname === '/'
                  ? 'NavOpcional'
                  : '')
              }
              img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479727/portfolio/assets/icons/bxs-checkbox_yypwo2.svg"
            />
          )}
        </div>
        <div className="size">
          {(gridSize === 4 || !(pathname.includes('projects')|| pathname.includes('courses')))  && (
            <NavLink className="disable__sizing__container">
              <div className="disable__sizing__div">
                <img
                  className="disable__sizing"
                  src={
                    'https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bxs-grid-alt_voq9bk.svg'
                  }
                  alt={'size'}
                />
              </div>
            </NavLink>
          )}
          {(gridSize !== 4 && (pathname.includes('projects')|| pathname.includes('courses'))) && (
            <NavIcon
              handleClick={() => {
                handleOnSizeChange(+1);
              }}
              name="size"
              className={
                'size ' +
                (pathname === '/contact' || pathname === '/'
                  ? 'NavOpcional'
                  : '')
              }
              img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bxs-grid-alt_voq9bk.svg"
            />
          )}
        </div>
      </div>
      {theme && <ThemeSelector closeThemeSelector={closeThemeSelector} />}
    </nav>
  );
}

export default Nav;
