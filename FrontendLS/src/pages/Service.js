import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ServiceFive,
  CtaOne,
  ProcessThree,
  TestimonialOne,
  FooterOne
} from '../containers';

const Service = ()=> (
  <Fragment>
    <Seo title="Servicios" />
    <HeaderOne />
    <Breadcrumb pageName="Aportamos lo mejor de nuestra firma global" bgImage="images/breadcumb/servicios.jpg" />
    <ServiceFive className="space-top space-extra-bottom"/>
    <CtaOne className="space"/>
    <ProcessThree className="space-top space-extra-bottom"/>
    <TestimonialOne className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Service;