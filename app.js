const express = require('express');
const app = express();
const PORT = 8000
const HOST = "0.0.0.0"


app.get("/", (req, res) => {
    res.status(200).send({message: "Created brand new ec2 instance. And started app manually so app stop doesn't fail?"})
});

app.listen(PORT, () => {
    console.log(`App has started. Listening on dev server at http://${HOST}:${PORT}`)
});