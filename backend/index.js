import "dotenv/config"
import express from 'express';
const app = express()
const PORT = process.env.PORT;

app.get("/health",(req,res)=>{
    res.json({status:"ok", timestamp: new Date()});
});

async function startServer() {
    try {
        app.listen(PORT,(err)=>{
            if(err){
                console.error(`could not start the server ${err.message}`);
                process.exit(1);
            }
            console.log(`server started successfully, running on http://localhost:${PORT}`);
        });
    } catch (error) {
        process.exit(1);
    }
}
startServer();





