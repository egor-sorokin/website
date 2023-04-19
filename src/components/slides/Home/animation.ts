import { Power2 } from 'gsap';

export const attachShowAnimation = (targetTween: any) => {
  targetTween
    .to('body', { overflowY: 'hidden' })
    .fromTo(
      '.home',
      {
        backgroundColor: 'rgba(231, 231, 231, 0.6)',
        ease: Power2.easeOut,
        duration: 0.8,
      },
      {
        backgroundColor: 'rgba(34, 32, 29, 1)',
        ease: Power2.easeOut,
        duration: 0.8,
      },
      0.35
    )
    .fromTo(
      '.home .home__name',
      { x: '50%', opacity: 0, ease: Power2.easeOut, duration: 0.5 },
      { x: '0%', opacity: 1, ease: Power2.easeOut, duration: 0.5 },
      1
    )
    .fromTo(
      '.home .switcher .line--top',
      { y: '-100%', ease: Power2.easeOut, duration: 0.5 },
      { y: '0%', ease: Power2.easeOut, duration: 0.5 },
      '-=0.3'
    )
    .fromTo(
      '.home .line--bottom',
      { y: '100%', ease: Power2.easeOut, duration: 0.5 },
      { y: '0%', ease: Power2.easeOut, duration: 0.5 },
      '-=0.4'
    )
    .fromTo(
      '.home .switcher__link',
      { x: '100%', opacity: 0, ease: Power2.easeOut, duration: 0.1 },
      { x: '-50%', opacity: 1, ease: Power2.easeOut, duration: 0.1 },
      '-=0.1'
    )
    .fromTo(
      '.home__button-explore',
      { x: '0%', opacity: 0, ease: Power2.easeOut, duration: 0.5 },
      { x: '-50%', opacity: 1, ease: Power2.easeOut, duration: 0.5 }
    )
    .to('body', { overflowY: 'initial' });
};
