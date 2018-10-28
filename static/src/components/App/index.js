import React, {Component} from 'react';
import Home from '../Pages/Home/index';
import Contact from '../Pages/Contact/index';
import About from '../Pages/About/index';
import Projects from '../Pages/Projects/index';
import '../../utils/data/person.json';
import '../../utils/data/projects.json';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isOpenedAbout: false
    }
  }

  
  toggleAboutSection = () => {
    this.setState({isOpenedAbout: !this.state.isOpenedAbout});
  };

  
  render() {
    return (
      <div>
        <About
          isOpenedAbout={this.state.isOpenedAbout}
          toggleAboutSection={this.toggleAboutSection}
        />
        <Home
          toggleAboutSection={this.toggleAboutSection}
        />
        <Projects />
        <Contact
          toggleAboutSection={this.toggleAboutSection}
        />
      </div>
    )
  }
}

export default App;
