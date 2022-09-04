const express = require('express');
const cors = require("cors");
const app= express();
const port = process.env.PORT || 5000;

// const userRoutes = require('./Routes/routes')
const userRoute = require('./Routes/users.routes')

app.use(cors());
app.use(express.json());


app.use('/user', userRoute)

app.get('/',(req,res)=>{
    res.send('Hello Express')
})
app.listen(port, ()=>{
    console.log(`Server is running successfully in port ${port}`);
}) 


