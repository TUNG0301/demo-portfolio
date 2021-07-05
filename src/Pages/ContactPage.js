import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layout';
import styled from 'styled-components';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import ContactItem from '../Components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const phone=<PhoneIcon />
    const mail=<MailOutlineIcon />
    const location=<LocationOnIcon />
    return (
       <MainLayout>
          
          <Title title={'Contact'} span={'Contact'} />
          <ContactPageStyled>
            <InnerLayout className={'contact-section'}>

              <div className="left-content">

                  <div className="contact-title">
                      <h4>Get In Touch</h4>
                  </div>

                  <form className="form">

                     <div className="form-field">
                         <label htmlFor="name">Enter your name*</label>
                         <input type='text' id="name" />
                     </div>

                     <div className="form-field">
                         <label htmlFor="email">Enter your email*</label>
                         <input type='email' id="email" />
                     </div>

                     <div className="form-field">
                         <label htmlFor="subject">Enter your subject</label>
                         <input type='text' id="subject" />
                     </div>

                     <div className="form-field">
                         <label htmlFor="text-area">EnterYour Message*</label>
                         <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                     </div>

                    <div className="form-field">
                        <PrimaryButton title={'Send Email'}/>
                    </div>

                  </form>
              </div>

              <div className="right-content">
                  <ContactItem title={'Phone'} icon={phone} contact={'+79855551702'} />
                  <ContactItem title={'Email'} icon={mail} contact={'nguyenhuytung201@gmail.com'} />
                  <ContactItem title={'Address'} icon={location} contact={'Moscow, Russia'} />
              </div>
            </InnerLayout>
          </ContactPageStyled>

        </MainLayout>
        
    )
}

const ContactPageStyled = styled.section`
   .contact-section{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 2rem;
      .right-content{
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
      }
      .contact-title{
          h4{
              color: var(--primary-color);
              padding: 1rem 0;
              font-size: 1.8rem;
          }
      }
      .form{
          .form-field{
              margin-top: 2rem;
              position: relative;
              width: 100%;
              
              label{
                 position: absolute;
                 left: 20px;
                 top: -19px;
                 display: inline-block;
                 background-color: var(--background-dark-color);
                 padding: 0 .5rem;
                 color: inherit;
              }
              input{
                  border: 1px solid var(--border-color);
                  outline: none;
                  background: transparent;
                  height: 50px;
                  padding: 0 15px;
                  width: 100%;
                  color: inherit;
              }
              textarea{
                  background-color: transparent;
                  border: 1px solid var(--border-color);
                  outline: none;
                  color: inherit;
                  width: 100%;
                  padding: .8rem 1rem;
              }
          }
      }
   }
`

export default ContactPage
