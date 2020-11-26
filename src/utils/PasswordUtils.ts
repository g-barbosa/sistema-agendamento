import bcrypt from 'bcrypt'
import jwt from 'jwt-simple'

const GenPassHash = (password: string) => {
    const salt = bcrypt.genSaltSync()

    return bcrypt.hashSync(password, salt)
}

const GenToken = async (entityId: string, login: string) => {
    const now = Math.floor(Date.now() / 1000)

    const userInfo = {
        entityId: entityId,
        login: login,
        iat: now + (3 * 24 * 60 * 60)
    }

    const authSecret: string = process.env.APP_AUTH_SECRET!

    return jwt.encode(userInfo, authSecret)
}

export { GenPassHash, GenToken }
