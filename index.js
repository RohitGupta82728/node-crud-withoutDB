const express = require('express');

const app = express();
const information =  require("./routes/information");


const port=process.env.PORT||5000;

app.use(express.json());

app.use('/information',information);



app.listen(port,()=>{
    console.log("Server is running at Port:"+port);
});