const User = require('../src/models/user')
const UserService = require('../src/services/UserService')
const userService = new UserService(User)

describe(`Sample Test`, () => {

    beforeAll(async () => {
        // Connect to in memory db
        require('../src/database/tempdb')()
    })

    // Register a user
    it(`Registers a user`, async () => {
        const userToCreate = {
            email: `test@site.com`,
            username: `test_user`,
            password: `password1`
        }
        const result = await userService.registerUser(userToCreate)

        const { newUser, success, error } = result

        expect(success).toBe(true)
        expect(newUser.email).toBe(userToCreate.email)
        expect(newUser.username).toBe(userToCreate.username)
        expect(error).toBeFalsy()
    })


    // Register a duplicate user hsould recevie an error
    it(`Receives an error trying to register a duplicate user`, async () => {
        const userToCreate = {
            email: `test@site.com`,
            username: `test_user`,
            password: `password1`
        }
        const result = await userService.registerUser(userToCreate)

        const { error, success, newUser } = result

        expect(success).toBe(false)
        expect(error).toBeTruthy()
        expect(newUser).toBeFalsy()
    })

    // Fetch all users
    it(`Fetch all users`, async () => {
        const result = await userService.index()
        const { success, users } = result

        expect(success).toBe(true)
        expect(users.length > 0).toBe(true)
    })
})