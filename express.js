var express = require('express');
var cors = require("cors");
var app = express();
var axios = require("axios")
app.use(cors());
let url = 'http://vop.baidu.com/pro_api';

app.post('/image2Text', async function(req, res){
  let {auth, fileSize, fileContent} = req.query;
  let param = {
    "dev_pid": 80001,
    "format":'pcm',
    "rate": 16000,
    "channel":1,
    "token": auth.token,
    "cuid":"68-EC-C5-85-FA-A7",
    "len":fileSize,
    "speech": fileContent 
  }

  let result = await axios.post(url, param,{
    headers: {
      'Content-Type': "application/json"
    }
  });
  res.send(result.data).end()
});

app.listen(3000);