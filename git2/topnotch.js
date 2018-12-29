var config = {
    apiKey: "AIzaSyDexK17sL_1W2mShAchVwSTgc231lpUBOc",
    authDomain: "t-euphoria.firebaseapp.com",
    databaseURL: "https://t-euphoria.firebaseio.com",
    projectId: "t-euphoria",
    storageBucket: "t-euphoria.appspot.com",
    messagingSenderId: "331178327824"
  };

  firebase.initializeApp(config);

var database = firebase.firestore();
database.settings({timestampsInSnapshots : true })
// var messageRef  = database.ref('UserProfile');//creating a collection

document.getElementById('contactForm').addEventListener('submit', isset, submitForm);

function submitForm(e){
    e.preventDefault();
    var email = getInputValue('email');
    var event_location = getInputValue('event_location');
    var event_type = getInputValue('event_type');
    var name = getInputValue('name');
    var phone = getInputValue('phone');
     //getting input from a checkbox
    var service = []; 
    var inputElements = document.getElementsByClassName('messageCheckbox');
    for(var i=0; inputElements[i] ; i++){
      if(inputElements[i].checked === true){
           service.push (inputElements[i].value);
      } 
    }
        console.log(service);

        for (var i = 0 ; i < service.length ; i++){
                console.log(service[i]);
            }

        saveMessage(email,event_location,event_type,name,phone,service);

    
}

function saveMessage(email,event_location,event_type,name,phone,service){
    // var newMessageRef = messageRef.push();
    database.collection('User Request').add({
        email:email,
        event_location:event_location,
        event_type:event_type,
        name:name,
        phone:phone,
        service:service

    });
}

function getInputValue (id){
   return document.getElementById(id).value;
}
