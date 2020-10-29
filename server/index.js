const express = require("express");
const app = express();
const root = require('./routes/root');

app.use(express.json());
app.use("/whos-there", root);

const port = process.env.PORT || 3000;

 app.listen(port, () =>
    console.log(`Listening on port ${port}...`)
);
