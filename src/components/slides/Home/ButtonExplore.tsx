import { FC, ReactNode, useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';

interface ButtonExploreProps {
  cssClasses?: string;
  onClick: (section: string, smooth: boolean) => void;
  children?: ReactNode;
}

const ButtonExplore: FC<ButtonExploreProps> = ({
  cssClasses = '',
  onClick,
  children,
}) => {
  const classNames = `${cssClasses} button button--white`;

  const handleClick = () => {
    onClick('projects', true);
  };

  return (
    <div className={classNames}>
      <a
        href="#projects"
        className="button__link font-s-12"
        onClick={handleClick}
      >
        {children}
      </a>
    </div>
  );
};

export default ButtonExplore;
