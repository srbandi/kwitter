
const firebaseConfig = {
      apiKey: "AIzaSyBI_WK7GGz_Gh1pFBvkFd4a9FRCVr5rrwQ",
      authDomain: "kwitter-33f73.firebaseapp.com",
      databaseURL: "https://kwitter-33f73-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-33f73",
      storageBucket: "kwitter-33f73.appspot.com",
      messagingSenderId: "258758984610",
      appId: "1:258758984610:web:16aabbe3b9ac3a91e2a8fb"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
