var nameV,typeV,districtV,addressV,BedsV,icuV,ventilatorV,oxygenV,ambulanceV,maleV,femaleV,mobilenumberV;
function readFom() {
  nameV = document.getElementById("name").value;
  districtV = document.getElementById("districtSel").value;
  addressV = document.getElementById("address").value;
  BedsV = document.getElementById("Beds").value;
  icuV = document.getElementById("icu").value;
  ventilatorV = document.getElementById("ventilator").value;
  oxygenV = document.getElementById("oxygen").value;
  ambulanceV = document.getElementById("ambulance").value;
  maleV = document.getElementById("male").value;
  emergencyV = document.getElementById("emergency").value;
  femaleV = document.getElementById("female").value;
  mobilenumberV = document.getElementById("number").value;
  console.log(nameV, addressV,districtV,BedsV,icuV,ventilatorV,oxygenV,ambulanceV,maleV,femaleV,mobilenumberV);
}


document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("Hospitalsdetails/" + nameV)
    .on("value", function (snap) {
      document.getElementById("name").value = snap.val().name;
      document.getElementById("districtSel").value = snap.val().district;
      document.getElementById("number").value = snap.val().mobilenumber;
      document.getElementById("address").value = snap.val().address;
      document.getElementById("Beds").value = snap.val().Beds;
      document.getElementById("emergency").value = snap.val().emergency;
      document.getElementById("icu").value = snap.val().icu;
      document.getElementById("ventilator").value = snap.val().ventilator;
      document.getElementById("oxygen").value = snap.val().oxygen;
      document.getElementById("ambulance").value = snap.val().ambulance;
      document.getElementById("male").value = snap.val().male;
      document.getElementById("female").value = snap.val().female;

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
      .ref("Hospitalsdetails/" + nameV)
      .update({
        name: nameV,
        address: addressV,
        emergency:emergencyV,
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
    alert("Data Updated");
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
  