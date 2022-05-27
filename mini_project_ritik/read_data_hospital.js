var  nameV,  mobilenumberV,addressV,districtV,ApositiveV,AnegativeV,BpositiveV,BnegativeV,ABpositiveV,ABnegativeV,OpositiveV,OnegativeV;

function readFom() {
  nameV = document.getElementById("name").value;
  addressV = document.getElementById("address").value;
  
  ApositiveV = document.getElementById("apositive").value;
  AnegativeV = document.getElementById("anegative").value;
  BpositiveV = document.getElementById("bpositive").value;
  BnegativeV = document.getElementById("bnegative").value;
  ABpositiveV = document.getElementById("abpositive").value;
  ABnegativeV = document.getElementById("abnegative").value;
  OpositiveV = document.getElementById("opositive").value;
  OnegativeV = document.getElementById("onegative").value;
  mobilenumberV = document.getElementById("phone").value;
  console.log( nameV, addressV,districtV,ApositiveV,AnegativeV,BpositiveV,BnegativeV,ABpositiveV,ABnegativeV,OpositiveV,OnegativeV);
}

function insert() {
  readFom();
  
  firebase
    .database()
    .ref("bloodbankdetails/" + nameV)
    .set({
      name: nameV,
      address: addressV,
      phone:mobilenumberV,
      district:districtV,
      Apositive:ApositiveV,
      Anegative:AnegativeV,
      Bpositive:BpositiveV,
      Bnegative:BnegativeV,
      ABpositive:ABpositiveV,
      ABnegative:ABnegativeV,
      Opositive:OpositiveV,
      Onegative:OnegativeV,
    });
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";

  document.getElementById("apositive").value = "";
  document.getElementById("anegative").value = "";
  document.getElementById("bpositive").value = "";
  document.getElementById("bnegative").value = "";
  document.getElementById("abpositive").value = "";
  document.getElementById("abnegative").value = "";
  document.getElementById("opositive").value = "";
  document.getElementById("onegative").value = "";

};

function signup(){
  alert("Successfully Registered");
  var email = $("#email").val();
  var password = $("#password").val();
  console.log(email,password)
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
  });
}