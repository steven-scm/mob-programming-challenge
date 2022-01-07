const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Connected to mongo: "${db.connections[0].name}"`))
  .catch((err) => console.error("Unable to connect", err));
