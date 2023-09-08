document.getElementById('submit-buttton').addEventListener('click',function(){
   const email = document.getElementById('user-email').value;
   const password = document.getElementById('user-password').value;

   if(email =='admin@gmail.com' && password =='123456'){
     window.location.href = 'banking.html';
   }
})