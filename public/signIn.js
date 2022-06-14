

  document.getElementById('signIn').addEventListener('click',(e)=>{
  e.preventDefault();
  signIn();
  })

  function  signIn(){
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    // firebase.auth().signInWithEmailAndPassword(email,password).then((user)=>{
    //   console.log(user);
  

    // })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user=>{
      window.location.href = '/';
      console.log(user);
    })
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
    
  }
  