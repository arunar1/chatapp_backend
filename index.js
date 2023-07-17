const express=require('express')

const cors=require('cors')

const app=express();

app.use(express.json());

app.use(cors({origin:true}));


app.post('/authenticate',async(req,res)=>{
    const {username}=req.body
    return res.json({username:username,secret:'welcomhallo'})
});


app.listen(3001)