const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/todolist', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log('db connected....');
})
.catch(err => {
    console.log(`error in db : ${err}`);
});


