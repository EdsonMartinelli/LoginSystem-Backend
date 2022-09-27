import { emailConfirmProps, IUsersEmailService } from "../IUserEmailService";
import { createTransport, Transporter } from "nodemailer";
import { smtp as SMTP_CONFIG } from "./config/SMTP";

class NodemailerUserService implements IUsersEmailService {
  transporter: Transporter;
  constructor() {
    this.transporter = createTransport({
      host: SMTP_CONFIG.host,
      port: SMTP_CONFIG.port,
      secure: false,
      service: SMTP_CONFIG.service,
      auth: {
        user: SMTP_CONFIG.auth.user,
        pass: SMTP_CONFIG.auth.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendEmailConfirm({ email, emailToken }: emailConfirmProps) {
    const text = emailToken;
    const html = emailToken;
    try {
      await this.transporter.sendMail({
        to: email,
        subject: "Confirm your email",
        text,
        html,
      });
    } catch (error) {
      throw new Error("Email service is unavailable!");
    }
  }
}

export { NodemailerUserService };
