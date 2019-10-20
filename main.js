const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// validator
const namevalid = document.getElementById('valname');
const emailvalid = document.getElementById('valemail');
const msgvalid = document.getElementById('valmsg');

// corfirm if the form is filled esle throw am error message

function validate(){
    if(name.value && email.value && message.value){
        document.querySelector('.submitBtn').type=submit

    }else{
        if(name.value == '' || name == undefined){
            namevalid.style = "display:block"
        }else if(name.value !== null){
            namevalid.style ="display:none"
        }
        if(email.value == '' || email == undefined){
            emailvalid.style = "display:block"
        
        }else if(email.value !== null){
            emailvalid.style ="display:none"

        }
        if(message.value == '' || message == undefined){
            msgvalid.style = "display:block"

        }else if(message.value !== nullmsg){
          msgvalid.style = "display:none"
        }
    }
}