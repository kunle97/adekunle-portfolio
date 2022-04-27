var p = new Pageable("#projects-container", {
    animation: 500,
    delay: 0,
    pips: true, // display the pips
    orientation: "horizonatal",
    anchors: ["project-1", "project-2", "project-3", "project-4"], 
    onScroll: function () {
      // do something during scroll
    },
    // many more
  });

//   $(".home-btn").click(function () {
//     p.scrollToPage(1);
//   });

//   $(".project-btn").click(function () {
//     p.scrollToPage(2);
//   });

//   $(".exp-btn").click(function () {
//     p.scrollToPage(3);
//   });

//   $(".contact-btn").click(function () {
//     p.scrollToPage(4);
//   });