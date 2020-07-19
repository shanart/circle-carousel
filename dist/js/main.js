"use strict";

var _carousel = $('[data-c-area="circle-carousel"]');

var _btn_next = $('[data-c-action="next"]');

var _btn_prev = $('[data-c-action="prev"]'); // copy items


_carousel.find('.__circle_item').clone().appendTo(_carousel); // reverse original


var _original_items = $($('[data-c-area="circle-carousel"] .__circle_item').get().reverse());

_carousel.append(_original_items); // get middle


function make_middle() {
  var __i = _carousel.find('.__circle_item');

  __i.each(function () {
    $(this).removeClass('middle middle_prev_1 middle_prev_2 middle_next_1 middle_next_2');
  });

  var __middle = __i[__i.length / 2 - 1];
  $(__middle).addClass('middle'); // get prev 2 items
  // __ get middle - 1

  var __m_prev_1 = __i[__i.length / 2 - 2];
  $(__m_prev_1).addClass('middle_prev_1'); // __ get middle - 2

  var __m_prev_2 = __i[__i.length / 2 - 3];
  $(__m_prev_2).addClass('middle_prev_2'); // get next 2 items
  // __ get middle + 1

  var __m_next_1 = __i[__i.length / 2];
  $(__m_next_1).addClass('middle_next_1'); // __ get middle + 2

  var __m_next_2 = __i[__i.length / 2 + 1];
  $(__m_next_2).addClass('middle_next_2');
}

make_middle();

_carousel.on('circle_slider:next', function () {
  // delete last item
  var _last = $('[data-c-area="circle-carousel"] .__circle_item:last-child'); // append to start of _carousel()


  _last.prependTo(_carousel);

  make_middle();
});

_carousel.on('circle_slider:prev', function () {
  // delete first item
  var _first = $('[data-c-area="circle-carousel"] .__circle_item:first-child'); // append to end of _carousel()


  _first.appendTo(_carousel);

  make_middle();
});

_btn_next.on('click', function () {
  _carousel.trigger('circle_slider:next');
});

_btn_prev.on('click', function () {
  _carousel.trigger('circle_slider:prev');
});