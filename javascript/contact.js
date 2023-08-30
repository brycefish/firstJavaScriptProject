"use strict";

$(document).ready(() => {
  $("#join_list").click(() => {
    $("span").text(""); // clear any previous error messages
    let isValid = true; // initialize isValid flag

    const email1 = $("#email_1").val();
    const email2 = $("#email_2").val();

    if (email1 === "" || !email1.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
      isValid = false;
      $("#email_1").next().text("Please enter a valid email.");
    }
    if (email2 === "" || !email2.match(/^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/)) {
      isValid = false;
      $("#email_2").next().text("Please enter a valid email.");
    }
    if (email1 !== email2) {
      isValid = false;
      $("#email_2").next().text("Please enter a valid email.");
      
    }

    if (isValid) {
      $("#email_form").submit();
    }

    $("#email").focus();
  });

  $("#email").focus();
});