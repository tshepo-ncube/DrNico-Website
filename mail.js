const firebaseConfig = {
    apiKey: "AIzaSyApch3heZSrrUT5m0ti5j13BRM094cwNUM",
    authDomain: "lydiamarketing-3c3aa.firebaseapp.com",
    databaseURL: "https://lydiamarketing-3c3aa-default-rtdb.firebaseio.com",
    projectId: "lydiamarketing-3c3aa",
    storageBucket: "lydiamarketing-3c3aa.appspot.com",
    messagingSenderId: "546275863482",
    appId: "1:546275863482:web:37c04a116cb5d468224b83",
    measurementId: "G-KHJ45HD79X"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  // Show the snackbar when the form is submitted
function showSnackbar() {
    var snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
  }
  

  var contactFormDB = firebase.database().ref("contactForm");

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from actually submitting
  
    // Get the form data
    var name = document.querySelector('#name').value;
    var surname = document.querySelector('#surname').value;
    var email = document.querySelector('#email').value;
    var option = document.querySelector('#options').value;
    var phone = document.querySelector('#phone_number').value;
    // // Create a new entry in the database
    // database.ref('submissions').push({
    //   name: name,
    //   surname: surname,
    //   email: email,
    //   option: option
    // });

    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        surname:surname,
        phone:phone,
        email: email,
        option: option,
    });
  
    // Clear the form inputs
    document.querySelector('#name').value = '';
    document.querySelector('#surname').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#options').value = '';
    document.querySelector('#phone_number').value = '';
    const message = document.createElement('p');
  message.textContent = 'Thank you for contacting us. We will get back to you soon.';
  form.appendChild(message);
  });