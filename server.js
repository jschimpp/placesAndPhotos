const express=require('express');
const routes=require('./routes/api');
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');
const {json}=require('body-parser');
const dotenv=require('dotenv');
const {nanoid}=require('nanoid');

const app=express();
dotenv.config();
app.use(cors());
app.use(json());
const PORT=process.env.PORT||8080;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected!!!');
});

app.use(morgan('tiny'));
app.use('/posts', routes);
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));