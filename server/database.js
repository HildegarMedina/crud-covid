mongoose.connect("mongodb://localhost/crud-covid", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));