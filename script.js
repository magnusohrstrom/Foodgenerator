var courseArr = [];


//Course constructor.
function Course(text, veggieTrue, url){
  this.text = text;
  this.veggie=veggieTrue;
  this.url = url;
}
//Adderar objectet Course till courseArr.
function addCourse(course){
  courseArr.push(course);
}
//Courses objects som pushas till courseArr.
var kolbulle = new Course("Grillad kolbulle med lingonsylt.", false,"http://www.koket.se/sommar-med-ernst/ernst-kirchsteiger/kolbulle-pa-ernsts-vis/" );
var springroll = new Course("Vårrulle med sötsursås.", true,"http://www.ica.se/recept/farska-varrullar-med-grillad-tofu-och-ingefarsdipp-720099/");
var haloumi = new Course("Haloumisallad", true, "http://mittkok.expressen.se/recept/halloumisallad/");
var hamburger = new Course("Hamburgare med pommes.");
var chicken = new Course("Grillad kyckling med rotfrukter.");
var sushi = new Course("Sushi med soya.");
var steak = new Course("Grillad Entrecote med kryddsmör.");
