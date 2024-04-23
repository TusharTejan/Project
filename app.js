const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://kundan:Oy6IP3Es6iSpAYsX@cluster0.c8z5ezw.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
