import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import avatar from '../img/aboutImg/avatar.jpg';
import WbSunnyIcon from '@material-ui/icons/WbSunny'; //sun
//import ToggleOffIcon from '@material-ui/icons/ToggleOff';  // switch
import Brightness3Icon from '@material-ui/icons/Brightness3'; //moon
import Switch from '@material-ui/core/Switch';


function Navigation() {
    const [theme,setTheme] = useState('dark-theme');
    const [checked, setChecked] = useState(false);

    useEffect(() =>{
        document.documentElement.className = theme;
    },[theme]);

    const themeToggler = () => {
         if(theme === 'light-theme'){
             setTheme('dark-theme');
             setChecked(false)
         }else{
             setTheme('light-theme');
             setChecked(true);
         }
    }

    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            
            <div className="light-dark-mode">
                <div className="left-content">
                    <WbSunnyIcon />
                </div>
                <div className="right-content">
                    <Switch value=""
                            checked={checked}
                            onClick={themeToggler}
                            inputProps={{'aria-label': ''}}
                            size="medium"
                    />
                </div>
                <div className="right-content">
                    <Brightness3Icon />
                </div>
            </div>

            <ul className="nav-items">
                <li className="nav-items">
                   <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-items">
                   <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-items">
                   <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-items">
                   <NavLink to="/project" activeClassName="active-class" exact>Project</NavLink>
                </li>
                <li className="nav-items">
                   <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-items">
                   <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2021 My Portfolio </p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 1px solid var(--border-color);

  .light-dark-mode{
      position: absolute;
      padding: .8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      margin-top: 16rem;
      svg{
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          width:100%;
          height: 100%;
      }
  }

  .avatar{
      width: 100%;
      border-bottom: 1px solid var(--border-color);
      text-align: center;
      padding: 2rem 0;

      img{
          width: 70%;
          border-radius: 50%;
          border: 8px solid var(--border-color);

      }
  }

  .nav-items{
      width: 100%;
      text-align: center;

      .active-class{
          background-color: var(--primary-color);
      }
      li{
          display: block;
          a{
              display: block;
              padding: .2rem 0;
              position: relative;
              z-index: 10;
              text-transform: uppercase;
              font-weight: 600;
              letter-spacing: 1px;
              &:hover{
                  cursor: pointer;
              }
              &::before{
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 0;
                  height:50%;
                  background-color: var(--primary-color);
                  opacity: 0.2;
                  transition: all 0.5s cubic-bezier(0,.98,.98,.11);
                  z-index: 3
              }
          }
      }
      a:hover::before{
          width: 100%;
          height: 100%;
      }
  }

  footer{
      border-top:  1px solid var(--boder-color);
      width: 100%;
      p{
          padding: 1rem 0;
          font-size: 1.1rem;
          display: block;
          text-align: center;
      }
  }
`;

export default Navigation
