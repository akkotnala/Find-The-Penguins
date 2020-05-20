var highscore;

function shuffle() {
  var di = document.getElementById('gameholder');
  for (var i = di.children.length; i >= 0; i--) {
    di.appendChild(di.children[Math.random() * i | 0]);
  }
}
sessionStorage.getItem("highscore");

if (highscore == null) {
  highscore = 0;
}

function updatescore() {
  document.getElementById("score").innerHTML = score;
}

$(function () {
  let score = 0;

  var Item9 = $('#penguin9');
  var Item1 = $('#penguin1');
  var Item2 = $('#penguin2');
  var Item3 = $('#penguin3');
  var Item4 = $('#penguin4');
  var Item5 = $('#penguin5');
  var Item6 = $('#penguin6');
  var Item7 = $('#penguin7');
  var Item8 = $('#penguin8');
  var Item10 = $('#penguin10');
  var Item11 = $('#yeti');
  var Item12 = $('#yeti1');


  Item11.on('click', function () {
    $(this).removeClass('yeti');
    $(this).addClass('yetiVisited');
    var yett = new Audio('media/yeti.wav');
    yett.play();

    if (score > highscore) {
      highscore = score;

      sessionStorage.setItem("highscore", highscore);

    }

  });

  Item12.on('click', function () {
    $(this).removeClass('yeti');
    $(this).addClass('yetiVisited');
    var yett = new Audio('media/yeti.wav');
    yett.play();

    if (score > highscore) {
      highscore = score;
      sessionStorage.setItem("highscore", highscore);

    } else {
      tt = sessionStorage.getItem("highscore");
      highscore = tt;
    }

  });


  Item1.on('click', function () {
    score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin1").off('click');
    $(this).removeClass('penguin1');
    $(this).addClass('visited1');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();

  });

  Item2.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin2").off('click');
    $(this).removeClass('penguin2');
    $(this).addClass('visited2');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();

  });

  Item3.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin3").off('click');
    $(this).removeClass('penguin3');
    $(this).addClass('visited3');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

  Item4.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin4").off('click');
    $(this).removeClass('penguin4');
    $(this).addClass('visited4');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

  Item5.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin5").off('click');
    $(this).removeClass('penguin5');
    $(this).addClass('visited5');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

  Item6.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin6").off('click');
    $(this).removeClass('penguin6');
    $(this).addClass('visited6');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

  Item7.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin7").off('click');
    $(this).removeClass('penguin7');
    $(this).addClass('visited7');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

  Item8.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin8").off('click');
    $(this).removeClass('penguin8');
    $(this).addClass('visited8');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();

  });

  Item9.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin9").off('click');
    $(this).removeClass('penguin9');
    $(this).addClass('visited9');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

  Item10.on('click', function () {
    score++;
    document.getElementById("score").innerHTML = score;
    $("#penguin10").off('click');
    $(this).removeClass('penguin10');
    $(this).addClass('visited10');
    var pengu = new Audio('media/penguin.wav');
    pengu.play();
  });

});




function overlay() {
  el = document.getElementById("overlay");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

}

function ok() {
  window.location.reload()
  el = document.getElementById("overlay");
  el.style.visibility = (el.style.visibility == "hidden") ? "visible" : "hidden";
}

$(window).on('beforeunload', function () {

  if (highscore <= score) {
    highscore = score;
    sessionStorage.setItem("highscore", highscore);
  }

});

$(window).on('load', function () {
  shuffle();

  let high = sessionStorage.getItem("highscore");
  document.getElementById("highscore").innerHTML = high;

});
