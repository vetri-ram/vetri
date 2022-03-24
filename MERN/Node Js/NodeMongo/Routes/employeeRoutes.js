const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send("hello World from india ");
})

module.exports = router;