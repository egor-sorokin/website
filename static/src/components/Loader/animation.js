import { Power2 } from 'gsap';


export const attachHideAnimation = (targetTween) => {
  targetTween
    .to('body', 0, { overflowY: 'hidden' })
    .to(
      '.loader__inner', 0.1,
      { opacity: 0, ease: Power2.easeOut },
    )
    .to('body', 0, { overflowY: 'initial' });
};
