import React from 'react';
import PropTypes from 'prop-types';

import DescriptionList from '../../DescriptionList';
import ImageGrid from '../../ImageGrid';
import Switcher from '../../Switcher';
import '../../../styles/app/_common.scss';


const Experiments = ({ experiments }) => (
  <main id="experiments" key="experiments">
    <section className="slide-inner">
      <div className="container">
        <section className="content content--experiments">
          <div className="col col--left">
            <h1 className="font-s-40">
              {experiments.name}
            </h1>
            <DescriptionList
              listData={experiments.info}
            />
          </div>
          <div className="col col--right">
            <ImageGrid
              gridData={experiments.showcases}
            />
          </div>
        </section>
      </div>
      <Switcher />
    </section>
  </main>
);


Experiments.propTypes = {
  experiments: PropTypes.shape({
    name: PropTypes.string,
    info: PropTypes.string,
    showcases: PropTypes.instanceOf(Array),
  }),
};

Experiments.defaultProps = {
  experiments: {},
};


export default Experiments;
