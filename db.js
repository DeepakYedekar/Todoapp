const mongoose = require("mongoose");

module.exports = async () => {
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try{
        const con =await mongoose.connect(process.env.DB,
        connectionParams);
        if(con){
            console.log("db connection successfull");
        }
    }catch(err){
        console.log(err);
    }
};
