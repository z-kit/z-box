import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { box } from '../../../src/component';

configure({ adapter: new Adapter() });

const Box = box(React.createElement);

test('Box component', (t) => {
  const msg = 'should render';
  const actual = shallow(<Box>Content</Box>).html();
  const expected = shallow(<div className="z-box">Content</div>).html();
  return t.deepEqual(actual, expected, msg);
});
