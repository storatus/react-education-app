
/**
 * test components module
 * Ref: https://bit.ly/2BpDf4p
 * Ref: https://bit.ly/2MCYu7p
 * @module Component.test.js
 */

import React from 'react';

import App from './../components/App/App';
import Courses from './../components/Courses/Courses';
import Course from './../components/Course/Course';
import Users from './../components/Users/Users';
import CreateCourse from './../components/CreateCourse/CreateCourse';
import CreateUser from './../components/CreateUser/CreateUser';
import EditCourse from './../components/EditCourse/EditCourse';
import Home from './../components/Home/Home';
import Login from './../components/Login/Login';
import MyCourses from './../components/MyCourses/MyCourses';
import Sidebar from './../components/Sidebar/Sidebar';
import Auth from './../components/Auth/Auth';
import NoPage from './../components/NoPage/NoPage';
import Main from './../components/Main/Main';


// Get mock data for API simulation
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});




import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });




// Renders App
describe('Testing <App /> Component', () => {
  const wrapper = shallow(<App />)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders Courses
describe('Testing <Courses /> Component', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Courses />
    </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders Users
describe('Testing <Users /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Users />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders CreateCourse
describe('Testing <CreateCourse /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <CreateCourse />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders CreateUser
describe('Testing <CreateUser /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <CreateUser />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders EditCourse
describe('Testing <EditCourse /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <EditCourse />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders Home Component
describe('Testing <Home /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Home />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders Login component
describe('Testing <Login /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Login />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders Course component
describe('Testing <Course /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Course />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders MyCourses component
describe('Testing <MyCourses /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <MyCourses />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders Sidebar component
describe('Testing <Sidebar /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Sidebar />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})

// Renders Auth component
describe('Testing <Auth /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Auth />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders NoPage component
describe('Testing <NoPage /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <NoPage />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})


// Renders Main component
describe('Testing <Main /> Component', () => {
  const wrapper = shallow(
  <Provider store={store}>
    <Main />
  </Provider>)
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
})
