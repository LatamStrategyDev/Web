import React from 'react';
import { Link } from 'react-router-dom';
import {
  InfoMedia,
  Widget,
  AboutWidget,
  CategoryWidget,
  RecentPostWidget,
  IconLink
} from '../../components/';

// Widget Datas
import widgetsdata from '../../data/widgets.json';

const { pageList, exploreLinks, recentPosts } = widgetsdata;


const FooterOne = () => (
  <footer className="footer-wrapper footer-layout1 background-image" style={{ backgroundImage: 'url(images/shape/bg-footer-1-1.jpg)' }}>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="footer-media col-sm">
            <h4>Latam Strategy</h4>
          </div>
          <div className="footer-media col-sm">
            <div className="container">
              
                
                  
                    <AboutWidget>
                      <AboutWidget.Text></AboutWidget.Text>
                      <IconLink className="footer-social">
                        <IconLink.Item icon="fab fa-linkedin" path="https://www.linkedin.com/company/latam-strategy/about/" />
                        <IconLink.Item icon="fab fa-facebook-f" path="https://www.facebook.com/profile.php?id=61551229593501" />
                        <IconLink.Item icon="fab fa-whatsapp" path="https://api.whatsapp.com/send?phone=933044949" />
                        <IconLink.Item icon="fas fa-envelope" path="mailto:consultoria@latam-strategy.com" />

                      </IconLink>
                    </AboutWidget>
                  
               
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright-wrap">
      <div className="container">
        <p className="copyright-text">Copyright <i className="fal fa-copyright" /> 2021 <Link className="text-white" to="/">LatamStrategy</Link></p>
      </div>
    </div>
  </footer>
);

export default FooterOne;