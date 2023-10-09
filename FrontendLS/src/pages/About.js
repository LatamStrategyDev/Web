import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ServiceFour, 
  AboutSeven,
  TeamTwo,
  // TestimonialThree,
  CtaOne,
  BlogFour,
  FooterOne
} from '../containers';

const About = ()=> (
  <Fragment>
    <HeaderOne />
    <Breadcrumb pageName="Nosotros" bgImage="images/breadcumb/about.jpg" />
    {/* <ServiceFour className="space-top space-extra-bottom"/> */}
    <TeamTwo className="space-top space-extra-bottom"/>
    
    <CtaOne className="space"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default About;