export default class AuthController {
    constructor() {}

    login(email:string, password:string) {
        return [email, password];
    }

    register(email:string, password:string) {
        return [email, password];
    }
}