import { FC } from 'react';

import LinkStretched from '@/components/LinkStretched';

interface SwitcherProps {
  url?: string;
  switcherLink?: {
    type: string;
    text: string;
  };
  onClick?: (anchorId: string) => void;
}

const Switcher: FC<SwitcherProps> = ({ url = '', switcherLink, onClick }) => {
  let link: JSX.Element | null = null;
  let type;
  let text;

  if (switcherLink) {
    type = switcherLink.type;
    text = switcherLink.text;
  }

  if (text && text.toLowerCase() === 'about') {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-mercury-light"
        text={text}
        onClick={onClick}
      />
    );
  } else if (url && text) {
    link = (
      <LinkStretched
        cssClasses="switcher__link font-s-12-secondary text-c-dune"
        text={text}
        onClick={onClick}
        url={url}
        target="_blank"
      />
    );
  }

  return (
    <div className={`switcher switcher--${type}`}>
      {link ? (
        <>
          <div className="switcher__line line line--top" />
          {link}
          <div className="switcher__line line line--bottom" />
        </>
      ) : (
        <div className="switcher__line line line--full" />
      )}
    </div>
  );
};

export default Switcher;
