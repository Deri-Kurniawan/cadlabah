Feature('Tips & Trik');

Scenario('should seen tips & trik', ({ I }) => {
  I.amOnPage('/edu/tips-dan-trik');
  I.see('Tips & Trik', 'h2');
  I.seeElement('div > h3');
  I.seeElement('div > p');
});
