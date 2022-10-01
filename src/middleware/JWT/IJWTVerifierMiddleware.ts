export interface payloadProps {
  id: string;
  email: string;
  username: string;
  iat: number;
}

export interface tokenInfoProps {
  token: string;
  payload: payloadProps;
}

interface IJWTVerifierMiddleware {
  execute: (token: string | undefined) => tokenInfoProps;
}

export { IJWTVerifierMiddleware };
