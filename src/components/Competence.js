import React, { Fragment, useState } from 'react';
import { Row, Col, Media } from 'reactstrap';

import '../scss/Competence.scss';

export default function Competence({ logo, name }) {
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
          <Media object src={logo[0]} />
        </Col>
        {logo[1] && (
          <Col xs='auto' className='my-auto p-2'>
            <Media object src={logo[1]} />
          </Col>
        )}
      </Row>
      <div
        className={`caption ${showCaptionOnClick ? 'caption-on-click' : ''}`}
      >
        <div className='blur' />
        <div className='caption-text'>
          <p>
            {name.length &&
              name.map((e, i) =>
                i === 0 ? (
                  e
                ) : (
                  <Fragment key={e}>
                    <br />
                    {e}
                  </Fragment>
                )
              )}
          </p>
        </div>
      </div>
    </div>
  );
}
