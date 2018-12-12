import test from 'ava';
import Nightmare from 'nightmare';

test('SFC component - content', (t) => {
  t.plan(1);
  const msg = 'should render the box content';
  const expected = 'Content';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-box')
    .evaluate(() => document.querySelector('.z-box').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - padding', (t) => {
  t.plan(1);
  const msg = 'should render a padded box';
  const expected = '16px';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-box')
    .evaluate(() => getComputedStyle(document.querySelector('.z-box')).padding)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
