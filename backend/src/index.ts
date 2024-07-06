import { Application, Request, Response, NextFunction } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import sequelize from './config/db';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', todoRoutes);
app.use(cors());

app.use(errorMiddleware);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => {
    console.error("unable to connect to the database: ", err);
});