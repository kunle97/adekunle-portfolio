var p = new Pageable("#container", {
    animation: 500,
    delay: 0,
    pips: false, // display the pips
    orientation: "vertical",
    onScroll: function () {
      // do something during scroll
    },
    // many more
  });

  $(".home-btn").click(function () {
    p.scrollToPage(1);
  });

  $(".project-btn").click(function () {
    p.scrollToPage(2);
  });

  $(".exp-btn").click(function () {
    p.scrollToPage(3);
  });

  $(".contact-btn").click(function () {
    p.scrollToPage(4);
  });