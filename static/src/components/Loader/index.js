import React, { Component } from 'react';
import { TimelineMax } from 'gsap';
import { attachHideAnimation } from './animation';
import './styles.scss';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.loaderTween = null;
  }


  componentDidMount() {
    this.loaderTween = new TimelineMax({ paused: true });
    attachHideAnimation(this.loaderTween);
  }


  componentWillUnmount() {
    this.loaderTween.play();
  }


  render() {
    return (
      <div className="loader">
        <h3 className="loader__inner font-s-20 text-c-l-dune">
          Loading...
        </h3>
      </div>
    );
  }
}

export default Loader;
