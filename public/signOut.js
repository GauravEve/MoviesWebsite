

  //signup function
  document.getElementById('signOut').addEventListener('click',(e)=>{
    e.preventDefault();
    signOut();
  })

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
	window.location.href='/login'
  }