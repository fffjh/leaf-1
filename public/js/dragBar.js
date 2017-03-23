var isResizing = false,
    lastDownX = 0,
    lastDownY = 0;

$(function() {
    var container = $('#container'),
        left = $('#left_panel'),
        right = $('#right_panel'),
        top = $('#top_panel'),
        bottom = $('#bottom_panel'),
        dragVertical = $('#drag-vertical'),
        dragHorizontal = $('#drag-horizontal');

    dragVertical.on('mousedown', function(e) {
        isResizing = true;
        lastDownX = e.clientX;
    });
    dragHorizontal.on('mousedown', function(e) {
        isResizing = true;
        lastDownY = e.clientY;
    });

    $(document).on('mousemove', function(e) {
        // we don't want to do anything if we aren't resizing.
        if (!isResizing)
            return;

        var offsetRight = container.width() - (e.clientX - container.offset().left);
        var offsetBottom = $(window).height() - (e.clientY - container.offset().top);

        left.css('right', offsetRight);
        right.css('width', offsetRight);
        top.css('bottom', offsetBottom);
        bottom.css('height', offsetBottom);
    }).on('mouseup', function(e) {
        // stop resizing
        isResizing = false;
    });
});
