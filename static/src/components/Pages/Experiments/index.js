import React from 'react';
import PropTypes from 'prop-types';

import InnerSlide from '../../InnerSlide';


const Experiments = ({ experiments }) => (
  <main id="experiments">
    <InnerSlide
      key="experiments"
      name={experiments.name}
      info={experiments.info}
      showcases={experiments.showcases}
    />
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
