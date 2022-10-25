export interface userPrototypeProps {
  email: string;
  username: string;
  password: string;
  passwordResetToken: string;
  salt: string;
  emailToken: string;
}

class User {
  id: string;
  email: string;
  username: string;
  password: string;
  passwordResetToken: string;
  salt: string;
  emailVerified: boolean;
  emailToken: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    id,
    email,
    username,
    password,
    passwordResetToken,
    salt,
    emailToken,
    emailVerified = false,
    createdAt,
    updatedAt,
  }: User) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.passwordResetToken = passwordResetToken;
    this.salt = salt;
    this.emailVerified = emailVerified;
    this.emailToken = emailToken;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

export { User };
