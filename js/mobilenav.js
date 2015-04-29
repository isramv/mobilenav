(function ($) {
    Drupal.behaviors.mobilenav = {
        attach: function (context, settings) {
            var toggler = "<div class='toggler'></div>";
            jQuery(toggler).insertAfter(jQuery('#block-mobilenav-mobilenavigation ul.menu > li.expanded > a'));
            body = jQuery('body');
            sidebar = jQuery('#block-mobilenav-mobilenavigation');
            jQuery(sidebar).height(jQuery(window).height());
            jQuery(window).resize(function () {
                if (jQuery(window).width() > Drupal.settings.mobilenav.breakpoint) {
                    body.removeClass('expanded').addClass('hide');
                }
                jQuery(sidebar).height(jQuery(window).height());
            });
            jQuery(body).height(jQuery(window).height());
            jQuery('#burger').click(function (event) {
                if(jQuery(body).hasClass('expand')) {
                    jQuery(body).removeClass('expand').addClass('hide');
                } else {
                    jQuery(body).addClass('expand').removeClass('hide');
                }
            });
            jQuery('.oosidebar li.expanded > a').bind('click', function (e) {
                e.preventDefault();
                $elem = jQuery(this);
                console.log($elem);
                if ($elem.next().next().is(':visible')) {
                    $($elem).next().next().slideUp();
                    $elem.parent().removeClass('open');
                } else {
                    $elem.parent().addClass('open');
                    $($elem).next().next().slideDown();
                }
            });
            jQuery('.oosidebar .toggler').bind('click', function() {
                elem = this;
                parentelement = jQuery(elem.parentElement);
                if(parentelement.hasClass('closed')) {
                    parentelement.removeClass('closed').addClass('open');
                } else {
                    parentelement.removeClass('open').addClass('closed');
                }


                element = jQuery(elem.nextElementSibling);
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