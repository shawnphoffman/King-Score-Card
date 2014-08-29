// Victory Point Swiper
var victorySwiper = new Swiper('.swiper-container-victory', {
  loop: true
  // onTouchMove: function(){
  //   $('.swiper-container-victory .left, .swiper-container-victory .right').fadeOut();
  // },
  // onTouchEnd: function(){
  //   setTimeout(function(){
  //     $('.left, .right').show();
  //   }, 100);
  // },
  // onSlideChangeEnd: function(){
  //   setTimeout(function(){
  //     $('.left, .right').fadeIn();
  //   }, 200);
  // }
});

// Health Swiper
var healthSwiper = new Swiper('.swiper-container-health', {
  loop: true
});

// Energy Swiper
var energySwiper = new Swiper('.swiper-container-energy', {
  loop: true
});

(function() {
  document.getElementById("clr").onclick = function() {
    victorySwiper.swipeTo(0, 300, false);
    healthSwiper.swipeTo(0, 300, false);
    energySwiper.swipeTo(0, 300, false);
  };
})();
