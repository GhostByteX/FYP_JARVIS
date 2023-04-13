const mongoose = require("mongoose")

//connect to mongodb
mongoose.connect("mongodb+srv://jarvis:1234@cluster0.qhqbvdx.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

console.log("Data saved to database")