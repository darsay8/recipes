const express = require("express");

const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });

//Connects to database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected :3"))
    .catch(err => console.error(err));


const app = express();


const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Server listening on PORT=${PORT}`);
});