const express  = require("express");
const PORT = process.env.port || 3001;
const app = express();

app.get("/apiTest", (req, res) => {
    res.json({ message: "GET request recieved from server" });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});