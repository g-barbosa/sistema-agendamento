import jwt from 'jwt-simple'

const GenToken = async (id: number, email: string) => {
    const now = Math.floor(Date.now() / 1000)

    const userInfo = {
        id: id,
        email: email,
        iat: now + (3 * 24 * 60 * 60)
    }

    const authSecret: string = process.env.APP_AUTH_SECRET!

    return jwt.encode(userInfo, authSecret)
}

export default GenToken