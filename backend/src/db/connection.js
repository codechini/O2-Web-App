const mongoose = require("mongoose")
const database = ""
mongoose.connect(`mongodb://localhost:27017/${database}`,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log("Failed to connect to the database: ",err)
})