var arrCourses = [];


//Course constructor.
function Course(str, isVeggie, url) {
    this.str = str;
    this.isVeggie = isVeggie;
    this.url = url;
}
//Adderar objectet Course till courseArr.
function addCourse(course) {
    arrCourses.push(course);
}
//Courses objects som pushas till courseArr.
var kolbulle = new Course("Grillad kolbulle med lingonsylt.", false, "http://www.koket.se/sommar-med-ernst/ernst-kirchsteiger/kolbulle-pa-ernsts-vis/");
var springroll = new Course("Vårrulle med sötsursås.", true, "http://www.ica.se/recept/farska-varrullar-med-grillad-tofu-och-ingefarsdipp-720099/");
var haloumi = new Course("Haloumisallad", true, "http://mittkok.expressen.se/recept/halloumisallad/");
var hamburger = new Course("Hamburgare med pommes.");
var chicken = new Course("Grillad kyckling med rotfrukter.");
var sushi = new Course("Sushi med soya.");
var steak = new Course("Grillad Entrecote med kryddsmör.");

addCourse(kolbulle);
addCourse(springroll);
addCourse(haloumi);
//Button to generate.
var button = document.getElementById('button');

button.addEventListener("click", generateRandomCourse);





//Function for button to gererate a course-log.
function generateRandomCourse() {
  var checkBoxValue = document.getElementById('checkbox').checked;
  var p = document.getElementById('courseP');
  if (checkBoxValue === false) {
    var i = Math.floor(Math.random() * arrCourses.length);

    p.innerHTML = arrCourses[i].str;
  }
  else if(checkBoxValue === true){

    for(var j = Math.floor(Math.random() * arrCourses.length);j<arrCourses.length;j++){
            if(arrCourses[j].isVeggie){
              p.innerHTML = arrCourses[j].str;
            }
            break;
    /*
var loop = true;
    while(loop){
      var j = Math.floor(Math.random() * arrCourses.length);
      if(arrCourses[j].isVeggie){
        p.innerHTML = arrCourses[j].str;
      }
      loop=false;*/


    }

/*

        }*/






  }
}


    //"Regular alternative"

    //Veggie alternative.
    /*
else if(checkBoxValue) {
      console.log("hej");*/


      /*

      var j = Math.floor(Math.random() * arrCourses.length);
      var loop = true;
      for(j in arrCourses){
        if(arrCourses[j].veggieTrue===true){
          var k = document.getElementById('courseP');
          k.innerHTML = arrCourses[j].str;

        }
      */




//Function that creates element for food course.
/*
function createElement() {
    var i = Math.floor(Math.random() * arrCourses.length);
    var p = document.getElementById('courseP');
    p.innerHTML = arrCourses[i].str;
}*/
