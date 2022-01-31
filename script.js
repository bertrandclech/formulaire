/** Vérification du formulaire */

let lastname = document.querySelector('#lastname');
lastname.addEventListener('input', function() {
    let response = notEmpty(this.value);

    let error=document.querySelector('#lastnameError');
    console.log(this);
    this.style.border = '2px solid red'; // valuer rouge par défaut

    if (response) {
        this.style.border = '2px solid green'
        error.style.display = 'none';
//        this.style.backgroundColor = 'green';
//        this.style.color = 'white';

    }    
    else {
        error.style.display = 'block';
//        this.style.backgroundColor = 'red';
    }
});

let firstname = document.querySelector('#firstname');
firstname.addEventListener('input', function() {
    let response = notEmpty(this.value);
    let error=document.querySelector('#firstnameError');
    this.style.border = '2px solid red';
    if (response) {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
       this.style.border = '2px, solid, green'; 
       error.style.display = 'none';
    }    
    else {
        this.style.backgroundColor = 'red';
        error.style.display = 'block';
    }
}); 

let pseudo = document.querySelector('#pseudo');
pseudo.addEventListener('input', function() {
//    let response1 = notEmpty(this.value);
    let response = isLength(this.value, 5);
    let error=document.querySelector('#pseudoError');
    error.style.display = 'none';
    if (response) {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
        error.style.display = 'none';
//        this.style.border = "1px, solid, 'green'"; 
    }    
    else {
        this.style.backgroundColor = 'red'; 
        error.style.display = 'block'; 
    }
});

let email = document.querySelector('#email');
email.addEventListener('input', function() {
//    let response1 = notEmpty(this.value)
    let response = isEmail(this.value);
    let error=document.querySelector('#emailError');
    error.style.display = 'none';
    if (response) {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
//        this.style.border = "1px, solid, 'green'";    
    }    
    else {
        this.style.backgroundColor = 'red';
        error.style.display = 'block'; 
    }
});

let password = document.querySelector('#password');
password.addEventListener('input', function() {
//    let response1 = notEmpty(this.value);
    let response = isLength(this.value, 6);
    let error=document.querySelector('#passwordError1');
    error.style.display = 'none';
    if (response) {
        this.style.backgroundColor = 'green';
        this.style.color = 'white';
        error.style.display = 'none';
//        this.style.border = "1px, solid, 'green'"; 
    }    
    else {
        this.style.backgroundColor = 'red'; 
        error.style.display = 'block'; 
    }
});

let confirmPassword = document.querySelector('#confirmPassword');
confirmPassword.addEventListener('input', function() {
    //    let response1 = notEmpty(this.value)
        let response = isEqual(this.value, document.querySelector('#password').value);
        let error=document.querySelector('#confirmPasswordError');
        error.style.display = 'none';
        if (response) {
            this.style.backgroundColor = 'green';
            this.style.color = 'white';
    //        this.style.border = "1px, solid, 'green'";    
        }    
        else {
            this.style.backgroundColor = 'red';
           error.style.display = 'block'; 
        }
    });

let eyeIcon = document.querySelectorAll("i");

eyeIcon.forEach(i => {
        i.addEventListener("click", function(){
            i.classList.toggle("bi-eye-slash-fill");
            i.classList.toggle("bi-eye-fill");
    
            let eyeID = i.id;
            // console.log(eyeID);
    
            if (eyeID == "eye1"){
                const type = password.getAttribute("type") === "password" ? "text" : "password";
                password.setAttribute("type", type);
            }else if (eyeID == "eye2"){
                const type = confirmPassword.getAttribute("type") === "password" ? "text" : "password";
                confirmPassword.setAttribute("type", type);
            }
        });
 });