const express = require('express') 
const sendEmail = require('./mail')
const app = express();
const log = console.log;

const cors = require ('cors')



const port = 9099;
app.listen(port, () => log(`Server listening on port: ${port}`));



//chunk 2
//data parsing

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())

app.use(cors())


app.post('/email', async (req, res) => {
  

     sendEmail(req.body.from, req.body.to, req.body.subject , req.body.text);
    res.send('Email sent!')
   
    
    });
