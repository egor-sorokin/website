import React, {Component} from 'react';
import Logo from '../../Logo/index';
import UnorderedList from '../../UnorderedList/index';
import fetchData from '../../../utils/api';
import Navbar from '../../Navbar/index';
import {URL_PATH_PERSON_DATA, NAVBAR_ITEMS, LINK_MASKED} from '../../../constants/index';
import './styles.scss';


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isFetching: false,
      error: null,
    };
  }


  componentDidMount() {
    this._fetchData();
  }


  _fetchData() {
    this.setState({isFetching: true});

    fetchData(URL_PATH_PERSON_DATA)
      .then(data => this.setState({data, isFetching: false}))
      .catch(error => this.setState({error: error.message, isFetching: false}));
  }


  render() {
    const {data, error, isFetching} = this.state;
    const personData = data.personData || {};
    const socials = personData.socials || [];

    if (error) {
      return <div><p>{error}</p></div>;
    }

    if (isFetching) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <div>
        <section className="banner contact">
          <div className="contact-inner">
            <div className="contact-inner__item">
              <Navbar
                items={NAVBAR_ITEMS}
              ></Navbar>
              <div className="delimiter"></div>
            </div>
            <div className="contact-inner__item">
              <Logo></Logo>
            </div>
            <div className="contact-inner__item">
              <UnorderedList
                title=''
                items={socials.items}
                type={LINK_MASKED}
              ></UnorderedList>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default Contact;
