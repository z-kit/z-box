import { test } from 'ava';
import Nightmare from 'nightmare';

test('CSS component - default', (t) => {
  t.plan(1);
  const msg = 'should render the box content';
  const expected = 'Content';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-box')
    .evaluate(() => document.querySelector('.z-box').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('CSS component - default', (t) => {
  t.plan(1);
  const msg = 'should render a padded box';
  const expected = '16px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
    .wait('.z-box')
    .evaluate(() => getComputedStyle(document.querySelector('.z-box')).padding)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
