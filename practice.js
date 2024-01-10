const firebaseConfig = {
    apiKey: "AIzaSyDsYa2IFGUFDRajrwpZOw7Pch5vqHqAALE",
    authDomain: "kabootarforum-v1.firebaseapp.com",
    databaseURL: "https://kabootarforum-v1-default-rtdb.firebaseio.com",
    projectId: "kabootarforum-v1",
    storageBucket: "kabootarforum-v1.appspot.com",
    messagingSenderId: "742135288344",
    appId: "1:742135288344:web:0fdd0712b3e6ac86fe296d"
  };
  
  firebase.initializeApp(firebaseConfig);

function addUser() {
 var username = document.getElementById("username").value;
 firebase.database().ref("/").child(username).update({
    CreatingAccount:"Kabootar User"
 });
}