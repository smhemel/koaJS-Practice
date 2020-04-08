const koa      = require("koa");
const koaBody  = require("koa-body");
const router   = require("./routes");
const mongoose = require("mongoose");
const cors     = require('@koa/cors');

const db = require("./config").mongoURL;


const app = new koa();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(port, () => {
    mongoose.connect( db,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database connected...");
    })
    console.log(`Server is running on port ${port}`);
});

module.exports = app;