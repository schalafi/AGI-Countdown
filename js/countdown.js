// Set the date you want to countdown to
var future = new Date("Dec 31, 2029 23:59:59").getTime();

// Get references to the clock hands
var hourHand = document.getElementById("hour-hand");
var minuteHand = document.getElementById("minute-hand");
var secondHand = document.getElementById("second-hand");


function updateTimer() {
    // Get the current time
    var now = new Date();

    // Calculate the distance between now and the countdown date
    var distance = future - now;
    //console.log("distance: " + distance);
    // Calculate the years, months, days, hours, minutes, and seconds remaining
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Updaate hand clock 
    // Rotate the hour hand
    var hourRotation = 30 * hours + 0.5 * minutes;
    hourHand.setAttribute("transform", "rotate(" + hourRotation + ",50,50)");

    // Rotate the minute hand
    var minuteRotation = 6 * minutes;
    minuteHand.setAttribute("transform", "rotate(" + minuteRotation + ",50,50)");

    // Rotate the second hand
    //var seconds = now.getSeconds();
    console.log("seconds:"+ 6*seconds)
    var secondRotation =(60*6-6*seconds);
    secondHand.setAttribute("transform", "rotate(" + secondRotation + ",50,50)");


    //Update digital clock 
    document.getElementById("timer")
      .innerHTML =
        '<div class="container" >' + years   + '<span>years</span>  </div>' +
        '<div class="container" >' + months  + '<span>months</span> </div>' +
        '<div class="container" >' + days    + '<span>days</span>   </div>' +
        '<div class="container" >' + hours   + '<span>hours</span>   </div>' +
        '<div class="container">' + minutes  + '<span>minutes</span> </div>' +
        '<div class="container">' + seconds  + '<span>seconds</span> </div>' ;
    
  }

setInterval('updateTimer()', 1000 );
  