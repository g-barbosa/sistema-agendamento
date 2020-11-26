import { Request, Response } from 'express'
const ValidateSession = (request: Request, response: Response) => {
    
    if ( request.url !== "/login" && !request.session?.isLoggedIn )
        response.redirect("/login")
}

export { ValidateSession }