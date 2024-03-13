import  { config }  from 'dotenv';
config()
import express from 'express';
import Database from './config/db.config.js';
import RoutNotFound  from './middlewares/RouteNotFoundMiddleware.js';
import userRoutes from './routes/user.route.js';
import cookieParser from "cookie-parser";
import cors from 'cors'


const app = express();

app.use(cors())

// connect to db
const db = new Database(process.env.MONGO_URI,process.env.DB_NAME);
db.connectionDb();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);


app.use(RoutNotFound);


const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);