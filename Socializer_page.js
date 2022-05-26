var firebaseConfig = {
    apiKey: "AIzaSyDPAXnWjXyfoku3FWB5ch0liMIqyZvfC0k",
    authDomain: "kwitterapp-b2a0a.firebaseapp.com",
    databaseURL: "https://kwitterapp-b2a0a-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-b2a0a",
    storageBucket: "kwitterapp-b2a0a.appspot.com",
    messagingSenderId: "871126336623",
    appId: "1:871126336623:web:7086bdb579e8743e2b399a",
    measurementId: "G-CJG41B49PS"
}
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }


  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
  }