var emailV,passwordV,nameV,typeV,districtV,addressV,emergencyV,BedsV,icuV,ventilatorV,oxygenV,ambulanceV,maleV,femaleV,mobilenumberV
function readFom() {
  emailV = document.getElementById("email").value;
  passwordV = document.getElementById("password").value;
  nameV = document.getElementById("name").value;
  typeV = document.getElementById("type").value;
  districtV = document.getElementById("districtSel").value;
  addressV = document.getElementById("address").value;
  emergencyV = document.getElementById("emergency").value;
  BedsV = document.getElementById("Beds").value;
  icuV = document.getElementById("icu").value;
  ventilatorV = document.getElementById("ventilator").value;
  oxygenV = document.getElementById("oxygen").value;
  ambulanceV = document.getElementById("ambulance").value;
  maleV = document.getElementById("male").value;
  femaleV = document.getElementById("female").value;
  mobilenumberV = document.getElementById("number").value;
  console.log( emailV,passwordV, nameV, typeV, addressV,districtV,BedsV,icuV,ventilatorV,oxygenV,ambulanceV,maleV,femaleV,mobilenumberV);
}

function insert() {
  readFom();
  
  firebase
    .database()
    .ref("Hospitalsdetails/" + nameV)
    .set({
      email:emailV,
      password:passwordV,
      type:typeV,
      name: nameV,
      address: addressV,
      emergency:emergencyV,
      mobilenumber:mobilenumberV,
      district:districtV,
      Beds:BedsV,
      icu:icuV,
      ventilator:ventilatorV,
      oxygen:oxygenV,
      ambulance:ambulanceV,
      male:maleV,
      female:femaleV,
      mobilenumber:mobilenumberV,
    });
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("type").value = "";
  document.getElementById("mobilenumber").value = "";
  document.getElementById("districtSel").value = "";
  document.getElementById("Beds").value = "";
  document.getElementById("icu").value = "";
  document.getElementById("ventilator").value = "";
  document.getElementById("oxygen").value = "";
  document.getElementById("ambulance").value = "";
  document.getElementById("male").value = "";
  document.getElementById("female").value = "";

};

 function signup(){
  alert("Successfully Registered");
  var email = $("#email").val();
  var password = $("#password").val();
  console.log(email,password)
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
  window.location.href = "hospitalsignin.html";
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

