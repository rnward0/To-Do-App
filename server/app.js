const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8000;

const app = express();

const todoRoutes = require('./controllers/todo');
const authRoutes = require('./controllers/auth');
const MongoConnect = require('./model/db').mongoConnect;

app.use(cors());
app.use(express.json({extended: false}));

app.use(authRoutes);
app.use(todoRoutes);

MongoConnect(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT}`);
    });
});