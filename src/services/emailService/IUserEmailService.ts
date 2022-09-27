export interface emailConfirmProps {
  email: string;
  emailToken: string;
}

interface IUsersEmailService {
  sendEmailConfirm: (data: emailConfirmProps) => Promise<void>;
}

export { IUsersEmailService };
