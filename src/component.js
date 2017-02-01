/**
 * Copyright (c) 2017 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-box
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  box: styles['z-box'] || 'z-box',
};

export function box(e) {
  return ({ children }) => e('div', { className: classnames.box }, children);
}

export default box;
