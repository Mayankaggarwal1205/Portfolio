let validFirstName = document.getElementById('validFirstName');
let validLastName = document.getElementById('validLastName');
let validUsername = document.getElementById('validUsername');
let validPassword = document.getElementById('validPassword');
let validRetypePassword = document.getElementById('validRetypePassword');
let validCheckbox = document.getElementById('validCheckbox');

validFirstName = false;
validLastName = false;
validUsername = false;
validPassword = false;
validRetypePassword = false;
validCheckbox = false;
$('#success').hide();
$('#failure').hide();

let firstName = document.getElementById('FirstName')
if (firstName == null) {
    alert('hdhdh');
}
console.log(firstName);
firstName.addEventListener('blur', () => {
    console.log('firstname is blurred');
    let regex = /^([a-zA-Z\s]+)$/;
    let str = firstName.value;
    if (regex.test(str)) {
        console.log('Firstname is valid');
        firstName.classList.remove('is-invalid');
        firstName.classList.add('is-valid');
        validFirstName = true;
        console.log(validFirstName);
    } else {
        firstName.classList.add('is-invalid');
        firstName.classList.remove('is-valid');
        validFirstName = false;
        console.log(validFirstName);
        console.log('An occur occured. Try again');
    }
})

let lastName = document.getElementById('LastName')
lastName.addEventListener('blur', () => {
    console.log('lastname is blurred');
    let regex = /^([a-zA-Z\s]+)$/;
    let str = lastName.value;
    if (regex.test(str)) {
        console.log('Lastname is valid');
        lastName.classList.remove('is-invalid');
        lastName.classList.add('is-valid');
        validLastName = true;
        console.log(validLastName);
    } else {
        lastName.classList.add('is-invalid');
        lastName.classList.remove('is-valid');
        validLastName = false;
        console.log(validLastName);
        console.log('An occur occured. Try again');
    }
})

let username = document.getElementById('Username');
username.addEventListener('blur', () => {
    console.log('username is blurred');
    let regex = /^([a-zA-Z\w$]){5,20}$/;
    let str = username.value;
    if (regex.test(str)) {
        console.log('username is valid');
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        validUsername = true;
        console.log(validUsername);
    } else {
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        validUsername = false;
        console.log(validUsername);
        console.log('An occur occured. Try again');
    }
})

let password = document.getElementById('Password');
password.addEventListener('blur', () => {
    console.log('password is blurred');
    let regex = /^([a-zA-Z0-9]+)([@0-9]+)([^\W]+)$/;
    let str = password.value;
    if (regex.test(str)) {
        console.log('password is valid');
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        validPassword = true;
        console.log(validPassword);
    } else {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        validPassword = false;
        console.log(validPassword);
        console.log('An occur occured. Try again');
    }
})

let retypePassword = document.getElementById('Retype your Password');
retypePassword.addEventListener('blur', () => {
    console.log('retypepassword is blurred');
    // let regex = /password.value/;
    // let str = retypePassword.value;
    if (retypePassword.value = password.value) {
        console.log('retypepassword is valid');
        retypePassword.classList.remove('is-invalid');
        retypePassword.classList.add('is-valid');
        validRetypePassword = true;
        console.log(validRetypePassword);
    } else {
        retypePassword.classList.add('is-invalid');
        retypePassword.classList.remove('is-valid');
        validRetypePassword = false;
        console.log(validRetypePassword);
        console.log('An occur occured. Try again');
    }
})


let date = document.getElementById('Date');
if (date.value == null) {
    currentDate = new Date();
    console.log(currentDate);
    currentDate == date.value;
}
// console.log(firstName , lastName , username , password, retypePassword, date);

// let checkbox = document.getElementById('checkbox');
// checkbox.addEventListener('blur', () => {

//     if (validCheckbox = true) {
//         console.log('you have ticked the terms and conditions')
//         checkbox.classList.add('is-valid')
//         checkbox.classList.remove('is-invalid')
//     } else {
//         checkbox.classList.add('is-invalid');
//         checkbox.classList.remove('is-valid');
//         console.log('you have not ticked the terms and conditions');
//     }
// })

function myFunction() {
    if(document.getElementById("gender").required = true){
        success.classList.add('show');
        failure.classList.remove('show');
        $('#success').show();
        $('#failure').hide();
    } else{
        success.classList.remove('show');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
}

// let signUp = localStorage.getItem('signUp');

// function success() {
//     setTimeout(() => {
//         <div id="success" class="alert alert-success alert-dismissible fade" role="alert">
//             <strong>Success!</strong> Your form request has been successfully submitted
//             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//                 <span aria-hidden="true"></span>
//             </button>
//         </div>
//     }, 2000);
// }

// let success = document.getElementById('success');
// console.log(success);

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    myFunction();
    if (validFirstName && validLastName && validUsername && validPassword && validRetypePassword && validCheckbox) {
        myFunction();
        console.log('submit fired')
        success.classList.add('show');
        failure.classList.remove('show');
        $('#success').show();
        $('#failure').hide();
    } else {
        success.classList.remove('show');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
        console.log('submit not fired');
    }
})