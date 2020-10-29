const express = require("express");
const app = express();
const root = require('./routes/root');
const contacts = require('./routes/contacts');

app.use(express.json());

// the next two lines are middleware that takes a request and pass control to the router
app.use("/whos-there", root);
app.use("/contacts", contacts);

const port = process.env.PORT || 3000;

 app.listen(port, () =>
    console.log(`Listening on port ${port}...`)
);
