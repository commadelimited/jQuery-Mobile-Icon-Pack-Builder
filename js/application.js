$(function(){

    var $list = $('#selected-glyph-list'),
        $selected_list = $('#selected-glyph-list');

    // click to add to download list
    $(document).on('click', '#glyph-list li', function(e){
        var icon = e.target.className,
            className = '.' + icon,
            template = '<li><i class="ICON"></i></li>'.replace('ICON', icon);

        // add to selected list, only if it's not been added already
        if ( !$selected_list.find(className).length ) {
            $selected_list.append(template);
        }
    });

    // click to add to download list
    $(document).on('click', '#selected-glyph-list li', function(e){
        $(this).remove();
    });

});