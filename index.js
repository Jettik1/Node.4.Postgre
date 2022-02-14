const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')
const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())// чтобы распарсить jsom строку
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, (req, res) => {

})