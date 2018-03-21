var modalOpen = $('.modal-open');
var modalClose = $('.modal-close');
var modal = $('.modal');

modalOpen.on('click', function(){
  modal.fadeIn(1000);
})

modalClose.on('click', function(){
  modal.fadeOut(500);
})
