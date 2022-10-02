const user = require("../models/user")
const catchAsync = require("../utils/catchAsync")
const {waitlist} = require("./../utils/validator")
const AppError = require("./../utils/appError")
const nodemailer = require("nodemailer")

exports.addUsersToWailist = catchAsync(async (req, res, next)=>{
    const user = req.body.email;

    const { errors, valid } = waitlist(user);
    if (!valid) {
        return next (new AppError("email is not valid"), 422);
      } else {
        user.findOne({ email: user }).then((result) => {
          if (result) {
            return  next (new AppError("Email already in waitlist"), 200)
          } else {

            //create transporter
            const transport = nodemailer.createTransport(
              {
                service: 'gmail',
                auth: {
                  user: "",
                  password: ""
                }
              })
              //send out mails

              const mailOptions = {
                from: "okpeonoja18@gmail.com",
                to: "lucydidam18@gmail.com",
                subject: "test email",
                text: "this is the body of the mail"
              }

              transport.sendMail(mailOptions, (error, info)=>{
                if(error){
                  return  next (new AppError("and error occured"), 401)
                }else{
                  const newuser = user.create(req.body)
                      res.status(201)
                      .json({
                        status: 'successfully added',
                        data:{
                        new: newuser
                      }
        
                  })
                }
              }
                
              )
            
          }})

          //send email to users that added emmail
 
}


})




//Get users in the waitlist
exports.getWaitlistUsers = catchAsync (async (req, res) =>{
    const user = await user.findById(req.params.id)

        res.status(201)
            .json({
             status: 'success',
                 data: {
                    user
                }
        })

})