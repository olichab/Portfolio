import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import '../scss/Spinners.scss';

export default function Spinner() {
  return (
    <div className='spinner'>
      <BeatLoader size={8} margin='5px' color='#fcd02c' />
    </div>
  );
}
