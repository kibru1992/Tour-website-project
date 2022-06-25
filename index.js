//this is booking
function validate(){
var place=document.getElementById("place1");
var count=document.getElementById("count");
var date1=document.getElementById("date1");
var date2=document.getElementById("date2");
var error=document.getElementById("error");
const ddate1 = new Date(date1.value);
const ddate2= new Date(date2.value);

var daate1 =ddate1.getTime();
var daate2 = ddate2.getTime();


 if ((place.value==""||count.value=="")){
  error.innerHTML="Please Insert the required information properly!!";
  error.style.fontSize="20px";
  error.style.padding="10px";
  error.style.color="red";
   alert("no blank allowed");

   return false;
 }
 
else if((daate1>daate2)){
 
  error.innerHTML="Please Insert the required information properly!!";
  error.style.fontSize="20px";
  error.style.fontFamily="comic-sans"
  error.style.padding="10px";
  error.style.color="red";

  alert("Check the Dates")
  return false;
}

else{
 error.innerHTML="";
true;
 }
    
}



// this is login javacript
function login(){
  var email="ourgroup@gmail.com";
  var password="12345678";
  var j=document.getElementById("email");
  var d=document.getElementById("pass")
  var error=document.getElementById("pp");
  if((j.value=='')&&(d.value=='')){
    error.innerHTML="please fill all the fields ";
     return false;

  }
  else if(d.value!=password){
    error.innerHTML="check password and try again";
    return false;
  }
  else{
    error.innerHTML="";
    return true;
  }

}
//this is contact form js
function contact(){
  var na=document.getElementById("nan");
  var em=document.getElementById("em");
  var sub=document.getElementById("sub");
  var mes=document.getElementById("mes");
  var conerr=document.getElementById("conerr");
  if((na.value=='')&&(em.value=='')&&(sub.value=='')&&(mes.value=='')){
    conerr.innerHTML="Please fill all the necessary information";
    return false;
  }
  else{
    return true;
  }
}