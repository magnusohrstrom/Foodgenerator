var arrCourses = [];


//Course constructor.
function Course(str, veggieTrue, url){
  this.str = str;
  this.veggie=veggieTrue;
  this.url = url;
}
//Adderar objectet Course till courseArr.
function addCourse(course){
  arrCourses.push(course);
}
//Courses objects som pushas till courseArr.
var kolbulle = new Course("Grillad kolbulle med lingonsylt.", false,"http://www.koket.se/sommar-med-ernst/ernst-kirchsteiger/kolbulle-pa-ernsts-vis/" );
var springroll = new Course("Vårrulle med sötsursås.", true,"http://www.ica.se/recept/farska-varrullar-med-grillad-tofu-och-ingefarsdipp-720099/");
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
function generateRandomCourse(){
  var temporaryP = document.getElementById("temporaryP");
  var checkBoxValue = document.getElementById('checkbox').checked;
  if(temporaryP === null){

    if(checkBoxValue===false)
      {
          removeElement();
          createElement();

      }
    else
      {
        /*
        while()
        for
        if(arrCourses[i].veggieTrue)  */
      }

  }
  else{
    if(checkBoxValue===false)
      {

        createElement();
      }
    else
      {
        /*
        while()
        for
        if(arrCourses[i].veggieTrue)  */
      }

  }
}
//Function that creates element for food course.
function createElement(){
  var i = Math.floor(Math.random()*arrCourses.length);
  var p = document.createElement('p');
  p.setAttribute('id',"temporaryP");
  var courseText = arrCourses[i].str;
  var courseTextNode = document.createTextNode(courseText);
  p.appendChild(courseTextNode);
  document.getElementById('mainDiv').appendChild(p);
}

//Function that removes current Foodcourse <p>.
function removeElement(){
  if()
  document.getElementById('temporaryP').parentNode.removeChild(this);
}


  /*

  }
  else{
    temporaryP.parentNode.removeChild(temporaryP);

  }

  temporaryP.parentNode.removeChild(temporaryP);



  */


  /*
  if



  if(arrCourses[index].veggie)
    {
      create
    }  */


    //var textNode=document.createTextNode(arrCourses[index]);
