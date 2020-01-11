import React from 'react';
import Particles from 'react-particles-js';

import '../scss/ParticlesBubbles.scss';

export default function ParticlesBubbles() {
  return (
    <>
      <Particles
        className='particles-container'
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 3235.5117139334156
              }
            },
            color: {
              value: '#fcd02c'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 3
              }
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 500,
              color: '#ffffff',
              opacity: 0.4,
              width: 2
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          retina_detect: true
        }}
      />
    </>
  );
}
