import { FC, MouseEvent } from 'react';
import { LinkProps } from '@/utils/types';

interface LinkStretchedProps extends LinkProps {
  target?: string;
  cssClasses?: string;
  onClick: any;
}

const LinkStretched: FC<LinkStretchedProps> = ({
  text,
  url,
  target,
  cssClasses = '',
  onClick,
}) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!url) {
      event.preventDefault();
      onClick?.();
    } else {
      onClick?.(event.currentTarget.dataset.anchorId!.substring(1));
    }
  };

  return (
    <a
      href={url}
      data-anchor-id={url}
      target={target}
      onClick={handleClick}
      className={`${cssClasses} link-stretched`}
    >
      {text}
    </a>
  );
};

export default LinkStretched;
