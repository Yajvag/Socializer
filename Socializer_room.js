
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDPAXnWjXyfoku3FWB5ch0liMIqyZvfC0k",
    authDomain: "kwitterapp-b2a0a.firebaseapp.com",
    databaseURL: "https://kwitterapp-b2a0a-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-b2a0a",
    storageBucket: "kwitterapp-b2a0a.appspot.com",
    messagingSenderId: "871126336623",
    appId: "1:871126336623:web:7086bdb579e8743e2b399a",
    measurementId: "G-CJG41B49PS"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "Socializer_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });
 });
}
getData();


function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "Socializer_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}