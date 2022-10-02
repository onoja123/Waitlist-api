const http = require("http")
const app = require("./app");
const { mongo, default: mongoose } = require("mongoose");
const dotenv = require("dotenv")

dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE.replace(
  'password',
  process.env.DATABASE_PASSWORD
);

// Connect to mongo
mongoose.connect(DB, {useNewUrlParser: true})
.then(() => console.log("..Mongo connected"))
.catch(err => console.log(err))


const server = http.createServer(app)
const PORT = prcoess.env.PORT || 3000

server.listen(PORT, (req, res)=>{
    console.log(`server running at port ${PORT}`)
})