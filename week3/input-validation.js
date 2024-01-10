const express = require("express");
const zod = require("zod")
const app = express();

const schema = zod.array(zod.number());
  
app.use(express.json());

app.post("/health-checkup",  function (req, res) {
  // kidneys = [1, 2]
  
  const kidneys = req.body.kidneys;
  console.log(schema.safeParse(kidneys));
  const response = schema.safeParse(kidneys)
  if(!response.success){
    res.status(411).json({
        msg:"input is invalid"
    })
  }
  else{
    res.send({
        response
    })
    }
});

app.listen(3000);