import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const playTlHeader = (refCollapse, refNavLink, refSocialNetworks) => {
  const tlHeader = gsap.timeline({ default: { ease: Power1.easeOut } });
  tlHeader
    .from(refCollapse.current, {
      delay: 0.2,
      autoAlpha: 0,
      duration: 0.5,
      xPercent: -100,
    })
    .from(
      [refNavLink.current, refSocialNetworks.current],
      {
        autoAlpha: 0,
        xPercent: -30,
        stagger: 0.15,
      },
      "-=0.4"
    );
};

export const playTlIntro = (
  refTitle,
  refText,
  refBar,
  refButtonResume,
  refButtonSeeProjects
) => {
  const tlIntro = gsap.timeline();

  tlIntro
    .from(refBar.current, 1, {
      autoAlpha: 0,
      scaleX: 0,
      ease: "power2",
      transformOrigin: "center",
    })
    .from(refText.current, 0.75, {
      autoAlpha: 0,
      y: 40,
    })
    .from(
      refTitle.current,
      {
        autoAlpha: 0,
        y: 15,
        rotation: 3,
        scaleY: 0.8,
        transformOrigin: "bottom left",
        ease: "power1",
      },
      "-=0.25"
    )
    .from(
      [refButtonResume.current, refButtonSeeProjects.current],
      {
        autoAlpha: 0,
        yPercent: -15,
        stagger: 0.25,
      },
      "-=0.25"
    );
};

export const playTlBio = (
  refPartText,
  refSentence,
  refTitleSkills,
  refContainerCompetence
) => {
  const tlBioLeft = gsap.timeline({
    defaults: { ease: "power1.easeOut" },
  });
  const tlBioRight = gsap.timeline({
    defaults: { ease: "power1.easeOut" },
  });

  tlBioLeft
    .from(refPartText.current, {
      autoAlpha: 0,
      yPercent: 15,
      stagger: 0.15,
    })
    .from(refSentence.current, {
      autoAlpha: 0,
      yPercent: 15,
    });
  tlBioRight
    .from(refTitleSkills.current, {
      autoAlpha: 0,
      yPercent: 50,
      rotation: 3,
      scaleY: 0.8,
      transformOrigin: "bottom left",
    })
    .from(refContainerCompetence.current, {
      autoAlpha: 0,
      yPercent: 15,
      scale: 0.9,
      stagger: {
        amount: 1.25,
      },
    });
};

export const playTlProgressBar = (refProgressBarProjects) => {
  gsap.to(refProgressBarProjects.current, {
    scrollTrigger: {
      trigger: "App",
      scrub: 0.3,
      start: "top",
    },
    width: "100%",
  });
};

export const playTlProjet = (
  refProjet,
  refTitle,
  refLocation,
  refButton,
  refcaptionContainer
) => {
  ScrollTrigger.matchMedia({
    // desktop
    "(min-width: 768px)": function() {
      if (refProjet.current) {
        const tlProjet = gsap.timeline({
          default: { ease: Power1.easeOut },
          scrollTrigger: {
            trigger: refProjet.current,
            start: "top top+=10%",
            end: "bottom+=10% top+=10%",
            scrub: 0.3,
          },
        });
        tlProjet
          .to(refProjet.current, {
            scale: 0.95,
          })
          .to([refTitle.current, refLocation.current], {
            duration: 0.15,
            opacity: 0,
            y: -20,
            stagger: 0.1,
          })
          .to(
            refButton.current,
            {
              duration: 0.15,
              opacity: 0,
              y: 30,
            },
            "-=0.2"
          )
          .to(refcaptionContainer.current, {
            scaleX: 0,
            transformOrigin: "left",
          });
      }
    },
  });
};
export const playTlContact = (
  refTitle,
  refText,
  refMail,
  refTel,
  refLocation
) => {
  const tlContact = gsap.timeline({ default: { ease: "power1" } });

  tlContact
    .from(refTitle.current, {
      autoAlpha: 0,
      y: 15,
      rotation: 3,
      scaleY: 0.8,
      transformOrigin: "bottom left",
    })
    .from(refText.current, {
      autoAlpha: 0,
      y: 10,
    })
    .from([refMail.current, refTel.current, refLocation.current], {
      autoAlpha: 0,
      y: 15,
      stagger: 0.25,
    });
};

export const playTlPagination = (refLast, refNext) => {
  const tlPagination = gsap.timeline({
    default: { ease: Power1.easeOut },
    scrollTrigger: {
      trigger: "App",
      start: "top top",
      end: "bottom bottom-=25%",
      scrub: 3,
    },
  });
  if (refLast.current && refNext.current) {
    tlPagination
      .from(
        refLast.current,
        {
          x: 100,
        },
        0
      )
      .from(
        refNext.current,
        {
          x: -80,
        },
        0
      );
  } else if (refLast.current) {
    tlPagination.from(
      refLast.current,
      {
        x: 100,
      },
      0
    );
  } else {
    tlPagination.from(
      refNext.current,
      {
        x: -80,
      },
      0
    );
  }
};

export const playTlSocialNetworks = (
  wrapperLogo,
  refLogoLinkedin,
  refLogoGithub,
  refLogoInstagram
) => {
  const tlSocialNetworks = gsap.timeline();

  tlSocialNetworks
    .from(wrapperLogo.current, {
      duration: 0.15,
      autoAlpha: 0,
      x: 40,
      delay: 2.5,
    })
    .from(
      [
        refLogoLinkedin.current,
        refLogoGithub.current,
        refLogoInstagram.current,
      ],
      {
        scale: 1.15,
        autoAlpha: 0,
        stagger: 0.25,
      }
    );
};
