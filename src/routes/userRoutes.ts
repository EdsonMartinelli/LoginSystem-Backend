import { NextFunction, Router, Request, Response } from "express";
import { JWTVerifierInstance } from "../middleware/JWT/JWTVerifierInstance";
import { LoginInstance } from "../userCases/login/LoginInstance";
import { ResetPasswordInstance } from "../userCases/resetPassword/ResetPasswordInstance";
import { RevalidateTokenInstance } from "../userCases/revalidateToken/RevalidateTokenInstance";
import { SignUpInstance } from "../userCases/signup/SignUpInstance";
import { ValidateAccountInstance } from "../userCases/validateAccount/ValidateAccountInstance";

export const usersRouter = Router();

usersRouter.post("/signup", (req: Request, res: Response) => {
  void SignUpInstance().handle(req, res);
});

usersRouter.post("/login", (req: Request, res: Response) => {
  void LoginInstance().handle(req, res);
});

usersRouter.patch("/validateemail/:id", (req: Request, res: Response) => {
  void ValidateAccountInstance().handle(req, res);
});

usersRouter.patch(
  "/resetpassword/:passwordResetToken",
  (req: Request, res: Response) => {
    void ResetPasswordInstance().handle(req, res);
  }
);

usersRouter.post(
  "/revalidateToken",
  (req: Request, res: Response, next: NextFunction) => {
    JWTVerifierInstance().handle(req, res, next);
  },

  (req: Request, res: Response) => {
    RevalidateTokenInstance().handle(req, res);
  }
);
