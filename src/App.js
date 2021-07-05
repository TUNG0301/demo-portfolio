import SideBar from "./Components/SideBar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import { Route, Switch } from "react-router";
import AboutPage from "./Pages/AboutPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";
import ResumePage from "./Pages/ResumePage";
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from "@material-ui/core";
import {useState} from 'react';


function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="App">
      <SideBar navToggle={navToggle}/>
      
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled>
           <div className="lines">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
            </div>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/resume" exact>
                <ResumePage />
              </Route>
              <Route path="/project" exact>
                <ProjectPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  
  .lines{
      position: absolute;
      min-height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      opacity: .6;
      z-index: -1;
      .line-1, .line-2, .line-3, .line-4{
          width: 1px;
          min-height: 100vh;
          background-color: var(--border-color);
      }
  }
`;

export default App;
