var nameV,ageV,addressV, districtSelV,phoneV,diseaseV,bloodgV,emailV; 

function readFom() {
  nameV = document.getElementById("name").value;
  ageV = document.getElementById("age").value;
  addressV=document.getElementById("address1").value;
  districtSelV = document.getElementById("districtSel").value;
  
  phoneV = document.getElementById("phone").value;
  diseaseV=document.getElementById("disease").value;
  bloodgV=document.getElementById("bloodg").value;
  emailV=document.getElementById("email").value;
 
  console.log( nameV, ageV,addressV, districtSelV,phoneV,diseaseV,bloodgV);
}

function insert() {
  readFom();
  
  firebase
    .database()
    .ref("blooddonordetails/" + nameV)
    .set({
      name: nameV,
      age: ageV,
      address:addressV,
      districtSel:districtSelV,
      phone:phoneV,
      disease:diseaseV,
      bloodg:bloodgV,
      email:emailV,
    });
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address1").value = "";
  document.getElementById("districtSel").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("disease").value = "";
  document.getElementById("bloodg").value = "";
  document.getElementById("email").value = "";
 

};



// function signup(){
//   alert("Successfully Registered");
//   var email = $("#email").val();
//   var password = $("#password").val();
//   console.log(email,password)
//   firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
//   // window.location.href = "Sign-in.html";
//   }).catch(function (error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage);
//   });
// }
// function signup(){
//   alert("Successfully Registered");
//   var email = $("#email").val();
//   var password = $("#password").val();
//   console.log(email,password)
//   firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
//   window.location.href = "Sign-in.html";
//   }).catch(function (error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage);
//   });
// }
function signup(){
  alert("Successfully Registered");
  var email = $("#email").val();
  var password = $("#password").val();
  console.log(email,password)
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
  window.location.href = "donorlogin.html";
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function isNumber(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

   return true;
}

