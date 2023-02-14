import express from "express";
import mongo from "./config/db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.js"
import morgan from "morgan";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

//- Using body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("[:method] :url (:status) :res[content-length] - :response-time ms"));


//- set view engine //(ejs) 
app.set('view engine', 'ejs')

//- Serving Static files
app.use(express.static('public'))

//- Add Path of Routes
app.use(indexRoutes);

//- Add DataBase
mongo();

app.listen(PORT, () => {
    console.debug(`[DEBUG]\tServer started at : http://localhost:${PORT}`);
})

