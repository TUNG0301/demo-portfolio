
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react'
import styled from 'styled-components'
import Particle from '../Components/Particles';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Tung</span></h1>
                <p>
                    Welcome to my portfolio website
                </p>
                <div className="icons">

                    <a href="https://www.facebook.com/profile.php?id=100008747794220" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.instagram.com/nht0301/" className="icon i-instagram">
                        <InstagramIcon />
                    </a>

                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particles-js{
      position: relative;
      top: 0;
      left: 0;
  }
  .typography{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 80%;
    .icons{
        display: flex;
        justify-content: center;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.4s ease-in-out;
            cursor: pointer;
            &:hover{
               border: 1px solid var(--primary-color);
               color: var(--primary-color);
               
            }
            &:not(:last-child){
                margin-right: 1rem;
                cursor: pointer;
            }
            svg{
                margin: .5rem;
            }
        }
        .i-instagram{
            &:hover{
                border: 1px solid ;
                background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
                transform: translateY(3px);
            }
        }
        .i-github{
            &:hover{
                border: 1px solid #5f4687;
                color: #5f4687;
                transform: translateY(3px);
            }
        }
        .i-facebook{
            &:hover{
            transform: translateY(3px);
            }
        }
    }
  }
`;

export default HomePage
