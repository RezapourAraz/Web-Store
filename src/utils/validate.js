const validate = (user) => {

    const errors = {};

    if(!user.userName) {
        errors.userName = 'نام کاربری  خود را وارد کنید!'
    }

    if(!user.email) {
        errors.email = 'ایمیل خود را وارد کنید!'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
        errors.email = 'ایمیل معتبر وارد کنید!'
    }

    if(!user.password) {
        errors.password = 'گذرواژه خود را وارد کنید!'
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(user.password)) {
        errors.password = 'گذرواژه باید شامل حروف بزرگ و کوچک انگلیسی وعدد و حداقل 8 کاراکتر باشد!'
    }
    
    if(!user.confirmPassword) {
        errors.confirmPassword = 'گذرواژه خود را دوباره وارد کنید!'
    } else if (user.password !== user.confirmPassword) {
        errors.confirmPassword = 'تکرار گذرواژه نادرست است!'
    }

    if(user.checkbox) {
        delete errors.checkbox
    } else {
        errors.checkbox = 'لطفا قوانین سایت را قبول کنید!'
    }

    return errors;
}

export default validate;