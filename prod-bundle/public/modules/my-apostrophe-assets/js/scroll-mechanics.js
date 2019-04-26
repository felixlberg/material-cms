$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.


    // Smoothscroll navigation
    // Trigger onScroll event at scroll
    $(document).on("scroll", onScroll);
    // Navigation click function jumps to clicked section
    $('.anchor[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // Set fullpage anchors
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.anchor').each(function () {
            var target = this.hash;
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                currLink.parent('li').addClass("active");
                // Get hash and Replace it (bleeding edge! need to add workourung for IE)
                history.replaceState(null, null, target );
            }
            else {
              currLink.parent('li').removeClass("active");
            }
        });
    }

    // Fullpage Scroll Options, Init
    // options passing to Smartscroll
    var options = {
      mode: "set", // "vp", "set"
      autoHash: false,
      sectionScroll: true,
      initialScroll: true,
      keepHistory: false,
      sectionWrapperSelector: ".section-wrapper",
      sectionClass: "section",
      animationSpeed: 400,
      headerHash: null,
      breakpoint: "400px",
      eventEmitter: null,
      dynamicHeight: true,
      bindSwipe: true
    };

    //Initialisation
    $.smartscroll(options);


//End of $(function()
});