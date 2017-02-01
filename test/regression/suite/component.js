module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:3000/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
      .waitForElementPresent('.z-box', 1000)
      .assert.cssProperty('.z-box', 'padding', '16px')
      .assert.containsText('.z-box', 'Content')
      .end();
  },
};
