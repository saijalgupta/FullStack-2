
var nameV,phoneV; 

function readFom() {
  
  nameV = document.getElementById("name").value;
  console.log(nameV, phoneV);
}

document.getElementById("read1").onclick = function(){

    readFom();
  
    firebase
      .database()
      .ref("blooddonordetails/" + nameV)
      .on("value", function(snap) {
        document.getElementById("phone").value = snap.val().phone;
        console.log(nameV,phoneV);
         });
  };
  
  
  function signOut() {
      firebase.auth().signOut().then(function() {
         window.location.href ="donorlogin.html";
      }).catch(function(error) {
          alert("An error happened");
      });
    }