
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBCDM2l6YWeiMnWlRM65EALElYH6IW2NYg",
    authDomain: "corona-testing-6a567.firebaseapp.com",
    databaseURL: "https://corona-testing-6a567-default-rtdb.firebaseio.com",
    projectId: "corona-testing-6a567",
    storageBucket: "corona-testing-6a567.appspot.com",
    messagingSenderId: "207013281874",
    appId: "1:207013281874:web:460104b591841b848cdf8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById("test").addEventListener("submit",submitForm)

  function submitForm(e){
    e.preventDefault();
    var name=document.getElementById("name").value;
   
    var profession=document.getElementById("profession").value;
    var date=document.getElementById("date").value;
    var state=document.getElementById("state").value;
    console.log(state);
    saveMessages(name,profession,date,state);
    readState(state);
}
function saveMessages( name,profession,date,state ){
  var newuserInputsRef = UserInputsRef.push();
  newuserInputsRef.set({
   name:name,date:date,profession:profession,state:state,  
  })
  alert("Thank you, find the list of centers nearby!  ");
}
function readState(state){
  var centers;
  var ref = firebase.database().ref(state);
  ref.on('value', (data) => {
   centers = data.val();
   document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
})
}