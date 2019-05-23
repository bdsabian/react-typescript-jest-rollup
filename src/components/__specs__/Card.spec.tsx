import * as React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card', () => {
  const wrapper = shallow(<Card title="Test" image="https://i.imgur.com/GIXGUZC.jpg" body="This is a card" />);

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
