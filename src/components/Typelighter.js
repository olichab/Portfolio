import React from 'react';

import '../scss/Typelighter.scss';

export default function Typelighter() {
  return (
    <p>
      <span className='typeWriter'>J&apos;aime </span>
      <span
        className='typeWriter'
        data-random='false'
        data-speed='2.5'
        data-end='1000'
        data-dltspeed='true'
        data-text='[
          "être mis au défi",
          "acquérir de nouvelles connaissances et partager les miennes",
          "résoudre les énigmes amenées par le développement",
          "apprendre sur tout et tout le temps",
          "débugger, trouver le problème et surtout la solution",
          "comprendre ce que je fais",
          "développer des interfaces pixel perfect"
        ]'
      />
    </p>
  );
}
