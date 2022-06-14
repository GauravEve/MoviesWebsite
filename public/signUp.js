

  //signup function
  document.getElementById('signUp').addEventListener('click',(e)=>{
    e.preventDefault();
    signUp();
  })

  
  function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");
   console.log(email.value,password.value);
   auth.createUserWithEmailAndPassword(email.value,password.value).then((user)=>{
     console.log(user);
     
    alert("SignUp Successfully");
   })
    //
    
  }

  //signIN function
  


  //signOut

 

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })