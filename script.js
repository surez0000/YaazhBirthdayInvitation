
// $('document').ready(function(){
//     $('html').scrollTop(0)
// })

var viewport = $(window),
    root = $('html'),
    maxScroll;

viewport.on({
  scroll: function() {
    var scrolled = viewport.scrollTop();
    root.css({ fontSize: (scrolled / maxScroll) * 50 });
  },
  resize: function() {
    maxScroll = root.height() - viewport.height();
  }
}).trigger('resize');
