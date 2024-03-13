import { config } from 'dotenv';
import express from 'express';
import Database from './config/db.config.js';
import RoutNotFound from './middlewares/RouteNotFoundMiddleware.js';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import assignRole from './routes/asignRole.route.js';

import swaggerUi from 'swagger-ui-express';
import  apiDocumentation  from './docs/apiDocs.js';

const app = express();

// connect to db
const db = new Database(process.env.MONGO_URI, process.env.DB_NAME);
db.connectionDb();

// Swagger documentation routes
const port = process.env.PORT || 3333;


app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/users', assignRole);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.use(RoutNotFound);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
