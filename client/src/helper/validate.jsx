import toast from "react-hot-toast"

// validate login page username //

export const usernamevalidate=async(values)=>{
    const errors=usernameverify({},values)
    return errors
}

// validate password //
export const passwordvalidate=async(values)=>{
    const errors=passwordverify({},values)
    return errors
}

// validate username//

const usernameverify=(err={},value)=>{
    if(!value.name){
        err.username=toast.error('Username Required')
    }
    //  else if(value.username.includes(" ")){
    //     err.username=toast.error('Invalid Username')
    // }
    return err
}

// validate password //

const passwordverify=(err={},values)=>{
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        err.password=toast.error("Passwod Required !")
    } else if(values.password.includes(" ")){
        err.password=toast.error("Invalid Passwod!")
    }
    else if(values.password.length < 4){
        err.password=toast.error("Passwod must be more than 4 character!")
    } else if(!specialChars.test(values.password)){
        err.password=toast.error("Passwod must have Special Character")
    }
    return err
}

// validate reset password //

export const resetpasswordvalidation=async(values)=>{
    const err=passwordverify({},values)

    if(values.password!==values.confirmpassword){
        err.exist=toast.error("Password Did Not Match..!")

    }
    return err;
}

// validate register form //

export const registerValidation=async(values)=>{
    const errors=usernameverify({},values)
    passwordverify(errors,values)
    emailVerify(errors,values)

    return errors
}

// email verification //
const emailVerify=(err={},values)=>{
    if(!values.email){
        err.email=toast.error("Email Required!")
    } else if(values.email.includes(" ")){
        err.email=toast.error("Invalid Email...!")
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        err.email = toast.error("Invalid email address...!")
    }
    return err
}


// validate profile page // 
 export const profileValidation=(values)=>{
    const errors=emailVerify({},values)
    mobileverify(errors,values)
    return errors
 }

 // mobile number verification //

 const mobileverify=(err={},values)=>{
    if(!values.mobile){
        err.email=toast.error("Mobile Required!")
    }
    else if(values.mobile.includes(" ")){
        err.mobile=toast.error("Invalid Mobile...!")
    }
    else if(values.mobile.length!==10){
        err.mobile = toast.error("Wrong mobile Number...!")
    }
    return err
 }