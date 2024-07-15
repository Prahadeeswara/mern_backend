const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
require('./models/db')
const taskRouter = require('./routes/routes'); // Use correct relative path

const app = express();
app.use(express.json())
app.use(cors())
app.use('/tasks', taskRouter);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
