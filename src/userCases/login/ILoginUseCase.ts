export interface ILoginUserRequest {
  email: string;
  password: string;
}

interface ILoginUseCase {
  execute: (args: ILoginUserRequest) => Promise<string>;
}

export { ILoginUseCase };
