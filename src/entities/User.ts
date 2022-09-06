class User{
    id? : string;
    email: string;
    username: string;   
    password: string;
    salt: string;
    emailVerified?: boolean = false;
    emailToken: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor({ email, username, password, salt, emailToken } : User){
        this.email = email;
        this.username = username;
        this.password = password;
        this.salt = salt;
        this.emailToken = emailToken;
    }
}

export { User };