class UserService {
    static async index() {
        return {
            success: true,
            message: `All Users have been fetched.`
        }
    }
}

module.exports = UserService