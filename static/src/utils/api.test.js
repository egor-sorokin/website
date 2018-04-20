import React from 'react';
import withFetching from './api';
import { DEFAULT_API_URL, URL_PATH_EDUCATIONS } from '../constants/index'
import Educations from '../components/Educations/index';
import { shallow, render, mount } from 'enzyme';
import axios from "axios";

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { educations: [] }}))
}));


describe('WithFetching',  () => {
  const WithFetching = withFetching(URL_PATH_EDUCATIONS, Educations);

  it('checks that fetchData was called only once', () => {
    const spy = jest.spyOn(WithFetching.prototype, '_fetchData');
    const wrapper = mount(<WithFetching />);


    expect(spy).toHaveBeenCalledTimes(1);
  });

  
  // it('should fetch educations', () => {
  //   const wrapper = shallow(<WithFetching />);
  //   const resp = {data: [{name: 'Bob'}]};
  // axios.get.mockResolvedValue(resp);
  //   // axios.get.mockImplementationOnce(() =>
  //   //    Promise.resolve({
  //   //    data: { educations: ["cat.jpg"] }
  //   //   })
  //   // );
  //
  //   return wrapper.instance()._fetchData().then(educations => expect(educations).toEqual(["cat.jpg"]));
  // });

  //  
  //   const resp = { data: { educations: 'FooBar' }};
  //   axios.get.mockImplementationOnce(() => Promise.resolve(resp));
  //
  //   expect(wrapper._fetchData()).toMatchSnapshot();
  //
  //   // return wrapper._fetchData().then(educations => expect(educations).toEqual(resp.data));
  // });
});

  //
  // // const spy = jest.spyOn(WithFetching.prototype, '_fetchData');
  // // const wrapper = mount(<WithFetching />);
  // const wrapper = mount(<WithFetching />).instance();
  //
  // console.log(mount(<WithFetching />).debug());
  //
  //   it('renders the WithFetching', () => {
  //     const resp = {data: [{name: 'Bob'}]};
  //     axios.get.mockResolvedValue(resp);
  //
  //
  //     return wrapper._fetchData().then(users => expect(users).toEqual(resp.data));
  //   // expect(wrapper.instance()).toMatchSnapshot();
  //
  //   // expect(spy).toHaveBeenCalledTimes(1);
  //
  // });
  //
  //
  //
  //
  //
  //
  // });

  //
  // it('renders the WithFetching', () => {
  //   expect(wrapper.find(WithFetching).props()._fetchData()).toMatchSnapshot();
  //   // expect(wrapper.dive().instance()).toMatchSnapshot();
  //   // expect(wrapper.instance()._fetchData()).toMatchSnapshot();
  //   // expect(wrapper._fetchData()).toMatchSnapshot();
  // });



  // jest.mock('axios');
  //
  // test('should fetch users', () => {
  //   const resp = {data: [{name: 'Bob'}]};
  //   axios.get.mockResolvedValue(resp);
  //
  //   // or you could use the follwing depending on your use case:
  //   // axios.get.mockImplementation(() => Promise.resolve(resp))
  //
  //   return Educations.then(users => expect(users).toEqual(resp.data));
  // });

  // var wrapper, WrapperComponent, FetchComponent, MockFetchComponent, instance, set;
  //
  // beforeEach(function () {
  //   class MockFetchComponent extends React.Component {
  //     render() {
  //       return (<div>Component</div>);
  //     }
  //   }
  //
  //   set = new Set();
  //   WrapperComponent = withFetching(URL_PATH_EDUCATION, Educations);
  //   wrapper = shallow(<WrapperComponent />);
  //   instance = wrapper.instance();
  // });
  //
  // it('renders the List Component as the root element', function () {
  //   expect(WrapperComponent.mock.instances).toMatchSnapshot();
  // });

  // describe('handleOnSelect', function () {
  //   describe('when not already selected', function () {
  //     it('adds the key to the selection set', function () {
  //       instance.handleOnSelect('1234');
  //       expect(instance.state.selection.has('1234')).toBeTruthy();
  //     });
  //   });
  //
  //   describe('when already selected', function () {
  //     beforeEach(function () {
  //       instance.setState({selection: new Set(['2314'])});
  //     });
  //
  //     it('removes the selection from the set', function () {
  //       instance.handleOnSelect('2314');
  //       expect(instance.state.selection.has('1234')).toBeFalsy();
  //     });
  //   });
  // });
// });





// describe('api', () => {
//   it('fetches data for <Educations /> component', () => {
//     // expect(withFetching(URL_PATH_EDUCATION)).toBeInstanceOf(Function);
//     // expect(withFetching(URL_PATH_EDUCATION)(Educations)).toBeInstanceOf(Function);
//     //
//     // expect(withFetching(URL_PATH_EDUCATION)(Educations)).toMatchSnapshot();
//     // expect.assertions(1);
//
//     return withFetching(URL_PATH_EDUCATION)(Educations).fetchData(DEFAULT_API_URL + URL_PATH_EDUCATION).then(data => {
//       expect(data).toBe('peanut butter');
//     });
//   });
//
//
//   it('should call incrementCounter when the button is clicked', () => {
//     const wrapper = shallow(<Educations />);
//     const instance  = wrapper.find(withFetching);
//
//     jest.spyOn(instance, 'fetchData');
//     expect(instance.fetchData).toHaveBeenCalledTimes(1);
//   });
// });

// describe('higher-order component', () => {
//   let WrapperComponent;
//
//   beforeEach(() => {
//     class MockComponent extends React.Component {
//       render() {
//         return (<div>Component</div>);
//       }
//     }
//
//     WrapperComponent = withFetching(URL_PATH_EDUCATION)(MockComponent);
//   });
//
//   it('withHoc should render without crashing', () => {
//     const wrapper = shallow(<WrapperComponent/>);
//     const instance = wrapper.instance();
//     // expect(instance.props).toMatchSnapshot();
//   });
// });
//





// jest.mock('./api', () => ({
//   withFetching: jest.fn((url) => callback('someData'))
// }));
//
//
// const makeCurry = (fn) => {
//     if(typeof fn!=='function'){
//         throw Error('No function provided');
//     }
//
//     let slice = [].slice;
//
//     return function curriedFn(){
//       let args = slice.call(arguments);
//
//       if(args.length < fn.length){
//         return () => curriedFn.apply(null, args.concat(slice.call(arguments)));
//       }
//
//       return fn.apply(null, args);
//     };
// };