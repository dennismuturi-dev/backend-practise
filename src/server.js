const express = require("express");
const app = express()
const PORT = 5001;


app.get("/hello", (req,res)=> {
    res.json({message: "Hello World"})
})

const server = app.listen(PORT, () => {
    console.log(`Server is runnig on PORT ${PORT}`)
})