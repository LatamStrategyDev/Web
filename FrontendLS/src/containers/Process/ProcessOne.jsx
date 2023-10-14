import React from 'react';
import {
  TitleWrap,
  SecSubTitle,
  SecTitle,
  ProcessBoxOne
} from '../../components';

// Process Data
import processData from '../../data/process.json';

const ProcessOne = ({ className }) => (
  <div className={`background-image ${className || ''}`} style={{ backgroundImage: 'url(images/bg/process-bg-1-1.jpg)' }}>
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <TitleWrap>
            <SecSubTitle>Conoce y Conecta</SecSubTitle>
            <SecTitle className="h1">A través de nuestro Ecosistemas 360</SecTitle>
          </TitleWrap>
        </div>
      </div>
      <div className="row justify-content-between">
        {processData.map(item => (
          <ProcessBoxOne key={item.number} className="col-md-4 process-style2"
            arrow={item.arrow}
            title={item.title}
            text={item.text}
            icon={item.icon}
            number={item.number}
          />
        ))}
      </div>
    </div>
  </div>
);

export default ProcessOne;