// var rollV, nameV, genderV, addressV;

// function readFom() {
//   rollV = document.getElementById("roll").value;
//   nameV = document.getElementById("name").value;
//   genderV = document.getElementById("gender").value;
//   addressV = document.getElementById("address").value;
//   console.log(rollV, nameV, addressV, genderV);
// }

// document.getElementById("insert").onclick = function () {
//   readFom();

//   firebase
//     .database()
//     .ref("student/" + rollV)
//     .set({
//       rollNo: rollV,
//       name: nameV,
//       gender: genderV,
//       address: addressV,
//     });
//   alert("Data Inserted");
//   document.getElementById("roll").value = "";
//   document.getElementById("name").value = "";
//   document.getElementById("gender").value = "";
//   document.getElementById("address").value = "";
// };

var emailV, nameV, passwordV, mobilenumberV,addressV,districtV,ApositiveV,AnegativeV,BpositiveV,BnegativeV,ABpositiveV,ABnegativeV,OpositiveV,OnegativeV;

function readFom() {
  nameV = document.getElementById("name").value;
  addressV = document.getElementById("address").value;
  districtV = document.getElementById("districtSel").value;
  ApositiveV = document.getElementById("apositive").value;
  AnegativeV = document.getElementById("anegative").value;
  BpositiveV = document.getElementById("bpositive").value;
  BnegativeV = document.getElementById("bnegative").value;
  ABpositiveV = document.getElementById("abpositive").value;
  ABnegativeV = document.getElementById("abnegative").value;
  OpositiveV = document.getElementById("opositive").value;
  OnegativeV = document.getElementById("onegative").value;
  mobilenumberV = document.getElementById("mobilenumber").value;
  console.log(emailV, passwordV, nameV, addressV,districtV,ApositiveV,AnegativeV,BpositiveV,BnegativeV,ABpositiveV,ABnegativeV,OpositiveV,OnegativeV);
}

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("bloodbankdetails/" + nameV)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().name;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("districtSel").value = snap.val().district;
      document.getElementById("mobilenumber").value = snap.val().mobilenumber;
      document.getElementById("apositive").value = snap.val().Apositive;
      document.getElementById("anegative").value = snap.val().Anegative;
      document.getElementById("bpositive").value = snap.val().Bpositive;
      document.getElementById("bnegative").value = snap.val().Bnegative;
      document.getElementById("abpositive").value = snap.val().ABpositive;
      document.getElementById("abnegative").value = snap.val().ABnegative;
      document.getElementById("opositive").value = snap.val().Opositive;
      document.getElementById("onegative").value = snap.val().Onegative;

    });
};


function signOut() {
    firebase.auth().signOut().then(function() {
       window.location.href = "signin.html";
    }).catch(function(error) {
        alert("An error happened");
    });
  }
  

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("bloodbankdetails/" + nameV)
    .update({
      name: nameV,
      address: addressV,
      mobilenumber:mobilenumberV,
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
  alert("Data Updated");
  document.getElementById("address").value = "";
  document.getElementById("mobilenumber").value = "";
  document.getElementById("districtSel").value = "";
  document.getElementById("apositive").value = "";
  document.getElementById("anegative").value = "";
  document.getElementById("bpositive").value = "";
  document.getElementById("bnegative").value = "";
  document.getElementById("abpositive").value = "";
  document.getElementById("abnegative").value = "";
  document.getElementById("opositive").value = "";
  document.getElementById("onegative").value = "";
};


document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};