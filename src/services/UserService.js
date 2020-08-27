class UserService {

    constructor(userModel) {
        this.userModel = userModel
    }

    async index() {
        const users = await this.userModel.findAll()

        return {
            success: true,
            message: `All users have been fetched.`,
            users
        }
    }

    async registerUser(reqBody) {

        const { username, email, password } = reqBody
        const userToCreate = { username, email, password }

        const registerResponse = await this.userModel.registerUser(userToCreate)
        const { newUser, error } = registerResponse

        if (error) return {
            success: false,
            message: error.message,
            error
        }

        return {
            success: true,
            message: `A new user has been registered.`,
            newUser: {
                _id: newUser._id,
                email: newUser.email,
                username: newUser.username,
                created_at: newUser.created_at
            }
        }
    }
}

module.exports = UserService