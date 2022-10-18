const validator = require('validator')

module.exports.waitlistV = (email) => {
	const errors = {};
	if (!validator.isEmail(email)){
		errors["email"] = "Not a valid email address";
		}
	if(email === ''){
		errors["email"] = "Email cannot be blank"
	}
    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}