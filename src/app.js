const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.SERVER_PORT;

// dotenv.config();

// console.log(process.env.DB_USER)

app.use(cors());
app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
