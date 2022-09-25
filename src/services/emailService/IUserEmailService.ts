export interface dataEmail {
  // from: string,
  to: string;
  // subject: string,
  text: string;
  html: string;
}

interface IUsersEmailService {
  sendEmailConfirm: (data: dataEmail) => Promise<void>;
}

export { IUsersEmailService };
