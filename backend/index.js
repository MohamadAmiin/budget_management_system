const express = require('express');
const userRouter = require('./routers/userRouter');
const budgetRouter = require('./routers/budgetRouter');
const categoryRouter = require ('./routers/categoryRouter')
const expenseRouter = require ('./routers/expenseRouter')
const connectDb  = require ('./config/DbConnect')
const passwordRouter = require('./routers/passwordRouter');
const cors = require ('cors');
const bodyParser = require('body-parser');



const app = express();
app.use(bodyParser.json())
app.use(express.json())

const PORT = 9000

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:5173'];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));


connectDb

app.use('/api/users', userRouter);
app.use('/api/budgets', budgetRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/expense' , expenseRouter);
// app.use('/api/password', passwordRouter);







  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
