const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};



app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config database
const db = require("./models");
db.sequelize.sync();

 require("./routes/productos.route.js")(app);
 require("./routes/clientes.route.js")(app);
 require("./routes/proveedores.route.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor esta ejecutando http://localhost:${PORT}.`);
});
