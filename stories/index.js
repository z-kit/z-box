import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { box } from '../src/component';

const Box = box(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => <div className="z-box">Content</div>);

storiesOf('Stateless functional component', module)
  .add('default', () => <Box>Content</Box>);
