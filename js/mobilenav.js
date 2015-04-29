(function ($) {
    Drupal.behaviors.mobilenav = {
        attach: function (context, settings) {
            var toggler = "<div class='toggler'></div>";
            $(toggler).insertAfter($('#block-mobilenav-mobilenavigation ul.menu > li.expanded > a'));
            body = $('body');
            sidebar = $('#block-mobilenav-mobilenavigation');
            $(sidebar).height($(window).height());
            $(window).resize(function () {
                if ($(window).width() > Drupal.settings.mobilenav.breakpoint) {
                    body.removeClass('expanded').addClass('hide');
                }
                $(sidebar).height($(window).height());
            });
            $(body).height($(window).height());
            $('#burger').click(function (event) {
                if($(body).hasClass('expand')) {
                    $(body).removeClass('expand').addClass('hide');
                } else {
                    $(body).addClass('expand').removeClass('hide');
                }
            });
            $('.oosidebar li.expanded > a').bind('click', function (e) {
                e.preventDefault();
                $elem = $(this);
                console.log($elem);
                if ($elem.next().next().is(':visible')) {
                    $($elem).next().next().slideUp();
                    $elem.parent().removeClass('open');
                } else {
                    $elem.parent().addClass('open');
                    $($elem).next().next().slideDown();
                }
            });
            $('.oosidebar .toggler').bind('click', function() {
                elem = this;
                parentelement = $(elem.parentElement);
                if(parentelement.hasClass('closed')) {
                    parentelement.removeClass('closed').addClass('open');
                } else {
                    parentelement.removeClass('open').addClass('closed');
                }


                element = $(elem.nextElementSibling);
                if(element.hasClass('open')) {
                    element.removeClass('open');
                    element.slideUp();
                } else {
                    element.addClass('open');
                    element.slideDown();
                }
            });
        }
    };
})(jQuery);