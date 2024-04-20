const express = require('express')
const app = express()
const port = 5455
app.get('/log', (req, res) => {
  res.json({
    msg:"hello how are you ???"
  })
})
app.get("/hello",(req,res)=>{
  res.json({
    msg:"i am, active working s"
  })
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})