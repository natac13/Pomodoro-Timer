$(document).ready(function () {
  var $up = $('.plus'),  // plus button
    $down = $('.minus'),  // minus button
    $minutes = $('.clock-wrapper .clock .minutes'),  // minutes themselves
    $seconds = $('.clock-wrapper .clock .seconds'),  // seconds themselves
    $reset = $('.controls .reset'),  // repeat button
    $play = $('.controls .play'),  // play button
    $pause = $('.controls .pause'),  // pause button
    seconds = 60,
    minutes = 25,
    $checks = $('.tasks .glyphicon'),  // the done list to the right
    breakbool = false,  // if paused the timer
    clockID;

  // displays the initial values for the timer
  function init() {
    $minutes.text(minutes);
    $seconds.text("00");
  }
  init();

  //  The list to check when completed a round of work
  function completed() {
    $(this).toggleClass('glyphicon-remove');
    $(this).toggleClass('glyphicon-ok');

  }

  // to format time to have leading zero
  function formatSeconds(secs) {
    return secs < 10 ? "0" + secs.toString() : secs.toString();
  }

  // main function that is called with setInterval().
  // Will change the timer value.
  function changeTimer() {
    seconds--;
    $seconds.text(formatSeconds(seconds));
    if (minutes === 0 && seconds <= 0) {
      // or run break when ready.
      alert("BREAK TIME");
      resetTimer();
    } else if (parseInt(seconds, 10) <= 0 && minutes > 0) {
      seconds = 60;
      minutes--;
      $minutes.text(minutes);
    }
  }

  // function that is called when the play button is hit
  // will call changeTimer
  function startTimer() {
    // disable other buttons and the play so cannot trigger more intervals
    $('.timer .btn').attr("disabled", true);
    $(this).attr("disabled", true);
    // if were on break need to offset the minus that will happen from restart
    if (breakbool) {
      minutes++;
      breakbool = false;
    }
    minutes--;
    $minutes.text(minutes); // this changes the minutes right away
    // called first so there is no visable delay in the start and when the timer
    // starts
    changeTimer();
    clockID = setInterval(changeTimer, 1000);


  }

  // Helper function to pause, repeat, increase and decrease
  function pauseTimer() {
    // enable button
    $('.timer .btn').attr("disabled", false);
    $play.attr("disabled", false);
    clearInterval(clockID);
    breakbool = true; // to add 1 to minutes in the startTimer function
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
    $play.attr("disabled", false);
    minutes = 25;
    seconds = 60;
    $minutes.text(minutes);
    $seconds.text("00");

  }

  // the event listener for all the buttons
  $play.click(startTimer);
  $pause.click(pauseTimer);
  $reset.click(resetTimer);
  $up.click(increaseTimer);
  $down.click(decreaseTimer);
  $checks.click(completed);

});