var hero = "Superman";
var gender = "male";
var age = 29;
var weapon = "fist";
var pronoun =null; 

if (gender == "male"){
  pronoun = "his";
}
else if (gender == "female"){
  pronoun = "her";
}
else{
  pronoun = "their";
}

var output=null;
if (age<18){
  output ="is just beginning";
  return output;
}
else if(age >= 21 && age <=40){
    output="has seen a few battles";
    return output;
}
else if (age >40){
  output = "has lived through many epic battles";
  return output;
}

return hero + " is our lovable hero, who "+output+" with "+pronoun+" trusty "+weapon+".";

///////////////////////////////////////////////////////////////////////////////////
var count = null;
var animal = "dog";

function animalHouse(num1,num2) {
  count = num1+num2;
  console.log(count);
}
animalHouse(1,1);
if(count>2){
  console.log("we have too many "+animal+"s");
}
else{
  console.log("welcome to the club!")
}

///////////////////////////////////////////////////////////////////////////////////
var hero = "ironman";
function avengersAssemble(avenger){
  if (avenger == "ironman"){
    console.log("prepare your suit for battle");
  }
  else if (avenger == "captain america"){
    console.log("that shield better be polished because we're going on a mission");
  }
  else if(avenger == "black widow"){
    console.log("we're going now")
  }
  else{
    console.log("Sorry, you are not needed for this mission");
  }
}
avengersAssemble(hero);
///////////////////////////////////////////////////////////////////////////////////
var lights = true;
if (lights == true){
  console.log("And then there was light");
}
else if (lights ==false){
  console.log("Lights out");
}
///////////////////////////////////////////////////////////////////////////////////
var carType = "Toyota";
var color = "blue";
var num = 6;//try changing the num to 1

if (carType == "Toyota" && color == "blue"){
  if (num>1){
    console.log("we have "+num+" "+color+" "+carType+"s");
  }
  else if (num==1){
    console.log("we have "+num+" "+color+" "+carType);
  }
}
else if (carType == "Lamborghini" && color == "red"){
  if (num>1){
    console.log("we have "+num+" "+color+" "+carType+"s");
  }
  else if (num==1){
    console.log("we have "+num+" "+color+" "+carType);
  }
}
else if (carType == "Tesla" && color == "black"){
  if (num>1){
    console.log("we have "+num+" "+color+" "+carType+"s");
  }
  else if (num==1){
    console.log("we have "+num+" "+color+" "+carType);
  }
}
else{
  console.log("We don't have any "+color +" "+carType+"s in stock");
}