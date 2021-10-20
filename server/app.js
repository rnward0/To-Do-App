const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8000;

const app = express();

const routes = require('./controllers/todo');

app.use(cors());
app.use(express.json({extended: false}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});