import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import { box } from '../../../src/component';

const Box = box(React.createElement);

test('Box component', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<Box>Content</Box>);
  const expected = JSX(
    <div className="z-box">Content</div>
  );
  return t.deepEqual(actual, expected, msg);
});
