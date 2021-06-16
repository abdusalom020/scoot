var elsFaqItem = document.querySelectorAll('.faq__item');
var elsFaqBtn = document.querySelectorAll('.faq__btn');

elsFaqBtn.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    // elsFaqItem.forEach(function (close) {
    //   close.classList.remove('faq__item--opan')
    // });
    console.log("motto");
    btn.closest('.faq__item').classList.toggle('faq__item--open');
  });
});