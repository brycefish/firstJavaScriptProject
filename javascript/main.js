"use strict";

$(document).ready(function () {
  
  $("#mobile-menu-click").click((evt) => {
    //hamburger click
    const menuClick = evt.currentTarget;
    $("#drop-down-items").show().toggleClass("drop-down-styling");
    $("#hide-me ul li").hide();
    $("header").css("padding-bottom", 0);
  });

  //close "x" click
  $("#menu-close").click((evt) => {
    $("#drop-down-items").hide().toggleClass("drop-down-styling");
    $("#hide-me ul li").show();
  });

});//end doc ready