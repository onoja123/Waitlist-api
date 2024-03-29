const User = require("../models/user")
const catchAsync = require("../utils/catchAsync");
const { waitlistV } = require("../utils/validator");
const AppError = require("./../utils/appError")
const nodemailer = require("nodemailer")

exports.addUsersToWailist = catchAsync(async (req, res, next)=>{

  const user = req.body.email;
  const {errors, valid} = waitlistV(user);
  
      if(!valid){
           return next(new AppError(`${errors.email}`), 422)
        }
      else{ 
        User.findOne({email: user.email}).then((result)=>{
          if(!result){
            return next(new AppError("Email already in waitlist"), 200)
          }else{
        
            var transport = nodemailer.createTransport({
              host: "",
              port: 2525,
              auth: {
                user: "",
                pass: ""
              }
            });
                  //send out mails
    
                  const mailOptions = {
                    from: "waitlist@gmail.com",
                    to: user,
                    subject: "Welcome to Waitlist Test",
                    text: `Hello  ${user} welcome to Waitlist test api, you are welcome.`
                  }
    
                  transport.sendMail(mailOptions,  async(error, info)=>{
                    if(error){
                      return  next (new AppError("and error occured"), 401)
                    }else{
                      const newuser = await User.create(req.body)
                          res.status(201)
                          .json({
                            status: 'Successfully added',
                            data:{
                            new: newuser
                          }
            
                      })
                    }
  
                })
              }    
            })
          }
      })
      


//Get all users in the waitlist
exports.getWaitlistUsers = catchAsync (async (req, res, next) =>{
    const user = await User.find()

        res.status(201)
            .json({
             status: 'success',
             result: user.length,
                 data: {
                    user
                }
        })

})
