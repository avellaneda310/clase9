const express = require("express");
const app = express();

require("dotenv").config({path: `./config/.env`});
const port= process.env.PORT_SERVER || 4500;

const home = require("./routes/home");
const productosRouter = require('./routes/productos');
//const authRouter = require('./routes/auth');

app.use("/", home);
app.use('/productos', productosRouter);
//app.use('/login', authRouter);


app.listen(port, () => {
    console.log(`servidor en port ${port}`)
});