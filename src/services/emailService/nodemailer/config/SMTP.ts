const smtp = {
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
  },
};

export { smtp };
