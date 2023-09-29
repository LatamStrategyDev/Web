import React from 'react';
import {
  HeaderTop,
  HeaderSticky,
  InfoMedia,
  Logo,
  MainMenu,
  FormFour,
  MobileMenu,
  IconLink
} from '../../components';

const HeaderTwo = () => (
  <header className="vs-header header-layout1">
    <HeaderTop>
      <HeaderTop.Left>
        {/* <p className="note_style1"><span className="note_title">Now:</span>Are you a motivated IT Support Engineer?</p> */}
      </HeaderTop.Left>
      <HeaderTop.Right>
        <IconLink className="header-social style-white" title="">
        
          <IconLink.Item icon="fab fa-linkedin" path="https://www.linkedin.com/company/latam-strategy/about/" />
          <IconLink.Item icon="fab fa-facebook-f" path="https://www.facebook.com/profile.php?id=61551229593501" />
          <IconLink.Item icon="fab fa-whatsapp" path="https://api.whatsapp.com/send?phone=933044949" />
        </IconLink>
      </HeaderTop.Right>
    </HeaderTop>
    <div className="container">
      <div className="menu-top">
        <div className="row justify-content-between align-items-center gx-sm-0">
          <div className="col">
            <Logo image="images/logo.png" />
          </div>
          <InfoMedia className="header-media col-auto"
            icon="fas fa-phone-alt"
            // title="Llamanos"
            info={<a href="tel:+(+51) 933044949">(+51) 933044949</a>}
          />
          <InfoMedia className="header-media col-auto d-none d-lg-flex"
            icon="fas fa-envelope"
            // title="Correo"
            info={<a href="mailto:consultoria@latam-strategy.com">consultoria@latam-strategy.com</a>}
          />
        </div>
      </div>
    </div>
    <HeaderSticky>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <MainMenu className="menu-style1 d-none d-lg-block" />
            <MobileMenu />
          </div>
          <div className="col-auto">
            <FormFour />
          </div>
        </div>
      </div>
    </HeaderSticky>
  </header>
);


export default HeaderTwo;