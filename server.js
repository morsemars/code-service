const express = require('express')
const codeRouter = require('./api/routes')
const errorHandler = require('./api/errorHandler')
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use('/code', codeRouter)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
