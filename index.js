
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');

let radioMale = document.getElementById('male');
let radioFemale = document.getElementById('female');
let radioOthers = document.getElementById('others');
let submit = document.getElementById('submit');

let country = document.getElementById('country')


let validFirstName = false;
let validLastName = false;
let validEmail = false;
let validMobile = false;
let validGender = false;
let validCountry = false;



const onChangeFName = () =>{
    if(
        firstName.value.includes("1") ||
        firstName.value.includes("2") ||
        firstName.value.includes("3") ||
        firstName.value.includes("4") ||
        firstName.value.includes("5") ||
        firstName.value.includes("6") ||
        firstName.value.includes("7") ||
        firstName.value.includes("8") ||
        firstName.value.includes("9") ||
        firstName.value.includes("0") ||
        firstName.value.includes("@") ||
        firstName.value.includes("#") ||
        firstName.value.includes("$") ||
        firstName.value.includes("%") ||
        firstName.value.includes("^") ||
        firstName.value.includes("&") ||
        firstName.value.includes("*") ||
        firstName.value.includes("(") ||
        firstName.value.includes(")") ||
        firstName.value.includes("-") ){

            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none';
        }
        else if(firstName.value.length <3){
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none';
        }
        else{

            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
            validFirstName = true;
        }
}

const onChangeLName = () =>{
    if(
        lastName.value.includes("1") ||
        lastName.value.includes("2") ||
        lastName.value.includes("3") ||
        lastName.value.includes("4") ||
        lastName.value.includes("5") ||
        lastName.value.includes("6") ||
        lastName.value.includes("7") ||
        lastName.value.includes("8") ||
        lastName.value.includes("9") ||
        lastName.value.includes("0") ||
        lastName.value.includes("@") ||
        lastName.value.includes("#") ||
        lastName.value.includes("$") ||
        lastName.value.includes("%") ||
        lastName.value.includes("^") ||
        lastName.value.includes("&") ||
        lastName.value.includes("*") ||
        lastName.value.includes("(") ||
        lastName.value.includes(")") ||
        lastName.value.includes("-") 
        ){
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
        }
        else if(lastName.value.length <3){
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
        }
        else{
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none';
            validLastName = true;
        }
}


const onChangeEmail =()=>{
    let afterDot = email.value.split(".")[1];
    if(email.value.length <6){
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'block';
    }else if(!email.value.includes("@")){
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'block';   
    }
    else if(
        email.value.includes("#") ||
        email.value.includes("$") ||
        email.value.includes("%") ||
        email.value.includes("^") ||
        email.value.includes("&") ||
        email.value.includes("*") ||
        email.value.includes("(") ||
        email.value.includes(")") ||
        email.value.includes("-") 
            ){
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'block';
    }
    else if(afterDot.length <=1){
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'block';
    }
    else if(email.value.charAt(0) === "@"){
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'block';
    }
    else if(afterDot.length >3){
        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'block';
    }
    else{
        document.getElementById('email-valid').style.display = 'block';
        document.getElementById('email-invalid').style.display = 'none';
        validEmail = true;
    }

}

const onChangeMobile =()=>{
    if( isNaN(mobile.value) ){
        document.getElementById('mobile-invalid').style.display = 'block'
        document.getElementById('mobile-valid').style.display = 'none'
    }else if(mobile.value.length != 10 ){
        document.getElementById('mobile-invalid').style.display = 'block'
        document.getElementById('mobile-valid').style.display = 'none'
    }else{
        document.getElementById('mobile-invalid').style.display = 'none'
        document.getElementById('mobile-valid').style.display = 'block';
        validMobile = true;
    }
}


const setRadio =()=>{
    if(!radioMale.checked && !radioFemale.checked && !radioOthers.checked){
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
    }else{
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
        validGender = true;
    }
}

const handleCountry = ()=>{
    if(country.value === 'Choose...'){
        document.getElementById('countryInvalid').style.display = "block";
        document.getElementById('countryValid').style.display = "none";
        validCountry = false;
    }else{
        document.getElementById('countryValid').style.display = "block"
        document.getElementById('countryInvalid').style.display = "none";
        validCountry = true;
    }
}



submit.addEventListener('click', ()=>{
    setRadio()
    handleCountry()
    if(validFirstName && validLastName && validEmail && validMobile && validGender && validCountry){
        alert("Your details have been saved successfully!")
        document.getElementById('registration').reset();


        // ----------------------------- RESET WARNING--------------------------------
        document.getElementById('first-name-invalid').style.display = 'none';
        document.getElementById('first-name-valid').style.display = 'none';

        document.getElementById('last-name-invalid').style.display = 'none';
        document.getElementById('last-name-valid').style.display = 'none';

        document.getElementById('email-valid').style.display = 'none';
        document.getElementById('email-invalid').style.display = 'none';

        document.getElementById('mobile-invalid').style.display = 'none';
        document.getElementById('mobile-valid').style.display = 'none';

        document.getElementById('state-valid').style.display = 'none';
        document.getElementById('state-invalid').style.display = 'none';

        document.getElementById('countryValid').style.display = "none"
        document.getElementById('countryInvalid').style.display = "none";
    }


})