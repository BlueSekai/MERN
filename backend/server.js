const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const cors = require("cors");
const path = require("path");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json({ limit: "35mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "35mb" }));

mongoose
  .connect(config.MONGODB_URL)
  .then(() => console.log("DB connected!"))
  .catch((err) => {
    console.log(err);
    process.exit();
  });


require("./routes/auth.route")(app);
require("./routes/user.route")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
