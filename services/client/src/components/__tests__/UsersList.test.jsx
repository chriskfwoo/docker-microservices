import React from 'React'
import { shallow } from 'enzyme'
import UsersList from '../UsersList'
import renderer from 'react-test-renderer'

const users = [
  {
    'active': true,
    'email': 'chris@gmail.com',
    'id': 1,
    'username': 'chriswoo'
  },
  {
    'active': true,
    'email': 'johndoe@gmail.com',
    'id': 2,
    'username': 'johndoe'
  }
];

test('UserList renders properly', () => {
  const wrapper = shallow(<UsersList users={users} />);
  const element = wrapper.find('h4');
  expect(element.length).toBe(2);
  expect(element.get(0).props.children).toBe('chriswoo')
});

test('UserList renders a snapshot properly', () => {
  const tree = renderer.create(<UsersList users={users} />).toJSON();
  expect(tree).toMatchSnapshot();
});