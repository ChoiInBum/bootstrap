$(document).ready(function() {
  $('#Affix').affix({
    offset: {
      top: 0,
      bottom: function () {
        return(this.bottom = $('.footer').outerHeight(true))
      }
    }
  });
});
