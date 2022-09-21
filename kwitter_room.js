
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCKUxubVswy_wu8OuTZUEndhm6tvmwKklk",
      authDomain: "kwiter-a633a.firebaseapp.com",
      databaseURL: "https://kwiter-a633a-default-rtdb.firebaseio.com",
      projectId: "kwiter-a633a",
      storageBucket: "kwiter-a633a.appspot.com",
      messagingSenderId: "810516948141",
      appId: "1:810516948141:web:e5cf941f6bdb7015c11224"
    };
    firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
   function addRoom()
   {
         room_name = dsocument.getElementById("room_name").value

         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });

         localStorage.setItem("room_name", rom_name);
         window.location = "kwitter_page.html";
   }
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclkick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}