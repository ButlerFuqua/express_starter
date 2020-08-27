const User = require('../src/models/user')
const UserService = require('../src/services/UserService')
const userService = new UserService(User)

describe(`Sample Test`, () => {

    beforeAll(async () => {
        // Connect to in memory db
        require('../src/database/tempdb')()
    })

    // Fetch all users
    it(`Fetch all users`, async () => {
        const result = await userService.index()
        const { success } = result

        expect(success).toBe(true)
    })
})