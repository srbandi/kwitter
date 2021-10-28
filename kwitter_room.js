
const firebaseConfig = {
      apiKey: "AIzaSyBnnlsw_OwurtwkGyL7iowQA0Fot596mn4",
      authDomain: "new-kwitter-25164.firebaseapp.com",
      databaseURL: "https://new-kwitter-25164-default-rtdb.firebaseio.com",
      projectId: "new-kwitter-25164",
      storageBucket: "new-kwitter-25164.appspot.com",
      messagingSenderId: "1070159798183",
      appId: "1:1070159798183:web:0cce69743b281ab3282082"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("username");
      document.getElementById("username").innerHTML = "welcome "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = " <div class = 'room_name' id ="+Room_names+" onclick = 'redirect(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function add_room(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose:"adding room"});
      localStorage.setItem("roomname",room_name);
      window.location = "kwitter_page.html";

}

function redirect(room){

      localStorage.setItem("roomname",room);
      window.location = "kwitter_page.html";

}
 function logout(){
       localStorage.removeItem("roomname");
       localStorage.removeItem("username");
       window.location = "index.html";
 }