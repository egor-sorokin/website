import { FC } from 'react';

import LinkStretched from '@/components/LinkStretched';
import scrollToSection from '@/utils/helpers';
import { LinkProps } from '@/utils/types';

interface NavbarProps {
  items: LinkProps[];
}

const Navbar: FC<NavbarProps> = ({ items = [] }) => {
  const cssClassesLinkStretched =
    'navbar__text font-s-12-secondary text-c-mercury-light';

  const navbarItems = items.map((item, i) => (
    <li key={i + 1} className="navbar__item">
      <LinkStretched
        cssClasses={cssClassesLinkStretched}
        url={item.url!}
        text={item.text}
        onClick={scrollToSection}
      />
    </li>
  ));

  return <ul className="navbar">{navbarItems}</ul>;
};

export default Navbar;
