import {Power2} from 'gsap';


export const attachShowAnimation = (targetTween) => {
  targetTween
    .to('body', 0, {overflowY: 'hidden'})
    .fromTo('.home', .8,
      {backgroundColor: "rgba(231, 231, 231, 0.6)", ease: Power2.easeOut},
      {backgroundColor: "rgba(34, 32, 29, 1)", ease: Power2.easeOut},
      .35
    )
    .fromTo('.home .home__name', .5,
      {x: "50%", opacity: 0, ease: Power2.easeOut},
      {x: "0%", opacity: 1, ease: Power2.easeOut},
      1
    )
    .fromTo('.home .switcher .line--top', .5,
      {y: "-100%", ease: Power2.easeOut},
      {y: "0%", ease: Power2.easeOut},
      "-=0.3"
    )
    .fromTo('.home .line--bottom', .5,
      {y: "100%", ease: Power2.easeOut},
      {y: "0%", ease: Power2.easeOut},
      "-=0.4",
    )
    .fromTo('.home .switcher__link', .1,
      {x: "100%", opacity: 0, ease: Power2.easeOut},
      {x: "-50%", opacity: 1, ease: Power2.easeOut},
      "-=0.1"
    )
    .fromTo('.home__button-explore', .5,
      {x: "0%", opacity: 0, ease: Power2.easeOut},
      {x: "-50%", opacity: 1, ease: Power2.easeOut},
    )
    .to('body', 0, {overflowY: 'initial'});
};
