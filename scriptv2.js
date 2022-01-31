let form = document.querySelector('form');
//console.log(form);

document.querySelectorAll('.form-control').forEach(option => {
    let fieldName = option.id;
    let fieldId = `#${fieldName}`;
    let errorId = `#${fieldName}Error`; 
    console.log(errorId);
    let response;
    option.addEventListener('input', function(fieldName) {
 
        console.log(errorId);
        console.log("eval");
        let fieldvalue = document.querySelector(`${fieldId}`).value);
        if (fieldName === "lastname" || fieldName === "firstname" ) {

            response = notEmpty(document.querySelector(`${fieldId}`).value);    
            console.log(response);
        }
        displayError2(errorId, this, response);
    })
})                  