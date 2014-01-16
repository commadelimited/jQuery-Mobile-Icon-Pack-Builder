$(function(){

    var $list = $('#glyph-list'),
        $selected_list = $('#selected-glyph-list');

    // clear all icons
    $(document).on('click', '.js-btn-none', function(e){
        // deselect all icons
        $list.find('li.selected').removeClass('selected');

        // remove them from the selected list
        $selected_list.find('li').remove();
    });

    // click to add to download list
    $(document).on('click', '#glyph-list li', function(e){
        var icon = e.target.className,
            className = '.' + icon,
            template = '<li><i class="ICON"></i></li>'.replace('ICON', icon);

        // mark the icon as selected
        $(this).addClass('selected');

        // add to selected list, only if it's not been added already
        if ( !$selected_list.find(className).length ) {
            $selected_list.append(template);
        }
    });

    // click to add to download list
    $(document).on('click', '#selected-glyph-list li', function(e){
        var className = '.' + $(this).find('i').get(0).className;

        // remove from the selected list
        $(this).remove();

        // remove selected class from icon in main list
        $list.find(className).parent('li').removeClass('selected');
    });

    // Download icons
    $('#download button').on('click', function(e){
        // get a list of the icons selected by the user
        var icon_list = $.map($selected_list.find('i'), function(icon, index){
                return $(icon).attr('class');
            }).join();

        // Make an ajax call to download.cfm which will prep
        $.post( 'download.cfm', {
            icon_list: icon_list
        })
        .done(function( data ) {
            alert( data );
        });

    });

});































