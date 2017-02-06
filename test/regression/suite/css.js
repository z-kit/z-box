module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-box', 1000)
      .assert.cssProperty('.z-box', 'padding', '16px')
      .assert.containsText('.z-box', 'Content')
      .end();
  },
};
