import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  Button
} from '../../components';

const CtaOne = ({className})=> (
  <div className={`z-index-common background-image ${className || ''}`} style={{ backgroundImage: 'url(images/bg/conversemos.jpg'}}>
    <div className="container">
      <div className="row text-center text-lg-start align-items-center justify-content-between">
        <div className="col-lg-auto">
          <SecSubTitle className="text-white">Estamos aquí para responder tus preguntas</SecSubTitle>
          <SecTitle className="cta-title1 h1">¿Presenta alguna duda?</SecTitle>
        </div>
        <div className="col-lg-auto">
          <Button>Conversemos<i className="far fa-arrow-right"/></Button>
        </div>
      </div>
    </div>
  </div>
);

export default CtaOne;