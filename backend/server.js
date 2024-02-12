import  { config }  from 'dotenv';
config()
import express from 'express';
import Database from './config/db.config.js';
import userRoutes from './routes/user.route.js'


const app = express();


// connect to db
const db = new Database(process.env.MONGO_URI,process.env.DB_NAME);
db.connectionDb();

app.use(express.json());

app.use('/api/auth', userRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);