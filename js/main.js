$(document).ready(function () {
  var $up = $('.plus'),
    $down = $('.minus'),
    $minutes = $('.clock-wrapper .clock .minutes'),
    $seconds = $('.clock-wrapper .clock .seconds'),
    $reset = $('.controls .reset'),
    $play = $('.controls .play'),
    seconds = 60,
    minutes = 25;

  function init() {
    $minutes.text(minutes);
    $seconds.text("00");
  }
  init();


  function changeTimer() {
    $seconds.text(seconds--);
  }

  function startTimer() {
    // disable other buttons
    $('.timer .btn').attr("disabled", true);
    //var clockID = setInterval(changeTimer, 1000);


  }

  function pauseTimer() {
    clearInterval();
  }

  function increaseTimer() {
    minutes++;
    $minutes.text(minutes);
    $seconds.text("00");
  }

  function decreaseTimer() {
    minutes--;
    $minutes.text(minutes);
    $seconds.text("00");
  }

  function resetTimer() {
    $('.timer .btn').attr("disabled", false);
    minutes = 25;
    $minutes.text(minutes);
    $seconds.text("00");

  }




  $play.click(startTimer);
  $reset.click(resetTimer);
  $up.click(increaseTimer);
  $down.click(decreaseTimer);




});