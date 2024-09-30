
var app = document.getElementById('btns');
app.addEventListener('click', function(){

  //// declariing variables of unit ID
  var sem1 = document.getElementById('sem1').value;
  var sem2 = document.getElementById('sem2').value;
  var sem3 = document.getElementById('sem3').value;
  var sem4 = document.getElementById('sem4').value;
  var sem5 = document.getElementById('sem5').value;
  var sem6 = document.getElementById('sem6').value;
  var sem7 = document.getElementById('sem7').value;
  var sem8 = document.getElementById('sem8').value;

    //// declariing variables of score ID

  var GPA1 = document.getElementById('GPA1').value;
  var GPA2 = document.getElementById('GPA2').value;
  var GPA3 = document.getElementById('GPA3').value;
  var GPA4 = document.getElementById('GPA4').value;
  var GPA5 = document.getElementById('GPA5').value;
  var GPA6 = document.getElementById('GPA6').value;
  var GPA7 = document.getElementById('GPA7').value;
  var GPA8 = document.getElementById('GPA8').value;


    //// converting variables  to numbers/float

  var sems1 = Number(sem1);
  var sems2 = Number(sem2);
  var sems3 = Number(sem3);
  var sems4 = Number(sem4);
  var sems5 = Number(sem5);
  var sems6 = Number(sem6);
  var sems7 = Number(sem7);
  var sems8 = Number(sem8);

  var GPAs1 = Number(GPA1);
  var GPAs2 = Number(GPA2);
  var GPAs3 = Number(GPA3);
  var GPAs4 = Number(GPA4);
  var GPAs5 = Number(GPA5);
  var GPAs6 = Number(GPA6);
  var GPAs7 = Number(GPA7);
  var GPAs8 = Number(GPA8);

  var sum_sems = sems1 + sems2 + sems3 + sems4 + sems5 + sems6 + sems7 + sems8;
  var sum_gpa = GPAs1 + GPAs2 + GPAs3 + GPAs4 + GPAs5 + GPAs6 + GPAs7 + GPAs8;

  var cgpa = sum_gpa / sum_sems;
  document.getElementById('textbox').innerHTML = (cgpa.toPrecision(3)); 
})