const _carousel = $('[data-c-area="circle-carousel"]');
const _btn_next = $('[data-c-action="next"]');
const _btn_prev = $('[data-c-action="prev"]');
const classlist = 'middle middle_prev_1 middle_prev_2 middle_next_1 middle_next_2 __buffer __buffer-first __buffer-last';
// copy items
_carousel.find('.__circle_item').clone().appendTo(_carousel);

// reverse original
const _original_items = $($('[data-c-area="circle-carousel"] .__circle_item').get().reverse());
_carousel.append(_original_items);

// get middle
function make_middle() {
    const __i =_carousel.find('.__circle_item');
    __i.each(function(){
        $(this).removeClass(classlist);
    });
    let __middle = __i[__i.length/2 - 1];
    $(__middle).addClass('middle');

    // get prev 2 items
    // __ get middle - 1
    const __m_prev_1 = __i[__i.length/2 - 2];
    $(__m_prev_1).addClass('middle_prev_1');

    // __ get middle - 2
    const __m_prev_2 = __i[__i.length/2 - 3];
    $(__m_prev_2).addClass('middle_prev_2');

    // get next 2 items
    // __ get middle + 1
    const __m_next_1 = __i[__i.length/2];
    $(__m_next_1).addClass('middle_next_1');

    // __ get middle + 2
    const __m_next_2 = __i[__i.length/2 + 1];
    $(__m_next_2).addClass('middle_next_2');

    // buffer for animation
    const __b_next = __i[__i.length/2 + 2];
    $(__b_next).addClass('__buffer __buffer-last');
    const __b_prev = __i[__i.length/2 - 4];
    $(__b_prev).addClass('__buffer __buffer-first');

    write_indicator();

}

make_middle();

function write_indicator() {

}

_carousel.on('circle_slider:next', function(){
    // delete last item
    const _last = $('[data-c-area="circle-carousel"] .__circle_item:last-child');
    
    // append to start of _carousel()
    _last.prependTo(_carousel);
    make_middle();

});

_carousel.on('circle_slider:prev', function(){
    // delete first item
    const _first = $('[data-c-area="circle-carousel"] .__circle_item:first-child');
    // append to end of _carousel()
    _first.appendTo(_carousel);

    make_middle();

});


_btn_next.on('click', function(){
    _carousel.trigger('circle_slider:next');
});

_btn_prev.on('click', function(){
    _carousel.trigger('circle_slider:prev');
})