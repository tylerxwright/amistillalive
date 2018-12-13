var livingResults = [
  "You are still alive!",
  "You are among the living",
  "Your life is still existing",
  "You live",
  "Life is still within you",
  "Your lifeform exists",
  "Carpe diem, you live",
  "Still exist, you do",
  "This day, you are alive",
  "Congratulations, you are living",
  "Alive, you are",
  "The lifeform that is you, still exists",
  "Life is within you this day",
  "You are still in existence",
  "You are still animated",
  "You still exist",
  "Your being is still operative",
  "You persist",
  "Your lifeform is still viable",
  "You are still functioning",
  "You are still of this world",
  "Your journey continues",
  "You will see another day",
  "Your presence is known",
  "Your lifeform is still at capacity",
  "At this moment, you do not have an appointment with death",
  "You still matter",
  "The molecules that sustain you are still chemically working",
  "You still matter",
  "Hello, you are still here",
  "You are still here",
  "If you are reading this, you are still alive",
  "Your soul remains in this plane of existance",
  "You have not died",
  "You are not dead",
  "You live",
  "Life still exists within you",
  "This day is yours",
  "You did not quit today",
  "Your heart still beats",
  "If you are reading this, you are still alive"
]

function startSmart() {
  var maybeDeadTimeout = setTimeout(function() {
    document.getElementById("result").innerHTML = "You may have died";
  }, 3600000);

  var deadTimeout = setTimeout(function() {
    document.getElementById("result").innerHTML = "You have died";
  }, 86400000);
  
  var button = document.getElementById("analyze");
  button.addEventListener("click", function() {
    var messageIndex = Math.floor(Math.random() * livingResults.length);
    document.getElementById("result").innerHTML = livingResults[messageIndex];
  });
}