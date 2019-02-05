import React from 'react';
import renderer from 'react-test-renderer';
import ExampleComponent from '../src';

describe('<ExampleComponent />', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ExampleComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
