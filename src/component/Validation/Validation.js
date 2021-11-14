
const Validation =( values)=> {
    
    let errors={};

     if(!values.username) {
        errors.username="enter your name,please."
        } else if (!/^[0-9]+$/.test(values.username)){
        errors.username="username must have digits"
    }
    if(!values.email){
        errors.email="enter your email,please."
        }else if(!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.email)){
        errors.email="gmail is not valid"
    }
    if(!values.password){
        errors.password="enter your password,please."
        }else if (values.password.length != 5){
        errors.password="passord must be 5 simbols"
    }

    return errors;
}

export default Validation;