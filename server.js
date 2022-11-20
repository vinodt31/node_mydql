const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./models/index.js");
db.sequelize.sync();

const PORT = process.env.PORT || 8080; 

// Port
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});