const express = require("express")
const path = require("path")
const cors = require("cors")
const router = require("./src/routes/index")

const app = express()
app.use(express.json())
app.use(router)

app.listen(3000, () => console.log("Server running on 3000 port"))
