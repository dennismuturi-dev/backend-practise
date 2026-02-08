const express = require("express");
const app = express()
const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server is runnig on PORT ${PORT}`)
})