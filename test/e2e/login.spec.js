Feature('User Login');

Scenario('2 login option available', ({ I }) => {
  I.amOnPage('/');
  I.see('Tamu', '#buttonLogInToggler');
  I.click('#buttonLogInToggler');
  I.seeElement('#buttonLogInToggler ~ ul > li > a[href="/auth/google"]');
  I.seeElement('#buttonLogInToggler ~ ul > li > a[href="/auth/github"]');

  I.see('Ayo bergabung!', 'h3');
  I.seeElement('h3 ~ a[href="/auth/google"]');
  I.seeElement('h3 ~ a[href="/auth/github"]');
});

Scenario('login testing', ({ I }) => {
  I.amOnPage('/');
  I.click('#buttonLogInToggler');
  I.click('#buttonLogInToggler ~ ul > li > a[href="/auth/google"]');
  I.amOnPage('/');
  I.click('#buttonLogInToggler');
  I.click('#buttonLogInToggler ~ ul > li > a[href="/auth/github"]');
});
