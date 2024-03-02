import express from "express";
let app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});