import express from 'express';

import todoRoutes from './routes/todoRoutes';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api/todo', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});