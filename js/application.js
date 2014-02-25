$(function(){

    var currentColor = '#000000',
        $list = $('#glyph-list'),
        $selected_list = $('#selected-glyph-list');

    // clear all icons
    $(document).on('click', '.js-btn-none', function(e){
        // deselect all icons
        $list.find('li.selected').removeClass('selected');

        // remove them from the selected list
        $selected_list.find('li').remove();

        // should download button show?
        buttonStatus();
    });

    // click to add to download list
    $(document).on('click', '#glyph-list li', function(e){
        var icon = e.target.className,
            className = '.' + icon,
            template = '<li><i class="ICON"></i></li>'.replace('ICON', icon);

        // mark the icon as selected
        $(this).addClass('selected');

        // add to selected list, only if it's not been added already
        try {
            if ( !$selected_list.find(className).length ) {
                $selected_list.append(template);
            }
        } catch(error) {
            // console.log(error);
        }

        // should download button show?
        buttonStatus();
    });

    // click to remove from download list
    $(document).on('click', '#selected-glyph-list li', function(e){
        var className = '.' + $(this).find('i').get(0).className;

        // remove from the selected list
        $(this).remove();

        // remove selected class from icon in main list
        $list.find(className).parent('li').removeClass('selected');

        // should download button show?
        buttonStatus();
    });

    // Download icons
    $(document).on('click', '#download a:not(.disabled)', function(e){

        e.preventDefault();
        $('body').css('cursor', 'wait');

        var $a = $(this),
            link = 'download.cfm?icon_list=',
            icon_list = $.map($selected_list.find('i'), function(icon, index){
                return $(icon).attr('class');
            }).join();

        // Make an ajax call to download.cfm which will prep
        $.get( 'download.cfm', {
            icon_list: icon_list
        })
        .done(function( data ) {
            $('body').css('cursor', 'default');
            location.href = data;
        });

    });

    function buttonStatus() {
        // if there are items in the selected list, enable the button
        // else disable it
        if ( $selected_list.find('li').length > 0) {
            $('#download a').removeClass('disabled');
        } else {
            $('#download a').addClass('disabled');
        }
    }

});































