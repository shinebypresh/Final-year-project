
var target = document.getElementById('btn');
target.addEventListener('click', function(){

  //// declariing variables of unit ID
  var unit1 = document.getElementById('unit1').value;
  var unit2 = document.getElementById('unit2').value;
  var unit3 = document.getElementById('unit3').value;
  var unit4 = document.getElementById('unit4').value;
  var unit5 = document.getElementById('unit5').value;
  var unit6 = document.getElementById('unit6').value;
  var unit7 = document.getElementById('unit7').value;
  var unit8 = document.getElementById('unit8').value;

    //// declariing variables of score ID

  var score1 = document.getElementById('score1').value;
  var score2 = document.getElementById('score2').value;
  var score3 = document.getElementById('score3').value;
  var score4 = document.getElementById('score4').value;
  var score5 = document.getElementById('score5').value;
  var score6 = document.getElementById('score6').value;
  var score7 = document.getElementById('score7').value;
  var score8 = document.getElementById('score8').value;


    //// converting variables  to numbers/float

  var units1 = Number(unit1);
  var units2 = Number(unit2);
  var units3 = Number(unit3);
  var units4 = Number(unit4);
  var units5 = Number(unit5);
  var units6 = Number(unit6);
  var units7 = Number(unit7);
  var units8 = Number(unit8);

  var scores1 = Number(score1);
  var scores2 = Number(score2);
  var scores3 = Number(score3);
  var scores4 = Number(score4);
  var scores5 = Number(score5);
  var scores6 = Number(score6);
  var scores7 = Number(score7);
  var scores8 = Number(score8);





  //scores 1
  if(scores1 <= 49 && scores1 >= 0)  { GPA = 0.00 * units1; P0 = GPA;}
 else if (scores1 >= 50 && scores1 <= 54) { GPA = 1.00 * units1; P0 = GPA;}
 else if (scores1 >= 55 && scores1 <= 59) { GPA = 1.67 * units1; P0 = GPA;}
 else if (scores1 >= 60 && scores1 <= 64) { GPA = 2.00 * units1; P0 = GPA;} 
 else if (scores1 >= 65 && scores1 <= 69) { GPA = 2.33 * units1; P0 = GPA;}
 else if (scores1 >= 70 && scores1 <= 74) { GPA = 2.67 * units1; P0 = GPA;}
 else if (scores1 >= 75 && scores1 <= 79) { GPA = 3.00 * units1; P0 = GPA;} 
 else if (scores1 >= 80 && scores1 <= 84) { GPA = 3.33 * units1; P0 = GPA;} 
 else if (scores1 >= 85 && scores1 <= 89) { GPA = 3.67 * units1; P0 = GPA;}
 else if (scores1 >= 90 && scores1 <= 100) { GPA = 4.00 * units1; P0 = GPA;}

 //scores 2
 if(scores2 <= 49 && scores2 >= 0) { GPA = 0.00 * units2; P1 = GPA;}
else if (scores2 >= 50 && scores2 <= 54) { GPA = 1.00 * units2; P1 = GPA;}
else if (scores2 >= 55 && scores2 <= 59) { GPA = 1.67 * units2; P1 = GPA;}
else if (scores2 >= 60 && scores2 <= 64) { GPA = 2.00 * units2; P1 = GPA;} 
else if (scores2 >= 65 && scores2 <= 69) { GPA = 2.33 * units2; P1 = GPA;}
else if (scores2 >= 70 && scores2 <= 74) { GPA = 2.67 * units2; P1 = GPA;}
else if (scores2 >= 75 && scores2 <= 79) { GPA = 3.00 * units2; P1 = GPA;} 
else if (scores2 >= 80 && scores2 <= 84) { GPA = 3.33 * units2; P1 = GPA;} 
else if (scores2 >= 85 && scores2 <= 89) { GPA = 3.67 * units2; P1 = GPA;}
else if (scores2 >= 90 && scores2 <= 100) { GPA = 4.00 * units2; P1 = GPA;}

//scores 3
if(scores3 <= 49 && scores3 >= 0) { GPA = 0.00 * units3; P2 = GPA;}
else if (scores3 >= 50 && scores3 <= 54) { GPA = 1.00 * units3; P2 = GPA;}
else if (scores3 >= 55 && scores3 <= 59) { GPA = 1.67 * units3; P2 = GPA;}
else if (scores3 >= 60 && scores3 <= 64) { GPA = 2.00 * units3; P2 = GPA;} 
else if (scores3 >= 65 && scores3 <= 69) { GPA = 2.33 * units3; P2 = GPA;}
else if (scores3 >= 70 && scores3 <= 74) { GPA = 2.67 * units3; P2 = GPA;}
else if (scores3 >= 75 && scores3 <= 79) { GPA = 3.00 * units3; P2 = GPA;} 
else if (scores3 >= 80 && scores3 <= 84) { GPA = 3.33 * units3; P2 = GPA;} 
else if (scores3 >= 85 && scores3 <= 89) { GPA = 3.67 * units3; P2 = GPA;}
else if (scores3 >= 90 && scores3 <= 100) { GPA = 4.00 * units3; P2 = GPA;}

//score 4
if(scores4 <= 49 && scores4 >= 0) { GPA = 0.00 * units4; P3 = GPA;}
else if (scores4 >= 50 && scores4 <= 54) { GPA = 1.00 * units4; P3 = GPA;}
else if (scores4 >= 55 && scores4 <= 59) { GPA = 1.67 * units4; P3 = GPA;}
else if (scores4 >= 60 && scores4 <= 64) { GPA = 2.00 * units4; P3 = GPA;} 
else if (scores4 >= 65 && scores4 <= 69) { GPA = 2.33 * units4; P3 = GPA;}
else if (scores4 >= 70 && scores4 <= 74) { GPA = 2.67 * units4; P3 = GPA;}
else if (scores4 >= 75 && scores4 <= 79) { GPA = 3.00 * units4; P3 = GPA;} 
else if (scores4 >= 80 && scores4 <= 84) { GPA = 3.33 * units4; P3 = GPA;} 
else if (scores4 >= 85 && scores4 <= 89) { GPA = 3.67 * units4; P3 = GPA;}
else if (scores4 >= 90 && scores4 <= 100) { GPA = 4.00 * units4; P3 = GPA;}

//score 5
if(scores5 <= 49 && scores5 >= 0) { GPA = 0.00 * units5; P4 = GPA;}
else if (scores5 >= 50 && scores5 <= 54) { GPA = 1.00 * units5; P4 = GPA;}
else if (scores5 >= 55 && scores5 <= 59) { GPA = 1.67 * units5; P4 = GPA;}
else if (scores5 >= 60 && scores5 <= 64) { GPA = 2.00 * units5; P4 = GPA;} 
else if (scores5 >= 65 && scores5 <= 69) { GPA = 2.33 * units5; P4 = GPA;}
else if (scores5 >= 70 && scores5 <= 74) { GPA = 2.67 * units5; P4 = GPA;}
else if (scores5 >= 75 && scores5 <= 79) { GPA = 3.00 * units5; P4 = GPA;} 
else if (scores5 >= 80 && scores5 <= 84) { GPA = 3.33 * units5; P4 = GPA;} 
else if (scores5 >= 85 && scores5 <= 89) { GPA = 3.67 * units5; P4 = GPA;}
else if (scores5 >= 90 && scores5 <= 100) { GPA = 4.00 * units5; P4 = GPA;}

//score 6
if(scores6 <= 49 && scores6 >= 0) { GPA = 0.00 * units6; P5 = GPA;}
else if (scores6 >= 50 && scores6 <= 54) { GPA = 1.00 * units6; P5 = GPA;}
else if (scores6 >= 55 && scores6 <= 59) { GPA = 1.67 * units6; P5 = GPA;}
else if (scores6 >= 60 && scores6 <= 64) { GPA = 2.00 * units6; P5 = GPA;} 
else if (scores6 >= 65 && scores6 <= 69) { GPA = 2.33 * units6; P5 = GPA;}
else if (scores6 >= 70 && scores6 <= 74) { GPA = 2.67 * units6; P5 = GPA;}
else if (scores6 >= 75 && scores6 <= 79) { GPA = 3.00 * units6; P5 = GPA;} 
else if (scores6 >= 80 && scores6 <= 84) { GPA = 3.33 * units6; P5 = GPA;} 
else if (scores6 >= 85 && scores6 <= 89) { GPA = 3.67 * units6; P5 = GPA;}
else if (scores6 >= 90 && scores6 <= 100) { GPA = 4.00 * units6; P5 = GPA;}

//score 7
if(scores7 <= 49 && scores7 >= 0) { GPA = 0.00 * units7; P6 = GPA;}
else if (scores7 >= 50 && scores7 <= 54) { GPA = 1.00 * units7; P6 = GPA;}
else if (scores7 >= 55 && scores7 <= 59) { GPA = 1.67 * units7; P6 = GPA;}
else if (scores7 >= 60 && scores7 <= 64) { GPA = 2.00 * units7; P6 = GPA;} 
else if (scores7 >= 65 && scores7 <= 69) { GPA = 2.33 * units7; P6 = GPA;}
else if (scores7 >= 70 && scores7 <= 74) { GPA = 2.67 * units7; P6 = GPA;}
else if (scores7 >= 75 && scores7 <= 79) { GPA = 3.00 * units7; P6 = GPA;} 
else if (scores7 >= 80 && scores7 <= 84) { GPA = 3.33 * units7; P6 = GPA;} 
else if (scores7 >= 85 && scores7 <= 89) { GPA = 3.67 * units7; P6 = GPA;}
else if (scores7 >= 90 && scores7 <= 100) { GPA = 4.00 * units7; P6 = GPA;}

//socre 8
if(scores8 <= 49 && scores8 >= 0) { GPA = 0.00 * units8; P7 = GPA;}
else if (scores8 >= 50 && scores8 <= 54) { GPA = 1.00 * units8; P7 = GPA;}
else if (scores8 >= 55 && scores8 <= 59) { GPA = 1.67 * units8; P7 = GPA;}
else if (scores8 >= 60 && scores8 <= 64) { GPA = 2.00 * units8; P7 = GPA;} 
else if (scores8 >= 65 && scores8 <= 69) { GPA = 2.33 * units8; P7 = GPA;}
else if (scores8 >= 70 && scores8 <= 74) { GPA = 2.67 * units8; P7 = GPA;}
else if (scores8 >= 75 && scores8 <= 79) { GPA = 3.00 * units8; P7 = GPA;} 
else if (scores8 >= 80 && scores8 <= 84) { GPA = 3.33 * units8; P7 = GPA;} 
else if (scores8 >= 85 && scores8 <= 89) { GPA = 3.67 * units8; P7 = GPA;}
else if (scores8 >= 90 && scores8 <= 100) { GPA = 4.00 * units8; P7 = GPA;}
  

var total_unit = units1 + units2 + units3 + units4 + units5 + units6 + units7 + units8;
var total_points = P0 + P1 + P2 + P3 + P4 + P5 + P6 + P7;
var total = total_points / total_unit;

  document.getElementById('text').innerHTML = (total.toPrecision(3)); 
  //document.getElementById('text2').innerHTML = ; 

  
})
 