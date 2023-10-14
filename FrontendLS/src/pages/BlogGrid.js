import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {HeaderOne, BlogThree, FooterOne} from '../containers';

const BlogGrid = () => (
  <Fragment>
    <Seo title="Blog Grid" />
    <HeaderOne />
    <Breadcrumb pageName="Insights" bgImage="images/breadcumb/insigth.jpg" />
    <BlogThree className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default BlogGrid;