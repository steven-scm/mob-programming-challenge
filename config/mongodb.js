const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/my-dev-squad", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`Connected to mongo: "${db.connections[0].name}"`))
  .catch((err) => console.error("Unable to connect", err));
