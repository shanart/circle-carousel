"use strict";

//
var _carousel = $('[data-c-area="circle-carousel"]');

var _btn_next = $('[data-c-action="next"]');

var _btn_prev = $('[data-c-action="prev"]'); // copy items


_carousel.find('.__circle_item').clone().appendTo(_carousel); // reverse original


var _original_items = $($('[data-c-area="circle-carousel"] .__circle_item').get().reverse());

_carousel.append(_original_items);

_carousel.on('circle_slider:next', function () {
  // delete last item
  var _last = $('[data-c-area="circle-carousel"] .__circle_item:last-child'); // append to start of _carousel()


  _last.prependTo(_carousel);
});

_carousel.on('circle_slider:prev', function () {
  // delete first item
  var _first = $('[data-c-area="circle-carousel"] .__circle_item:first-child'); // append to end of _carousel()


  _first.appendTo(_carousel);
});

_btn_next.on('click', function () {
  _carousel.trigger('circle_slider:next');
});

_btn_prev.on('click', function () {
  _carousel.trigger('circle_slider:prev');
});