import { dataEmail, IUsersEmailService } from "../IUserEmailService";
import { createTransport, Transporter } from "nodemailer";
class NodemailerUserService implements IUsersEmailService {
  transporter: Transporter;
  constructor() {
    this.transporter = createTransport({});
  }

  async sendEmailConfirm({ to, text, html }: dataEmail) {
    try {
      await this.transporter.sendMail({
        to,
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
