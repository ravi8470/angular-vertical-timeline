var app = require('express')();
var cors = require('cors');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var dataSchema = new Schema({
  data: String
},{ timestamps: { createdAt: 'created_at' }})
const Data = mongoose.model('Data', dataSchema);

app.use(cors())
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
//   next();
// });

app.get('/', (req,res)=> {
  res.send('Hello world')
})

app.get('/data', (req, res) => {
  Data.find({},(err, resp)=>{
    res.send(resp);
  })
})

app.post('/data', (req,res) => {
  console.log(req.body)
  const myData = new Data({data: req.body.data})
  myData.save().then((x) => res.send(x));

})

app.listen(3000, ()=> {
  console.log('server listening on 3000');
})
