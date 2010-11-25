$(document).ready(function () {
  // $("#tree").grow();
  var expand_image = "images/expand.png";
  var collapse_image = "images/collapse.png";


  function toggle_image(image) {

    if (image.attr('src') == expand_image) {
      image.attr('src', collapse_image);
    } else {
      image.attr('src', expand_image);
    };
  }

  $("img.expander").click(function () {
    $this = $(this);
    toggle_image($this);
    $this.siblings("ul").toggle();
  });

  $("div.node").click(function () {
    $(this).siblings("ul").toggle();
    $toggle_image = $(this).prev("img");
    toggle_image($toggle_image);
  });
});
