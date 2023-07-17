
const express=require('express');
const cors=require('cors');
const bcrypt=require('bcrypt');
const {connection} = require('./config/db');
const {User} = require('./models/User');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/users/register', async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        if(!name||!email||!password){
            return res.status(403).json({err: 'Provide all details'});
        }
        const isFound = await User.find({email});
        if(isFound.length){
            return res.status(400).json({err: 'User already registered'});
        }
        bcrypt.hash(password,4, async(err,hashed)=>{
            if(err){
                console.log('passError: ',err);
                return res.status(500).json({err:'Something went wrong'});
            }
            else{
                const newUser = new User({name,email,password:hashed});
                await newUser.save();
                return res.status(200).json({data: newUser, msg: 'User registered successfully'});
            }
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({err: 'Something went wrong'});
    }
})

app.get('/users', async(req, res)=>{
    try {
        const users = await User.find();
        return res.status(200).json({data: users});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({err: 'Something went wrong'});
    }
})

app.listen(process.env.port||4000,async()=>{
    try {
        await connection;
    } catch (error) {
        console.log(error);
    }
    console.log('listening on 4000');
})