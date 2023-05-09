const mongoose=require('mongoose');
const connectDB =async()=>{
    try{
        //Mongodb connection string
        const con=await mongoose.connect(process.env.DB_URI,
            {useNewUrlParser: true , 
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
            }
            )
            console.log(`MongoDB connected:${con.connection.host}`)

    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB