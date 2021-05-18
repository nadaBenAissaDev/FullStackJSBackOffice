const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const path= require ('path');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//middleware
app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri ="mongodb+srv://Nada:nada1997@devconnector.br6ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true,useFindAndModify: false  }
);

//GUser
app.use('/api/auth', require('./routes/GUser/auth'));
app.use('/api/register', require('./routes/GUser/register'));

//GJob
app.use('/api/Job', require('./routes/GJob/Job'));
app.use('/api/JobHR', require('./routes/GJob/HR'));
app.use('/api/JobAdmin', require('./routes/GJob/Admin'));
//GCv
app.use('/api/Cv', require('./routes/GCv/Cv'));


//GReclamation  chouchou
const reclamationRouter = require('./routes/GReclamation/reclamation');
const userRouter = require('./routes/GUser/user');
const calendarRouter = require('./routes/GCalendar/calendar');

app.use('/reclamation', reclamationRouter);
app.use( '/user' ,userRouter);
app.use('/calendar', calendarRouter);

//
app.use('/personalityTest',require('./routes/GPersonalityTest/personality'));
app.use('/personalityTestResults',require('./routes/GPersonalityTest/personalitytestresults'));

//skillstest 
app.use("/api/question", require("./routes/skillsroute/question"));
app.use("/api/test", require("./routes/skillsroute/test"));
app.use("/api/result", require("./routes/skillsroute/result"));
app.use("/api/profile", require("./routes/GUser/profile"));
app.use("/api/quiz",require("./routes/skillsroute/demoquiz"));

// //deploy
// app.use(express.static('../../FullStackJS'));
// app.get('*', (req, res)=> {
// res.sendFile(path.resolve(__dirname, 'FullStackJS', 'build', 'index.html'));
// });

// app.use(express.static(path.join(__dirname, "../../FullStackJS", "build")))
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../FullStackJS", "build", "index.html"));
// });
app.use(express.static(__dirname));
app.use('/',express.static(path.resolve(__dirname , '../client/')));



////for the mail api najla 
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');

const {SENDGRID_API} = require('./config/keys');

const transporter = nodemailer.createTransport(sendGridTransport({
    auth:{
        api_key:SENDGRID_API
    }
}))

app.post('/send', (req, res) => {
    const { name, email, message, subject } = req.body
    transporter.sendMail({
        to:email,
        from:'najladaoud2@gmail.com',
        subject:subject,
      // <h3>${name}</h3>
        html:`<p>${message}</p>`
    }).then(resp => {
        res.json({resp})
    })
    .catch(err => {
        console.log(err)
    })
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});