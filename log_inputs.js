function log_hours_slept() {
  var number = document.getElementById("hours").value.toString();

  var hours_slept = document.getElementById("hours_slept");
  var log = document.createElement("p");
  if(number>=12){
    log.textContent="Make sure not to sleep too much!";
  }
  else if(number>=8){
    log.textContent="A good night of sleep!";
  }
  else if(number<8){
    log.textContent="Work on getting more sleep for tomorrow(!)";
  }


  hours_slept.appendChild(log);
}

function log_hours_studied() {
  var number = document.getElementById("study").value;

  var hours_slept = document.getElementById("hours_studied");
  var log = document.createElement("p");
  log.textContent = number + " hours, good job!";
  if(number>=4){
    log.textContent="Make sure not to overwork yourself!";
  }
  else if(number==1){
    log.textContent=number + " hour good job!"
  }
  hours_studied.appendChild(log);
}


function log_water_drank() {
  var water_drank = document.getElementById("water_drank");

  var number = parseInt(document.getElementById("water").value);
  var log = document.createElement("p");
  if (number>=8) {
     log.textContent="You have drank enough water today!";
   } else{
     var cups_left = 8 - number;
     log.textContent="You have " + cups_left + " cups left";
   }

   water_drank.appendChild(log);
 }


 function log_day_ranking() {
   var rank = document.querySelector('input[name = "ranking"]:checked').value;

   var ranking = document.getElementById("ranking");
   var log = document.createElement("p");

   if (rank=="goodday") {
     log.textContent = "Good!";
   }
   else if (rank=="greatday"){
     log.textContent="That's great.";
   }
   else if(rank=="okday"){
     log.textContent="That's okay, a neutral day can be good for recharging.";
   }
   else if(rank=="badday"){
     log.textContent="Aw, I'm sure better things will come tomorrow.";
   }
   else if(rank=="terribleday"){
     log.textContent="You can only go up from here tomorrow <3";
   }
   ranking.appendChild(log);
}

function log_exercise() {
    var did_you_exercise = document.getElementById("exercise").checked;

    var exercised = document.getElementById("exercised");
    var log = document.createElement("p");

    if (did_you_exercise == true) {
        log.textContent = "Good job!";
    }
    exercised.appendChild(log);
}
function log_bed() {
    var did_makebed = document.getElementById("bed").checked;

    var madebed = document.getElementById("madebed");
    var log = document.createElement("p");

    if (did_makebed == true) {
        log.textContent = "Cleanliness is key for an organized life!";
    }
    madebed.appendChild(log);
}

function log_dishes(){
  var did_washdishes= document.getElementById("dishes").checked;
  var washeddishes= document.getElementById("washeddishes");
  var log = document.createElement("p");
  if (did_washdishes==true){
    log.textContent="Self-Sufficiency is very exciting";
  }
  washeddishes.appendChild(log);
}

function log_books(){
  var did_readbook=document.getElementById("read").checked;
  var readtoday= document.getElementById("readtoday");
  if(did_readbook==true){
    var log = document.createElement("p");
    readtoday.appendChild(log);
    document.getElementById("whatbook").style.display = "block";
  }
}

function whatbooks() {
  console.log("boo");
  var book_comment = document.getElementById("book_comment");

  var book = document.getElementById("bookreading").value;
  var log = document.createElement("p");
  log.textContent= "Cool! Reading is good for you";

  book_comment.appendChild(log);
 }
