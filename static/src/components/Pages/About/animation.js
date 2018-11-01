import {Power2} from 'gsap';


export const attachToggleAnimation = (targetTween) => {
  targetTween
    .to('.about', .8,
      {x: 0, ease: Power2.easeInOut}
    )
    .fromTo('.about .about__title', .4,
      {x: "30%", opacity: 0, ease: Power2.easeOut},
      {x: "0%", opacity: 1, ease: Power2.easeOut}
    )
    .staggerFromTo('.about .summary__item', .6,
      {x: "20%", opacity: 0, ease: Power2.easeOut},
      {x: "0%", opacity: 1, ease: Power2.easeOut},
      0.1, "-=0.1"
    )
    .fromTo('.about .orderedlist__title', .6,
      {opacity: 0, ease: Power2.easeOut},
      {opacity: 1, ease: Power2.easeOut},
      "-=0.1"
    )
    .staggerFromTo('.about .orderedlist__item', .3,
      {x: 100, opacity: 0, ease: Power2.easeOut},
      {x: 0, opacity: 1, ease: Power2.easeOut},
      0.15, "-=0.5"
    )
    .fromTo('.about .logo', .4,
      {opacity: 0, ease: Power2.easeOut},
      {opacity: 1, ease: Power2.easeOut},
      "-=0.1"
    )
    .fromTo('.about .logo__circle-big', .5,
      {rotation: -180, transformOrigin: '75% 19%', ease: Power2.easeOut},
      {rotation: 0, transformOrigin: '75% 19%', ease: Power2.easeOut},
      "-=0.2"
    )
    .fromTo('.about .logo__circle-medium', .5,
      {rotation: 180, transformOrigin: '60% 70%', ease: Power2.easeOut},
      {rotation: 0, transformOrigin: '60% 70%', ease: Power2.easeOut},
      "-=0.5"
    )
    .fromTo('.about .button-close', .3,
      {x: 500, opacity: 0, ease: Power2.easeOut},
      {x: 0, opacity: 1, ease: Power2.easeOut},
      "-=0.3"
    )
    .reversed(true);
};
