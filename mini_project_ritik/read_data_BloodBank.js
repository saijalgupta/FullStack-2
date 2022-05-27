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
  console.log( nameV, addressV,ApositiveV,AnegativeV,BpositiveV,BnegativeV,ABpositiveV,ABnegativeV,OpositiveV,OnegativeV);
}

document.getElementById("read").onclick = function () {

    readFom();
  
    firebase
      .database()
      .ref("bloodbankdetails/" + nameV)
      .on("value", function(snap) {
        document.getElementById("name").value = snap.val().name;
        document.getElementById("address").value = snap.val().address;
        document.getElementById("phone").value = snap.val().mobilenumber;
        document.getElementById("opositive").value = snap.val().Opositive;
        document.getElementById("onegative").value = snap.val().Onegative;
        document.getElementById("abnegative").value = snap.val().ABnegative;
        document.getElementById("abpositive").value = snap.val().ABpositive;
        document.getElementById("bpositive").value = snap.val().Bpositive;
        document.getElementById("bnegative").value = snap.val().Bnegative;
        document.getElementById("apositive").value = snap.val().Apositive;
        document.getElementById("anegative").value = snap.val().Anegative;

        console.log(nameV,phoneV);
         });
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