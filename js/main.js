const contador = document.querySelectorAll('.counter');
const speed = 1000;


contador.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if (count < target) {
			counter.innerText = count + inc;
			
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
  };

  updateCount();
});
//testimoniales
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

