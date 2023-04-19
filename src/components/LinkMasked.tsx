import { FC } from 'react';

import { LinkProps } from '@/utils/types';

interface LinkMaskedProps extends LinkProps {
  cssClasses?: string;
  target?: string;
}

const LinkMasked: FC<LinkMaskedProps> = ({ text, url, cssClasses, target }) => (
  <div className="link-masked">
    <span className={`link-masked__placeholder ${cssClasses}`}>{text}</span>
    <div className="link-masked__mask">
      <a
        href={url}
        target={target}
        className={`link-masked__text ${cssClasses}`}
      >
        {text}
      </a>
    </div>
  </div>
);

export default LinkMasked;
