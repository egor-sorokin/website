import { FC } from 'react';

import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import UnorderedList from '@/components/UnorderedList';
import { LINK_MASKED, NAVBAR_ITEMS } from '@/utils/constants';
import { UnorderedListItem } from '@/utils/types';

interface Person {
  socials: {
    items: UnorderedListItem[];
  };
}

interface Props {
  person: Person;
}

const Contact: FC<Props> = ({ person }) => (
  <section className="banner contact">
    <div className="contact-inner">
      <div className="contact-inner__item">
        <Navbar items={NAVBAR_ITEMS} />
        <div className="delimiter" />
      </div>
      <div className="contact-inner__item">
        <Logo />
      </div>
      <div className="contact-inner__item">
        <UnorderedList
          title=""
          items={person?.socials?.items || []}
          type={LINK_MASKED}
        />
      </div>
    </div>
  </section>
);

export default Contact;
