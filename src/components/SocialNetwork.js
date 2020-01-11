import React from 'react';
import { Media } from 'reactstrap';
import logoLinkedIn from '../assets/images/logos/linkedin.svg';
import logoGithub from '../assets/images/logos/github.svg';

import '../scss/SocialNetwork.scss';

export default function SocialNetwork() {
  return (
    <div className='container-social-network'>
      <Media
        object
        src={logoLinkedIn}
        alt='logo linkedin'
        className='logo-linked-in hvr-grow'
        onClick={() =>
          window.open('https://www.linkedin.com/in/olichab', '_blank')
        }
      />

      <Media
        object
        src={logoGithub}
        alt='logo linkedin'
        className='logo-github hvr-grow'
        onClick={() => window.open('https://github.com/olichab', '_blank')}
      />
    </div>
  );
}
