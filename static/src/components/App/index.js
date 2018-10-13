import React from 'react';
import Slider from '../Slider/index';
import Home from '../Pages/Home/index';
import Contact from '../Pages/Contact/index';
import About from '../Pages/About/index';
import Projects from '../Pages/Projects/index';

const App = () => (
  <Slider>
    <About />
    <Home />
    <Projects />
    <Contact />
  </Slider>
);


export default App;
