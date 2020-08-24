require('dotenv').config()

const { DB } = process.env

module.exports = async () => {

    if (DB) {
        // Connect to actual, persistant Database
        require('./proddb')(DB)
    } else {
        // Connect to In Memory Database
        require('./tempdb')()
    }

}

