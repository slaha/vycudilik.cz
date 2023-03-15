(function() {
  if (window.location.search.indexOf('email-sent') > -1) {
    $("#contactForm").css("display", "none");
    $("#email-sent").css("display", "block");
    location.href = "#email-sent";
  }

  $('#email-sent').on('closed.bs.alert', function () {
    $("#contactForm").css("display", "block");
  })
})();