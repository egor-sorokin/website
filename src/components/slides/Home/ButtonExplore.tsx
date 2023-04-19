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
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const classNames = `${cssClasses} button button--white`;

  const handleClick = () => {
    onClick('projects', true);
  };

  useEffect(() => {
    const buttonElement = buttonRef.current;
    if (buttonElement) {
      const buttonTween = new TimelineMax();
      buttonTween.to(buttonElement, { opacity: 1, y: 0, duration: 0.8 });
    }
  }, []);

  return (
    <div className={classNames} ref={buttonRef}>
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
