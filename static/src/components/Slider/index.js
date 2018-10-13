import React from 'react';
import PropTypes from 'prop-types';


class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { windowHeight: props.height, windowWidth: props.width };
  }

  getInitialState = () => ({ windowHeight: `${window.innerHeight}px`, windowWidth: `${window.innerWidth}px` });

  componentWillMount = () => {
    this.setState({
      windowHeight: `${window.innerHeight}px`,
      windowWidth: `${window.innerWidth}px`,
    });
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };

  handleResize = () => {
    this.setState({
      windowHeight: `${window.innerHeight}px`,
      windowWidth: `${window.innerWidth}px`,
    });
  };

  render() {
    const { children } = this.props;

    const slides = children.map((item, i) => (
      <div
        key={i}
        className={`slide ${i < 1 ? 'slide-auto' : 'slide-normal'} slide-${i}`}
        style={{ height: this.state.windowHeight, width: this.state.windowWidth }}
      >{item}
      </div>
    ));

    return (
      <div className="slider">
        {slides}
      </div>
    );
  }
}


Slider.propTypes = {
  children: PropTypes.instanceOf(Array),
  height: PropTypes.string,
  width: PropTypes.string,
};

Slider.defaultProps = {
  children: [],
  height: '0',
  width: '0',
};

export default Slider;
