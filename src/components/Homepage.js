import React from 'react';
import Intro from './Intro';
import Bio from './Bio';
import Projets from './Projets';
import Contact from './Contact';

export default function Homepage() {
  return (
    <>
      <Intro />
      <Bio />
      <Projets />
      <Contact />
    </>
  );
}
