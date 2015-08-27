$(document).ready(function () {
  var $up = $('.plus'),
    $down = $('.minus'),
    $minutes = $('.clock-wrapper .clock .minutes'),
    $seconds = $('.clock-wrapper .clock .seconds'),
    $reset = $('.controls .reset'),
    $play = $('.controls .play'),
    $pause = $('.controls .pause'),
    seconds = 60,
    minutes = 25,
    $checks = $('.tasks .glyphicon'),
    clockID;

  function init() {
    $minutes.text(minutes);
    $seconds.text("00");
  }
  init();

  function completed() {
    $(this).toggleClass('glyphicon-remove');
    $(this).toggleClass('glyphicon-ok');

  }

  function changeTimer() {
    seconds--;
    $seconds.text(seconds);
    if (minutes === 0 && seconds <= 0) {
      // or run break when ready.
      alert("BREAK TIME")
      resetTimer();
    } else if (seconds <= 0 && minutes > 0) {
      seconds = 60;
      minutes--;
      $minutes.text(minutes);
    }
  }

  function startTimer() {
    // disable other buttons
    $('.timer .btn').attr("disabled", true);
    $minutes.text(minutes - 1);
    changeTimer();
    clockID = setInterval(changeTimer, 1000);


  }

  function pauseTimer() {
    $('.timer .btn').attr("disabled", false);
    clearInterval(clockID);
  }

  function increaseTimer() {
    minutes++;
    seconds = 60;
    $minutes.text(minutes);
    $seconds.text("00");
  }

  function decreaseTimer() {
    minutes--;
    seconds = 60;
    $minutes.text(minutes);
    $seconds.text("00");
  }

  function resetTimer() {
    clearInterval(clockID);
    $('.timer .btn').attr("disabled", false);
    minutes = 25;
    seconds = 60;
    $minutes.text(minutes);
    $seconds.text("00");

  }




  $play.click(startTimer);
  $pause.click(pauseTimer);
  $reset.click(resetTimer);
  $up.click(increaseTimer);
  $down.click(decreaseTimer);
  $checks.click(completed);




});