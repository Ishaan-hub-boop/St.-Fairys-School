
var firebaseConfig = {
      apiKey: "AIzaSyDCLtNJhnV7ZK_z_Xhjw2fASkZ_w7DUF9E",
      authDomain: "kwiter-315b6.firebaseapp.com",
      databaseURL: "https://kwiter-315b6-default-rtdb.firebaseio.com",
      projectId: "kwiter-315b6",
      storageBucket: "kwiter-315b6.appspot.com",
      messagingSenderId: "193811477370",
      appId: "1:193811477370:web:eabe499ca1c51f5c8c1cc3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "!";  

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding_room_name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html"

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();
