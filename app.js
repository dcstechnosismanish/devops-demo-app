const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("🚀 Welcome to DevOps Demo App");
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        application: "DevOps Demo App",
        version: "1.0.0"
    });
});

app.get("/version", (req, res) => {
    res.json({
        node: process.version
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
