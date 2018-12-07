 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDIsRrVhfG6Zves_DzkZITYCZHh3Jt3Zic",
    authDomain: "contact-form-18c67.firebaseapp.com",
    databaseURL: "https://contact-form-18c67.firebaseio.com",
    projectId: "contact-form-18c67",
    storageBucket: "contact-form-18c67.appspot.com",
    messagingSenderId: "654057279739"
  };

  firebase.initializeApp(config);

  // Create an instance of the class firebase
  var database = firebase.database();
  var messageRef  = database.ref('message');//creating a collection

  messageRef.on('value', gotData, errData); //this method "on" retrieve data from the database

//retrieving the data from the database
  function  gotData(data){
    // console.log(data.val());
    var message = data.val();
    var keys = Object.keys(message);
    console.log(keys);
    for (var i = 0 ; i < keys.length; i++){
        var k = keys[i];
        var names = message[k].name;
        var messages = message[k].message;
        console.log(names,messages);
    }
  }


  //writing an error message
  function errData(err){
    console.log('Error!');
    console.log(err);
  }

  
//listen for form submit, what the form does
document.getElementById('contactForm').addEventListener('submit', submitForm);

// what the submit form  does
function submitForm(e){
    e.preventDefault();

    // getting all the value from the form
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    console.log('you are about to submit a form inside this place');
    console.log(company);

    //calling the savemessage method 
    saveMessage(name,company,email,phone,message);

    
    // The success message for the user
    document.querySelector('.alert').style.display = 'block';

    //setting the timeout for the message
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // resetting the form after the submission of the form
    document.getElementById('contactForm').reset();
}


//A function that save message inside the firestore database
function saveMessage(name,company,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}

// A function that gets all elements by id
function getInputVal (id){
    return document.getElementById(id).value;  
}