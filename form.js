let form = document.querySelector('form');
console.log(form);

document.querySelectorAll('.form-control').forEach(option => {
    option.addEventListener('input', checkField(option.id));
    console.log(option.id);
})

function checkField(id) {

} 