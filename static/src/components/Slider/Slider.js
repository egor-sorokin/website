import PropTypes from 'prop-types';
import React, {Component} from 'react';
import scrollToY from 'scroll-to-y';
import Item from './Item';


class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {activeIndex: 1};

    this.setActive = this.setActive.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.lastScroll = 0;

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  setActive(index, scrollTo) {
    this.setState({activeIndex: index}, () => {
      if (scrollTo) {
        this.isAnimating = true;
        scrollToY(
          document.getElementById(`slide-${index}`).offsetTop,
          500,
          'easeInOutQuint',
          () => {
            this.isAnimating = false;
          }
        );
      }
    });
  }

  handleScroll() {
    if (this.isAnimating) {
      return;
    }

    // up
    if (
      window.scrollY > this.lastScroll &&
      window.innerHeight + window.scrollY >
      (window.innerHeight * this.state.activeIndex) + (window.innerHeight / 2)
    ) {
      this.setActive(this.state.activeIndex + 1);
      // down
    } else if (
      window.scrollY < this.lastScroll &&
      window.innerHeight + window.scrollY <
      (window.innerHeight * this.state.activeIndex) - (window.innerHeight / 1.5)
    ) {
      this.setActive(this.state.activeIndex - 1);
    }

    this.lastScroll = window.scrollY;
  }

  render() {
    if (!this.props.children) {
      return null;
    }

    return (
      <div className="slider">
        {this.props.children.map((child, key) => {
          let index = key + 1;

          return (
            <div id={`slide-${index}`} key={index}>
              {React.cloneElement(child, {
                index,
                hideButton: index === this.props.children.length,
                onClick: this.setActive
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Slider.Item = Item;

Slider.defaultProps = {
  children: []
};

export default Slider;