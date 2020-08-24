const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: email => {
                return new Promise((resolve, reject) => {
                    // Validate that input is an email
                    const regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    if (regex.test(email)) resolve(true)
                    else reject(false)
                })
            },
            message: `Email is not the proper format.`
        }
    },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profile_information: {}

}, {
    timestamps: {
        createdAt: `created_at`,
        updatedAt: `updated_at`
    }
})

const User = mongoose.model(`User`, schema)

module.exports = User



/**
 * What are people interested in knowing?
 * Relationship status, who with?
 * Age
 * Doing? Job, school, etc.
 * How long have they been at there current spot?
 * Favorites
 *
 */