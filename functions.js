let notEmpty = function(value){
    console.log(value);
    return value.length === 0; 
}

let isLength = function(value, min){
    return value.length >= min;
}


let matchEmail = function(value) {
 //   const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;
    return value.match(regex);
}

let checkEmail = function(value) {
    console.log(value);
    let myArray = value.split('@');
//    console.log(`${a} et ${b}`);
    console.log(myArray);
    if ( myArray.length === 2) {
        return true;
    }  
    else {
        return false;
    }
}

let isEmail = function(value) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,12}$/;
    return value.match(pattern);
}

let stringContainsMaj = function (string) {
    const regex = /(?=.*[AZ])/;
    return value.match(regex);                 
}

let stringContainsSpecial = function (string) {
    const regex = /(?=.*[-+_!@#$%^&*., ?])/;    
    return value.match(regex); 
}

let checkPasswordLength  = function (password) {
    return  isLength(password, 12);
}

let isEqual = function(p1, p2) {
    return p1 === p2;
}

// affichage nom et erreurs formulaire

let displayError = function(message, input, response) {

   let errorMessage = document.querySelector(message);
    input.style.border = '2px solid red';
    errorMessage.style.display = 'block';

    if (response) {
        input.style.border = '2px solid green';
        errorMessage.style.display = 'none';
    }
}

let displayError2 = function(message, input, response) {
    console.log("dispalyError2");
    console.log(message);
    console.log(input);
    console.log(response);
    let errorMessage = document.querySelector(message);
     input.style.border = '2px solid red';
     input.style.backgroundColor = 'red';
     input.style.color = 'white';
     errorMessage.style.display = 'block';
 
     if (response) {
         input.style.border = '2px solid green';
         input.style.backgroundColor = 'green';
         input.style.color = 'white';
         errorMessage.style.display = 'none';
     }
 }