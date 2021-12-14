Feature('posts');

Scenario('posts exists', ({ I }) => {
  I.amOnPage('/posts');
  I.seeElement('.posts-item');
});

Scenario('all category exists', ({ I }) => {
  I.amOnPage('/posts');
  I.seeElement('#panelsStayOpen-h1');
  I.seeElement('#panelsStayOpen-c1');
  I.see('Semua', '#panelsStayOpen-c1 a[href="/posts"]');
  I.see('Aksesoris', '#panelsStayOpen-c1 a[href="/posts/category/accessories"]');
  I.see('Elektronik', '#panelsStayOpen-c1 a[href="/posts/category/electronic"]');
});
