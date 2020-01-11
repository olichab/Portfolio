import React, { useState } from 'react';
import { Row, Col, Media } from 'reactstrap';

import '../scss/Competence.scss';

export default function Competence({ logo, logo2, name, name2, name3 }) {
  const [showCaptionOnClick, setShowCaptionOnClick] = useState(false);

  const toggleCaption = () => setShowCaptionOnClick(!showCaptionOnClick);

  return (
    <div
      className='competence-container mb-4'
      onClick={toggleCaption}
      onKeyDown={toggleCaption}
      role='button'
      tabIndex={0}
    >
      <Row className='h-100 justify-content-center'>
        <Col xs='auto' className='logo my-auto p-2'>
          <Media object src={logo} />
        </Col>
        {logo2 && (
          <Col xs='auto' className='my-auto p-2'>
            <Media object src={logo2} />
          </Col>
        )}
      </Row>
      <div
        className={`caption ${showCaptionOnClick ? 'caption-on-click' : ''}`}
      >
        <div className='blur' />
        <div className='caption-text'>
          <p>
            {name}
            {name2 && (
              <>
                <br />
                {name2}
              </>
            )}
            {name3 && (
              <>
                <br />
                {name3}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
