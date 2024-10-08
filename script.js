function submit(){
   let array = [
         {
            email : document . getElementById("email").value,
            user  : document . getElementById("name").value,
            pass : document . getElementById("password").value,
           password : document.getElementById("re-enter-password").value,
            
         }
    ]
    let arraytoString = JSON.stringify(array)
    localStorage.setItem ("user",arraytoString);
    console.log (array)
    let pass = document.getElementById("password").value
    let password = document.getElementById("re-enter-password").value
    
    if (pass === password) {
      Swal.fire({
         title: "signin succes fully",
         text: "That thing is still around?",
         icon: "tick"
       });
       
    }
    else{
      alert("re enter password is not correctb")
    }
}