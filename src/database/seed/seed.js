const mongoose = require('mongoose')
const User = require('../../models/user')
const users = require('./users')

// Connect to DB
require('../connect')()


const seedDataBase = async () => {
    // Seed users
    console.log(`Seeding users...`)
    await User.deleteMany({})
    await asyncForEach(users, async user => await User.create(user))

    // Close DB
    mongoose.connection.close()

}
seedDataBase()




// FUNCTIONS ==== //
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}
