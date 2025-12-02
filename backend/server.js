const express = require('express');
const cors = require("cors")

const app = express();
const PORT = 8080;

const corsOptions  =  {
    origin: "*",
    methods: "GET",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get("/api/menssagem", (req,res) => {
    res.json({ data: "Menssagem secreta da api em 8080!"});
});

app.listen(PORT, () => {
    console.log(`API Backend rodando em http://localhost:${PORT}`);
})