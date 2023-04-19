import { FC } from 'react';

import DescriptionList from '@/components/DescriptionList';
import ImageGrid from '@/components/ImageGrid';
import Switcher from '@/components/Switcher';
import { GridDataItem } from '@/utils/types';

interface Props {
  experiments: {
    name: string;
    info: string;
    showcases: GridDataItem[];
  };
}

const Experiments: FC<Props> = ({ experiments }) => (
  <section id="experiments" key="experiments">
    <section className="slide-inner">
      <div className="container">
        <section className="content content--experiments">
          <div className="col col--left">
            <h1 className="font-s-40">{experiments.name}</h1>
            {experiments.info && (
              <DescriptionList listData={experiments.info} />
            )}
          </div>
          <div className="col col--right">
            <ImageGrid gridData={experiments.showcases} />
          </div>
        </section>
      </div>
      <Switcher />
    </section>
  </section>
);

export default Experiments;
