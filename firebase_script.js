
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApch3heZSrrUT5m0ti5j13BRM094cwNUM",
    authDomain: "lydiamarketing-3c3aa.firebaseapp.com",
    projectId: "lydiamarketing-3c3aa",
    storageBucket: "lydiamarketing-3c3aa.appspot.com",
    messagingSenderId: "546275863482",
    appId: "1:546275863482:web:d316684fb9734f2a224b83",
    measurementId: "G-9Q42JKVCLP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


//  const analytics = getAnalytics(app);

var database = firebase.database();


function submitForm() {
    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_number").value;
    
    // Save the form data to the database
    var contactRef = database.ref("contacts");
    contactRef.push({
      name: name,
      email: email,
      phone_number: phone_number
    });
    
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone_number").value = "";
  }
  