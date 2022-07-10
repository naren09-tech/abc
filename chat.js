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


var room_name=localStorage.getItem("room_name");
var user_name=localStorage.getItem("user_name");
function leaveroom(){
    localStorage.removeItem("room_name");
    window.navigate("home.html");
}
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("username"); 
    window.navigate("index.html");
}
function send(){
    var msg=document.getElementById("msg").value;
    if(msg!=""){
        firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
        });
        document.getElementById("msg").innerHTML="";

    }
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    name=message_data["name"];
    message=message_data["message"];
    name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
    row=name_with_tag+message_with_tag;
    document.getElementById("output").innerHTML+=row;
} });  }); }
getData();