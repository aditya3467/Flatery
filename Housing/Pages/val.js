const form1 = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const mobile = document.getElementById('mobile');
const password2 = document.getElementById('password2');
const aadhar = document.getElementById('aadhar');

form1.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    console.log("here");
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
const isValidphone = mobile => {
    const re =  /^\d{10}$/;
    return re.test(Number(mobile));
    console.log(re);
    // return re.value.match(mobile);

}
function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}




const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    // const mobValue = mobile.value.trim();
    const password2Value = password2.value.trim();
    const adhr = aadhar.value.trim();

    if(usernameValue === '') {
        setError(username, '');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    // if(mobValue === '') {
    //     setError(mobile, 'Mobile Number is required');
    // } else if (!isValidphone(emailValue)) {
    //     setError(mobile, 'Provide a valid');
    // } else {
    //     setSuccess(mobile);
    // }
    var phone = document.getElementById('mobile').value;
    if(phone === ''){
        setError(mobile, 'Email is required');
    }
    if (!validatePhoneNumber(phone)) {
        setError(mobile, 'Provide a valid mobile number');
        } 
        else {
            setSuccess(mobile);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");

    }
    else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    }
     else {
        setSuccess(password2);
    }

    if(adhr===''){
        setError(aadhar,'provide your AADHAR number');
    }

    else if(adhr.length<16){
        setError(aadhar, ' INCORRECT')

    }

    else{
        setSuccess(aadhar);
    }

};
