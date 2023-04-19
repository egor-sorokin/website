import React, { useRef, useEffect, FC } from 'react';
import { TimelineMax } from 'gsap';

import Switcher from '../../Switcher';
import { attachShowAnimation } from './animation';
import { BUTTON_EXPLORE, SWITCHER_ABOUT } from '@/utils/constants';
import ButtonExplore from '@/components/slides/Home/ButtonExplore';
import scrollToSection from '@/utils/helpers';

interface Props {
  person: {
    first_name: string;
    last_name: string;
  } | null;
  toggleAboutSection: () => void;
}

const Home: FC<Props> = ({ person, toggleAboutSection }) => {
  const homeRef = useRef<HTMLElement | null>(null);
  const homeTween = useRef<TimelineMax | null>(null);

  useEffect(() => {
    if (homeRef.current) {
      homeTween.current = new TimelineMax();
      attachShowAnimation(homeTween.current);
      homeTween.current?.play();
    }
  }, [homeRef]);

  const clickAboutButton = () => {
    toggleAboutSection();
  };

  if (!person) return null;

  return (
    <section
      ref={homeRef}
      id="home"
      className="banner home text-c-mercury-light"
    >
      <h3 className="home__name font-s-36">
        {`${person.first_name} ${person.last_name}`}
      </h3>

      <ButtonExplore
        cssClasses="home__button-explore"
        onClick={scrollToSection}
      >
        {BUTTON_EXPLORE.text}
      </ButtonExplore>

      <Switcher switcherLink={SWITCHER_ABOUT} onClick={clickAboutButton} />
    </section>
  );
};

export default Home;
