import React, { Fragment } from 'react';
import {Seo, ScrollTopBtn} from '../components';
import {
  HeaderTwo, 
  HeroOne, 
  FeatureOne, 
  AboutOne, 
  ServiceOne,
  CounterOne,
  TeamOne,
  // FaqOne,
  AboutTwo,
  CtaOne,
  ProcessOne,
  TestimonialOne,
  BrandOne,
  BlogTwo,
  FooterOne,
} from '../containers';

const HomeOne = ()=> (
  <Fragment>
    <Seo title="Inicio" />
    <HeaderTwo/>
    <HeroOne/>    
    <ProcessOne className="space-top space-extra-bottom"/>
    <CtaOne className="space"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default HomeOne;