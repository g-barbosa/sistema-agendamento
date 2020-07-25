import bcrypt from 'bcrypt'

const GenPassHash = async (password: string) => {
    const salt = bcrypt.genSaltSync()

    return bcrypt.hashSync(password, salt)
}

export default GenPassHash