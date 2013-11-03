$(function() {
  if (window.top===window) { // permalink view
    $('.hide-in-permalink').hide()
    var here = location.pathname.split('/').pop();
    for (page in truthmap) {
      $('#item-menu').append($('<li/>').addClass('divider'));
      var links = truthmap[page];
      for (var i=0; i<links.length; i++) {
        $('#item-menu').append(
          $('<li/>').append($('<a/>').attr('href',links[i][2]).text(links[i][3]))
        );
        if (links[i][2]===here) $('#item-menu li:last').addClass('active');
      };
    };
    $('.show-in-permalink').show()
  }
});
