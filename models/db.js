const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://prahadees2003:<Spidey@123>@cluster0.0cpcrjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => {
    console.log('db connected....');
})
.catch(err => {
    console.log(`error in db : ${err}`);
});


