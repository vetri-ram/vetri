const express = require('express');
const vetri = express();

vetri.get('/',(req,res) => {
    res.send("Hi Friends, am subash vetri")
})
vetri.get('/about',(req,res) => {
    res.send("Hi Friends, am subash vetri. am a mern developer")
})
vetri.listen(2000, () => {
    console.log('server Started On 2000');
});

