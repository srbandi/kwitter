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
    room_name = localStorage.getItem("roomname");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location = "index.html";
}

function sending(){

msg = document.getElementById("message").value;

firebase.database().ref(room_name).push({

      name : user_name,
      massage : msg,
      like : 0

})

}