const mongoose = require('mongoose')

module.exports = async (DB) => {

    mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => console.log(`Successfully conected to MongoDB production database.`))

}

