var firebaseConfig = {
  apiKey: "AIzaSyAmmUiKRehI7e7X01Gcrymq0k4fpcobC5g",
  authDomain: "letschat-2-dbec3.firebaseapp.com",
  databaseURL: "https://letschat-2-dbec3-default-rtdb.firebaseio.com",
  projectId: "letschat-2-dbec3",
  storageBucket: "letschat-2-dbec3.appspot.com",
  messagingSenderId: "364330018901",
  appId: "1:364330018901:web:b0973fe68d49b858cd4cdc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username=localStorage.getItem("user_name");
console.log(username);
document.getElementById("user_name").innerHTML="Welcome "+username+" !";
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"addRomeName"
  });
  localStorage.setItem("room_name",room_name);
  window.location="chat.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names=childKey;
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
});});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  window.location="chat.html";
}