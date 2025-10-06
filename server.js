const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')




const DB = process.env.DATABASE
const local_DB = process.env.DATABASE_LOCAL
// console.log(process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then((con) => {
  // console.log(con.connections)
  console.log('DB1 connection succesful')
}).catch(error => console.log(error));



/* Starting the server on port 4001. */
const port = 4001
app.listen(port, () => {
  console.log(`App running on port ${port} ..`)
})

