import { useLocation } from 'react-router-dom';
import NavIcon from './NavIcon';
import '@styles/nav.css';
import ThemeSelector from './ThemeSelector';
import { useState } from 'react';

function Nav() {
  const [theme, setTheme] = useState(false);
  const { pathname } = useLocation();
  const openThemeSelector=()=>{
    setTheme(true)
  }
  const closeThemeSelector=()=>{
    setTheme(false)
  }
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
          <NavIcon
            name="size"
            className={
              'size ' +
              (pathname === '/contact' || pathname === '/' ? 'NavOpcional' : '')
            }
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479727/portfolio/assets/icons/bxs-checkbox_yypwo2.svg"
          />
        </div>
        <div className="size">
          <NavIcon
            name="size"
            className={
              'size ' +
              (pathname === '/contact' || pathname === '/' ? 'NavOpcional' : '')
            }
            img="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479733/portfolio/assets/icons/bxs-grid-alt_voq9bk.svg"
          />
        </div>
      </div>
      {theme && <ThemeSelector closeThemeSelector={closeThemeSelector}/>}
    </nav>
  );
}

export default Nav;
