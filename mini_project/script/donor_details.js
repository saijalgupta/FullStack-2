var nameV,ageV,addressV, districtSelV,phoneV,diseaseV,bloodgV,emailV; 

function readFom() {
  
  nameV = document.getElementById("name").value;
  ageV = document.getElementById("age").value;
  addressV=document.getElementById("address").value;
  districtSelV = document.getElementById("districtSel").value;
  
  phoneV = document.getElementById("phone").value;
  diseaseV=document.getElementById("disease").value;
  bloodgV=document.getElementById("bloodg").value;
  emailV=document.getElementById("email").value;
  
 
  console.log( nameV, ageV,addressV, districtSelV,phoneV,diseaseV,bloodgV,emailV);
}

document.getElementById("read").onclick = function () {

    readFom();
  
    firebase
      .database()
      .ref("blooddonordetails/" + nameV)
      .on("value", function (snap) {
        document.getElementById("name").value = snap.val().name;
        document.getElementById("districtSel").value = snap.val().districtSel;
        document.getElementById("phone").value = snap.val().phone;
        document.getElementById("address").value = snap.val().address;
        document.getElementById("age").value = snap.val().age;
        document.getElementById("disease").value = snap.val().disease;
        document.getElementById("bloodg").value = snap.val().bloodg;
        document.getElementById("email").value = snap.val().email;
        console.log( nameV, ageV,addressV, districtSelV,phoneV,diseaseV,bloodgV,emailV);
         });
  };
  
  
  function signOut() {
      firebase.auth().signOut().then(function() {
         window.location.href ="donorlogin.html";
      }).catch(function(error) {
          alert("An error happened");
      });
    }


document.getElementById("update").onclick = function () {
    readFom();
  
    firebase
      .database()
      .ref("blooddonordetails/" + nameV)
      .update({
        name: nameV,
        age: ageV,
        address:addressV,
        districtSel:districtSelV,
        phone:phoneV,
        disease:diseaseV,
        bloodg:bloodgV,
        email:emailV,
      });
    alert("Data Updated");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("address1").value = "";
  document.getElementById("districtSel").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("disease").value = "";
  document.getElementById("bloodg").value = "";
  };