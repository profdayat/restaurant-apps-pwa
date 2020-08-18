const assert = require('assert');

Feature('Fav Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const firstCondition = "You don't have any Favorite Cafe or Restaurant";

Scenario('showing empty favorite restaurant', (I) => {
  // Pastikan belum ada restaurant yang disukai
  I.seeElement('#list-rest');
  I.see(firstCondition, '#list-rest');
});

Scenario('liking one restaurant', async (I) => {
  I.see(firstCondition, '#list-rest');

  // Buka halaman utama
  I.amOnPage('/');

  // lihat card restaurant pertama dan klik untuk ke detail
  I.seeElement('.card a');
  const firstCard = locate('.card-title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // like restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan bandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async (I) => {
  I.see(firstCondition, '#list-rest');

  // Buka halaman utama
  I.amOnPage('/');

  // lihat card restaurant pertama dan klik untuk ke detail
  I.seeElement('.card a');
  const firstCard = locate('.card-title').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  // like restaurant di detail
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav dan bandingakan dg restaurant yg diklik
  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedCardTitle = await I.grabTextFrom('.card-title');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  // klik card restaurant yg ada di fav
  I.click(likedCardTitle);

  // unlike restaurant yang ada di fav
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // kembali ke halaman fav
  I.amOnPage('/#/favorite');
  I.seeElement('#list-rest');
  const noFavRestaurant = await I.grabTextFrom('#list-rest');

  // cek halaman fav dan berhasil hapus (unlike)
  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('Customer review', async (I) => {
  I.see(firstCondition, '#list-rest');

  // Buka halaman utama
  I.amOnPage('/');

  // Pilih salah satu restaurant, misalnya restaurant pertama, Lalu Klik
  I.seeElement('.card a');
  I.click(locate('.card a').first());

  // Melihat form review
  I.seeElement('.form-review form');

  // Kita mengisi isian nama dan review
  const textReview = 'Testing post review';
  I.fillField('inputName', 'Dayat');
  I.fillField('inputReview', textReview);

  // Menekan tombol submit
  I.click('#submit-review');

  // Kita melihat review yang telah disubmit
  const lastReview = locate('.review-body').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
