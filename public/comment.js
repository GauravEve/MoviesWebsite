// const firebaseConfig = {
//   apiKey: "AIzaSyCfVFEBpSBkXAXWoc4_Xq5OEZF5uctcrSs",
//   authDomain: "realtime-comment-system-289a3.firebaseapp.com",
//   projectId: "realtime-comment-system-289a3",
//   storageBucket: "realtime-comment-system-289a3.appspot.com",
//   messagingSenderId: "833660512084",
//   appId: "1:833660512084:web:4c6e5f5f89c56873c68ac1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

 const db=firebase.firestore();

 firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    console.log(email);
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
  }
})

const form=document.getElementById('comments1');

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  db.collection('comments').add({
    name:form.name1.value,
    comment:form.comment1.value
  });
  form.name1.value='';
  form.comment1.value='';
});
// const form2=document.getElementById('comments2');
// form2.addEventListener('submit',(e)=>{
//   e.preventDefault();
//   db.collection('comments2').add({
//     name:form2.name.value,
//     comment:form2.comment.value
//   });
//   form2.name.value='';
//   form2.comment.value='';
// });     

const div=document.querySelector('.cont');

renderList=(doc)=>{
  var main_div=document.createElement('div');
  var card_body=document.createElement('div');
  var name=document.createElement('h4');
  var comment=document.createElement('p');
  main_div.setAttribute('class','card mt-3');
  card_body.setAttribute('class','card-body');
  name.setAttribute('class','card-title');
  comment.setAttribute('class','card-text');
  name.textContent=doc.data().name;
  comment.textContent=doc.data().comment;
  card_body.appendChild(name);
  card_body.appendChild(comment);
  main_div.appendChild(card_body);
  div.appendChild(main_div);
}

db.collection('comments').onSnapshot(snap=>{
  let changes=snap.docChanges();
  changes.forEach(change => {
    if(change.type=='added'){
      renderList(change.doc);
    }
    
  });
})
// db.collection('comments2').onSnapshot(snap=>{
//   let changes=snap.docChanges();
//   changes.forEach(change => {
//     if(change.type=='added'){
//       renderList(change.doc);
//     }
    
//   });
// })

document.addEventListener('DOMContentLoaded', function(){
  let stars = document.querySelectorAll('.star');
  stars.forEach(function(star){
      star.addEventListener('click', setRating); 
  });
  
  let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
  let target = stars[rating - 1];
  target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev){
  let span = ev.currentTarget;
  let stars = document.querySelectorAll('.star');
  let match = false;
  let num = 0;
  stars.forEach(function(star, index){
      if(match){
          star.classList.remove('rated');
      }else{
          star.classList.add('rated');
      }
      //are we currently looking at the span that was clicked
      if(star === span){
          match = true;
          num = index + 1;
      }
  });
  document.querySelector('.stars').setAttribute('data-rating', num);
}