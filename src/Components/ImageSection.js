import React from 'react'
import styled from 'styled-components';
import resume from '../img/aboutImg/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
              <img src={resume} alt=""/>
            </div>

            <div className="right-content">
              <h4>I am <span>Tung</span></h4>

              <p className="paragraphy">
                welcome to my about page
              </p>

              <div className="about-info">

                <div className="info-title">
                  <p>FullName</p>
                  <p>Age</p>
                  <p>Nationality</p>
                  <p>Languages</p>
                  <p>Location</p>
                  <p>Service</p>
                </div>

                <div className="info">
                  <p>: Tung</p>
                  <p>: 21</p>
                  <p>: VietNam</p>
                  <p>: VietNamese, English, Russian</p>
                  <p>: Moscow, Russia</p>
                  <p>: Freelance</p>
                </div>

              </div>
              <PrimaryButton title={"Download CV"} />
            </div>

        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
  display: flex;
  margin-top: 5rem;
  padding: 1rem .1rem;

  @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }

  .left-content{
      width: 100%;
      img{
          width: 70%;
          object-fit: cover
      }
  }

  .right-content{
      width: 100%;
      h4{
          font-size: 2rem;
          color: var(--white-color);
          span{
              font-size: 2rem;
              color: var(--primary-color);
          }
      }

      .paragraphy{
          padding:  1rem 0;
      }

      .about-info{
          display: flex;
          padding-bottom: 1.4rem;
          margin-top: 1rem;
          .info-title{
              padding-right: 3rem;
              p{
                  font-weight: 700;
              }
          }
          .info-title, .info{
              p{
                  padding: .3rem 0;
                  //width: 100%;
              }
          }
      }
  }

`;

export default ImageSection
