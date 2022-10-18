const http = require("http")
const app = require("./app");
const mongoose  = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({ path: './config.env' });

// replacing db password from config files
const DB = process.env.DATABASE.replace(
  'password',
  process.env.DATABASE_PASSWORD
)

//connecting database
mongoose.connect(DB, {
  useNewUrlParser: true,
})
.then(()=>{
  console.log("Db connected sucessfully")
})



const server = http.createServer(app)
const PORT = process.env.PORT || 3000


//server listening to port
server.listen(PORT, (req, res)=>{
    console.log(`server running at port ${PORT}`)
})