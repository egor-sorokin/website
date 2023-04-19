import { FC, useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import { attachToggleAnimation } from './animation';

import Summary from '@/components/Summary';
import OrderedList from '@/components/OrderedList';
import LinkStretched from '@/components/LinkStretched';
import { BUTTON_CLOSE, LINK_MASKED } from '@/utils/constants';
import Logo from '@/components/Logo';
import { LinkProps } from '@/utils/types';

interface Props {
  person: {
    first_name?: string;
    last_name?: string;
    socials?: {
      title: string;
      items: Array<
        LinkProps & {
          id: string;
          name?: string;
        }
      >;
    };
    summary?: Array<{ title: string; text: string }>;
  };
  isOpenedAbout: boolean;
  toggleAboutSection: () => void;
}

const About: FC<Props> = ({
  person = {},
  isOpenedAbout,
  toggleAboutSection,
}) => {
  const aboutTween = useRef<TimelineMax | null>(null);
  const socials = person?.socials || { title: '', items: [] };

  useEffect(() => {
    if (aboutTween.current === null) {
      aboutTween.current = new TimelineMax();
      attachToggleAnimation(aboutTween.current);
    }
  }, [aboutTween]);

  useEffect(() => {
    if (aboutTween.current) {
      aboutTween.current!.reversed(!isOpenedAbout);
      document.body.style.overflowY = isOpenedAbout ? 'hidden' : 'initial';
    }
  }, [isOpenedAbout]);

  const clickCloseButton = () => {
    toggleAboutSection();
  };

  return (
    <section className="about text-c-mercury-light">
      <div className="about__item item item--left">
        <div className="item__line item__line--top" />
        <Logo />
        <div className="item__line item__line--bottom" />
      </div>
      <div className="about__item item item--middle">
        <h1 className="item__title font-s-36">
          {`${person?.first_name} ${person?.last_name}`}
        </h1>
        <Summary summary={person?.summary || []} />
      </div>
      <div className="about__item item item--right">
        <OrderedList
          title={socials.title}
          items={socials.items}
          type={LINK_MASKED}
        />
      </div>
      <div className="button-close">
        <LinkStretched
          onClick={clickCloseButton}
          cssClasses="button-close__link font-s-12-secondary text-c-mercury-light"
          text={BUTTON_CLOSE.text}
        />
      </div>
    </section>
  );
};

export default About;
