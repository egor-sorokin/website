import { FC } from 'react';

import Switcher from '@/components/Switcher';
import DescriptionList from '@/components/DescriptionList';
import { SWITCHER_PROJECTS } from '@/utils/constants';
import { DescriptionItem } from '@/utils/types';

interface ProjectInfo {
  id: number;
  name: string;
  info: DescriptionItem[];
  image: {
    alt: string;
    src: string;
  };
  url: string;
}

interface Props {
  projects: ProjectInfo[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const projectsComponent = projects.map(({ id, name, info, image, url }) => (
    <section key={id} className="slide-inner">
      <div className="container">
        <section className="content content--projects">
          <div className="col col--left">
            <h1 className="font-s-40">{name}</h1>
            {info && <DescriptionList listData={info} />}
          </div>
          <div className="col col--right">
            <img
              className="image"
              title={image.alt}
              alt={image.alt}
              src={image.src}
            />
          </div>
        </section>
      </div>
      <Switcher url={url} switcherLink={SWITCHER_PROJECTS} />
    </section>
  ));

  return <section id="projects">{projectsComponent}</section>;
};

export default Projects;
