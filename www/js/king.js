// Victory Point Swiper
var victorySwiper = new Swiper('.swiper-container-victory', {
  loop: true,
});

// Health Swiper
var healthSwiper = new Swiper('.swiper-container-health', {
  loop: true,
});

// Energy Swiper
var energySwiper = new Swiper('.swiper-container-energy', {
  loop: true
});

$('.clr').on('click', function(){
  victorySwiper.swipeTo(0, 300, false);
  healthSwiper.swipeTo(0, 300, false);
  energySwiper.swipeTo(0, 300, false);
});
